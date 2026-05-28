import { http } from "@/api/lib/http";
import { ProductsResponse } from "./products.types";


const productsAPI = {
  getALlProducts: () : Promise<ProductsResponse> =>{
    return http("/products")
  }
}