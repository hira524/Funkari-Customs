import { ReactNode } from 'react';

interface Variation {
  color: string;
  colorCode: string;
  colorImage: string;
  image: string;
}

export interface ProductType {
  id: string;
  category: string;
  type: string;
  name: string;
  gender: string;
  new: boolean;
  sale: boolean;
  rate: number;
  price: number;
  originPrice: number;
  brand: string;
  sold: number;
  quantity: number;
  quantityPurchase: number;
  sizes: string[];
  variation: Variation[];
  thumbImage: string[];
  images: string[];
  description: string;
  action: string;
  slug: string;
  careInstructions?: ReactNode; // Optional for flexibility
  video?: string; // Optional to fix the LookBook build error
}
