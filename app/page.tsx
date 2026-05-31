"use client"

import { useGetProducts } from "@/api/features/products/product.queries";
import ProductCard from "./_components/Card";
import { Product, ProductsResponse } from "@/api/features/products";
import { Spinner } from "@/components/ui/spinner";


export default function Home() {
  const { data, isLoading, isFetching, isError, error } = useGetProducts({
    limit: 12,
    skip: 0,
  })

   if (isLoading) return <Spinner className="size-8" />
  if (isError) return <p>{error.message}</p>
  return (
    <div className="">
      <main className="max-w-7xl mx-auto p-3 grid grid-cols-5 gap-4">
          {
            data?.products.map((product: Product) => <ProductCard key={product.id}></ProductCard>)
          }
          
      </main>
    </div>
  );
}
