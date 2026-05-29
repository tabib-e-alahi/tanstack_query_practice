import { useQuery } from "@tanstack/react-query"
import { GetProductsParams, ProductsResponse } from "./products.types"
import productKeys from "./products.keys"
import productApi from "./products.api"

export const useGetProducts = (params: GetProductsParams = {}) => {
  return useQuery<ProductsResponse>({
    queryKey: productKeys.list(params),
    queryFn: () => productApi.getProducts(params),
  })
}


// export const useGetProductById = (id: number) => {
//   return useQuery<ProductDto>({
//     queryKey: productKeys.detail(id),
//     queryFn: () => productApi.getProductById(id),
//     enabled: Boolean(id),
//   })
// }

// export const useGetProductCategories = () => {
//   return useQuery<ProductCategoryDto[]>({
//     queryKey: productKeys.categories(),
//     queryFn: () => productApi.getCategories(),
//   })
// }