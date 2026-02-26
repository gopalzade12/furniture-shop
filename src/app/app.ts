import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ProductCategory = 'Almirah' | 'Tables' | 'Beds' | 'Dressing' | 'Custom Product';

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  image: string;
  category: ProductCategory;
}

interface ProductFormState {
  name: string;
  price: number | null;
  color: string;
  category: ProductCategory;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly storageKey = 'furniture-shop-products';

  readonly categories: readonly ProductCategory[] = [
    'Almirah',
    'Tables',
    'Beds',
    'Dressing',
    'Custom Product'
  ];

  readonly placeholderImage = 'https://via.placeholder.com/320x220?text=No+Image';

  readonly products = signal<Product[]>(this.loadProducts());

  readonly form: ProductFormState = this.getDefaultForm();

  imagePreview = '';

  addProduct(): void {
    const name = this.form.name.trim();
    const color = this.form.color.trim();
    const price = this.form.price;
    const image = this.imagePreview || this.form.imageUrl.trim() || this.placeholderImage;

    if (!name || !color || price === null || price <= 0) {
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name,
      color,
      price,
      image,
      category: this.form.category
    };

    const updatedProducts = [...this.products(), newProduct];
    this.products.set(updatedProducts);
    this.saveProducts(updatedProducts);
    this.resetForm();
  }

  removeProduct(productId: number): void {
    const updatedProducts = this.products().filter((product) => product.id !== productId);
    this.products.set(updatedProducts);
    this.saveProducts(updatedProducts);
  }

  async onImageFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    this.imagePreview = await this.fileToDataUrl(file);
    this.form.imageUrl = '';
  }

  getProductsByCategory(category: ProductCategory): Product[] {
    return this.products().filter((product) => product.category === category);
  }

  private getDefaultForm(): ProductFormState {
    return {
      name: '',
      price: null,
      color: '',
      category: 'Almirah',
      imageUrl: ''
    };
  }

  private resetForm(): void {
    this.form.name = '';
    this.form.price = null;
    this.form.color = '';
    this.form.category = 'Almirah';
    this.form.imageUrl = '';
    this.imagePreview = '';
  }

  private loadProducts(): Product[] {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored) as Product[];
    } catch {
      return [];
    }
  }

  private saveProducts(products: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  private fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error('Failed to read image file.'));
      reader.readAsDataURL(file);
    });
  }
}
