import { http } from "@/api/lib/http";
import { CreateProductInput, DeleteProductResponse, GetProductsParams, Product, ProductCategoryDto, ProductsResponse, UpdateProductInput } from "./products.types";

function buildProductQuery(params: GetProductsParams = {}) {
  const searchParams = new URLSearchParams()

  if (params.limit !== undefined) {
    searchParams.set('limit', String(params.limit))
  }

  if (params.skip !== undefined) {
    searchParams.set('skip', String(params.skip))
  }

  if (params.sortBy) {
    searchParams.set('sortBy', params.sortBy)
  }

  if (params.order) {
    searchParams.set('order', params.order)
  }

  const queryString = searchParams.toString()

  return queryString ? `?${queryString}` : ''
}

const productApi = {
  getProducts: (params: GetProductsParams = {}): Promise<ProductsResponse> => {
    if (params.search) {
      const query = new URLSearchParams({
        q: params.search,
      }).toString()

      return http<ProductsResponse>(`products/search?${query}`)
    }

    if (params.category) {
      return http<ProductsResponse>(`products/category/${params.category}`)
    }

    return http<ProductsResponse>(`products${buildProductQuery(params)}`)
  },

  getProductById: (id: number): Promise<Product> => {
    return http<Product>(`products/${id}`)
  },

  getCategories: (): Promise<ProductCategoryDto[]> => {
    return http<ProductCategoryDto[]>('products/categories')
  },

  createProduct: (input: CreateProductInput): Promise<Product> => {
    return http<Product>('products/add', {
      method: 'POST',
      body: JSON.stringify(input),
    })
  },

  updateProduct: ({ id, ...input }: UpdateProductInput): Promise<Product> => {
    return http<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(input),
    })
  },

  deleteProduct: (id: number): Promise<DeleteProductResponse> => {
    return http<DeleteProductResponse>(`/products/${id}`, {
      method: 'DELETE',
    })
  },
}

export default productApi