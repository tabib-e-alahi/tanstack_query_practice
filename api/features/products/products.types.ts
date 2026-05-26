export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
}

export interface GetProductsParams {
  limit?: number
  skip?: number
  search?: string
  category?: string
  sortBy?: string
  order?: 'asc' | 'desc'
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductCategoryDto {
  slug: string
  name: string
  url: string
}

export interface CreateProductInput {
  title: string
  description?: string
  price?: number
  category?: string
}

export interface UpdateProductInput {
  id: number
  title?: string
  description?: string
  price?: number
  stock?: number
}

export interface DeleteProductResponse extends Product {
  isDeleted: boolean
  deletedOn: string
}