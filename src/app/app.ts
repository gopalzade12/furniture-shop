import { Component, signal } from '@angular/core';

type ProductCategory = 'Almirah' | 'Tables' | 'Beds' | 'Dressing' | 'Custom Product';

interface Product {
  id: number;
  name: string;
  price: number;
  finalPrice: number;
  color: string;
  image: string;
  category: ProductCategory;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly categories: readonly ProductCategory[] = [
    'Almirah',
    'Tables',
    'Beds',
    'Dressing',
    'Custom Product'
  ];

  readonly products = signal<Product[]>([
    {
      id: 1,
      name: '2.5 Door',
      price: 12000,
      finalPrice: 11000,
      color: 'Red',
      image: '/images/almirah/2.5red.jpeg',
      category: 'Almirah'
    },
    {
      id: 2,
      name: '2 Door (2 mirror)',
      price: 9000,
      finalPrice: 8000,
      color: 'Green',
      image: '/images/almirah/2.green.jpeg',
      category: 'Almirah'
    },
    {
      id: 3,
      name: '3-Door',
      price: 13000,
      finalPrice: 12000,
      color: 'Godrej logo',
      image: '/images/almirah/3.1black.jpeg',
      category: 'Almirah'
    },
    {
      id: 4,
      name: '2-Door',
      price: 7500,
      finalPrice: 6500,
      color: 'All Colors',
      image: '/images/almirah/2.red.jpeg',
      category: 'Almirah'
    },
    {
      id: 5,
      name: '2-Door',
      price: 8500,
      finalPrice: 7500,
      color: 'Godrej logo',
      image: '/images/almirah/2godrej.jpeg',
      category: 'Almirah'
    },
    {
      id: 6,
      name: '3-Door (Design)',
      price: 12000,
      finalPrice: 11000,
      color: 'Black',
      image: '/images/almirah/3design.jpeg',
      category: 'Almirah'
    },
    {
      id: 7,
      name: '2 Door (2 mirror)',
      price: 9000,
      finalPrice: 8000,
      color: 'Pink',
      image: '/images/almirah/2-2red.jpeg',
      category: 'Almirah'
    },
    {
      id: 8,
      name: '3 Door Italic',
      price: 13000,
      finalPrice: 12000,
      color: 'Blue',
      image: '/images/almirah/italic.jpeg',
      category: 'Almirah'
    },
    {
      id: 9,
      name: '3 Door Lining',
      price: 13000,
      finalPrice: 12000,
      color: 'mehroon',
      image: '/images/almirah/lining.jpeg',
      category: 'Almirah'
    },
    {
      id: 10,
      name: '3 Door',
      price: 12000,
      finalPrice: 11000,
      color: 'Black-white',
      image: '/images/almirah/3.1black.jpeg',
      category: 'Almirah'
    },
    {
      id: 11,
      name: '2 Door (2 mirror)',
      price: 12000,
      finalPrice: 11000,
      color: 'Pink',
      image: '/images/almirah/2.2red.jpeg',
      category: 'Almirah'
    },
    {
      id: 12,
      name: 'Wooden',
      price: 8500,
      finalPrice: 7500,
      color: 'Black',
      image: '/images/almirah/wooden-black.jpeg',
      category: 'Almirah'
    },
    {
      id: 13,
      name: 'Wooden',
      price: 8500,
      finalPrice: 7500,
      color: 'White',
      image: '/images/almirah/Wooden-red.jpeg',
      category: 'Almirah'
    },
    {
      id: 22,
      name: 'Wooden (small)',
      price: 3300,
      finalPrice: 2800,
      color: 'Black',
      image: '/images/almirah/almirah(small).jpeg',
      category: 'Almirah'
    },
    {
      id: 23,
      name: 'Wooden (large)',
      price: 5500,
      finalPrice: 5000,
      color: 'Black',
      image: '/images/almirah/almirah(medium).jpeg',
      category: 'Almirah'
    },
    {
      id: 25,
      name: 'Sliding (6*6) with mattress',
      price: 16000,
      finalPrice: 15000,
      color: 'Standard',
      image: '/images/beds/Sliding (6-6).jpeg',
      category: 'Beds'
    },
    {
      id: 26,
      name: 'Sliding (6*6) without mattress',
      price: 12500,
      finalPrice: 11500,
      color: 'Standard',
      image: '/images/beds/Sliding (6-6).jpeg',
      category: 'Beds'
    },
    {
      id: 27,
      name: 'Box Bed (Fixed) long support',
      price: 10000,
      finalPrice: 9000,
      color: 'Standard',
      image: '/images/beds/Box bed.jpeg',
      category: 'Beds'
    },
    {
      id: 28,
      name: 'Box Bed (Fixed) short support',
      price: 9000,
      finalPrice: 8000,
      color: 'Standard',
      image: '/images/beds/Box bed.jpeg',
      category: 'Beds'
    },
    {
      id: 29,
      name: 'Sofa with Box',
      price: 10000,
      finalPrice: 9000,
      color: 'Standard',
      image: '/images/beds/Sofa with box.jpeg',
      category: 'Beds'
    },
    {
      id: 30,
      name: 'Sofa without Box',
      price: 7000,
      finalPrice: 6000,
      color: 'Standard',
      image: '/images/beds/sofa.jpeg',
      category: 'Beds'
    },
    {
      id: 31,
      name: 'Single plywood (4*6)',
      price: 4000,
      finalPrice: 3600,
      color: 'Standard',
      image: '/images/beds/Simple bed 4-6.jpeg',
      category: 'Beds'
    },
    {
      id: 32,
      name: 'Single plywood (3.5*6)',
      price: 3200,
      finalPrice: 3000,
      color: 'Standard',
      image: '/images/beds/Simple bed.jpeg',
      category: 'Beds'
    },
    {
      id: 33,
      name: 'Single plywood center folding',
      price: 3200,
      finalPrice: 3000,
      color: 'Standard',
      image: '/images/beds/middle folding.jpeg',
      category: 'Beds'
    },
    {
      id: 34,
      name: "Patti 3.5'",
      price: 4700,
      finalPrice: 3700,
      color: 'Standard',
      image: '/images/beds/Folding patti 3.jpeg',
      category: 'Beds'
    },
    {
      id: 35,
      name: "Patti 3'",
      price: 4200,
      finalPrice: 3200,
      color: 'Standard',
      image: '/images/beds/Folding patti 3.jpeg',
      category: 'Beds'
    },
    {
      id: 36,
      name: 'Khatiya (new design)',
      price: 2000,
      finalPrice: 1500,
      color: 'Standard',
      image: '/images/beds/Folding (design).jpeg',
      category: 'Beds'
    },
    {
      id: 37,
      name: "Khatiya 3.5'",
      price: 1400,
      finalPrice: 1200,
      color: 'Standard',
      image: '/images/beds/khatiya.jpeg',
      category: 'Beds'
    },
    {
      id: 38,
      name: "Khatiya 3'",
      price: 1300,
      finalPrice: 1100,
      color: 'Standard',
      image: '/images/beds/khatiya.jpeg',
      category: 'Beds'
    },
    {
      id: 39,
      name: "Single plywood with legs folding (4')",
      price: 4000,
      finalPrice: 3800,
      color: 'Standard',
      image: '/images/beds/Plywood legs folding.jpeg',
      category: 'Beds'
    },
    {
      id: 40,
      name: "Single plywood with legs folding (3.5')",
      price: 3700,
      finalPrice: 3500,
      color: 'Standard',
      image: '/images/beds/Plywood legs folding.jpeg',
      category: 'Beds'
    },
    {
      id: 41,
      name: "Single plywood with legs folding (3')",
      price: 3500,
      finalPrice: 3200,
      color: 'Standard',
      image: '/images/beds/Plywood legs folding.jpeg',
      category: 'Beds'
    },
    {
      id: 42,
      name: 'Closed computer table',
      price: 4800,
      finalPrice: 4500,
      color: 'Standard',
      image: '/images/tables/Computer (large).jpeg',
      category: 'Tables'
    },
    {
      id: 43,
      name: '2-Drawer closed table',
      price: 5200,
      finalPrice: 4800,
      color: 'Standard',
      image: '/images/tables/Double drawer.jpeg',
      category: 'Tables'
    },
    {
      id: 44,
      name: '1-Drawer open table',
      price: 3800,
      finalPrice: 3500,
      color: 'Standard',
      image: '/images/tables/Single drawer.jpeg',
      category: 'Tables'
    },
    {
      id: 45,
      name: '1-Drawer closed table',
      price: 4500,
      finalPrice: 4000,
      color: 'Standard',
      image: '/images/tables/Computer small.jpeg',
      category: 'Tables'
    },
    {
      id: 46,
      name: 'Counter table',
      price: 2800,
      finalPrice: 2500,
      color: 'Standard',
      image: '/images/tables/single counter.jpeg',
      category: 'Tables'
    },
    {
      id: 47,
      name: 'Small Size t-table',
      price: 1000,
      finalPrice: 800,
      color: 'Standard',
      image: '/images/tables/Small Table with middle angle.jpeg',
      category: 'Tables'
    },
    {
      id: 48,
      name: 'Single Top Table (wooden colour)',
      price: 1300,
      finalPrice: 1200,
      color: 'Standard',
      image: '/images/tables/Without drawer (wooden).jpeg',
      category: 'Tables'
    },
    {
      id: 49,
      name: 'Single Top Table (Black colour)',
      price: 1200,
      finalPrice: 1100,
      color: 'Standard',
      image: '/images/tables/Without drawer (wooden).jpeg',
      category: 'Tables'
    },
    {
      id: 50,
      name: 'Big Rack (Black)',
      price: 2100,
      finalPrice: 2000,
      color: 'Black',
      image: '/images/tables/Without drawer (wooden).jpeg',
      category: 'Custom Product'
    },
    {
      id: 51,
      name: 'Big Rack (White)',
      price: 1600,
      finalPrice: 1500,
      color: 'White',
      image: '/images/tables/Without drawer (wooden).jpeg',
      category: 'Custom Product'
    },
    {
      id: 52,
      name: 'Small Rack (White)',
      price: 1300,
      finalPrice: 1200,
      color: 'White',
      image: '/images/tables/Without drawer (wooden).jpeg',
      category: 'Custom Product'
    },
    {
      id: 53,
      name: 'Garden Zula',
      price: 6500,
      finalPrice: 6000,
      color: 'Standard',
      image: '/images/tables/Garden Zula.jpeg',
      category: 'Custom Product'
    },
    {
      id: 18,
      name: 'Home made dressing',
      price: 3500,
      finalPrice: 3000,
      color: 'wooden',
      image: '/images/dressing/dressinh_home.jpeg',
      category: 'Dressing'
    },
    {
      id: 19,
      name: 'Single drawer dressing',
      price: 3000,
      finalPrice: 2500,
      color: 'wooden',
      image: '/images/dressing/dre_wooden.jpeg',
      category: 'Dressing'
    },
    {
      id: 20,
      name: 'Double drawer dressing',
      price: 4000,
      finalPrice: 3500,
      color: 'Black',
      image: '/images/dressing/Dre_black2.jpeg',
      category: 'Dressing'
    },
    {
      id: 21,
      name: 'Large dressing',
      price: 5500,
      finalPrice: 5000,
      color: 'Black',
      image: '/images/dressing/dres_big.jpeg',
      category: 'Dressing'
    },
    {
      id: 24,
      name: 'Small Single dressing',
      price: 1800,
      finalPrice: 1500,
      color: 'Black',
      image: '/images/dressing/Small Simple dressing.jpeg',
      category: 'Dressing'
    },
  ]);

  getProductsByCategory(category: ProductCategory): Product[] {
    return this.products().filter((product) => product.category === category);
  }
}
