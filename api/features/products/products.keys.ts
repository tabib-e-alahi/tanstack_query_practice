import { GetProductsParams } from "./products.types";


const productKeys = {
  all: ['products'] as const,

  lists: () => [...productKeys.all, 'list'] as const,
  list: (params: GetProductsParams) => [...productKeys.lists(), params] as const,

  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: number) =>[...productKeys.details(), id] as const,

  categories: () => [...productKeys.all, 'categories'] as const,

}

export default productKeys;