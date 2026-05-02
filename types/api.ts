export interface ProductImage {
  url: string;
  altText: string;
}

export interface Promotion {
  name: string;
  percentage: number;
}

export interface Product {
  articleNumber: string;
  brandLogo: string;
  brandName: string;
  description: string;
  gtin: string;
  image: ProductImage;
  price: number;
  promotion: Promotion | null;
  title: string;
  url: string;
}

export interface ApiResponse {
  title: string;
  logo: {
    url: string;
    altText: string;
  };
  products: Product[];
}