"use client"

import { useEffect, useState } from "react";
import ProductCard from "./_components/Card";
import { Product, ProductsResponse } from "@/api/features/products";
import { http } from "@/api/lib/http";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    http<ProductsResponse>("products", {
      method: "GET"
    }).then((data) => {
      console.log(data);
      setProducts(data.products);
    }).catch((error) => {
      console.error("Error fetching products:", error);
    });   
  }, []);

  console.log(products);
  return (
    <div className="">
      <main className="max-w-7xl mx-auto p-3 grid grid-cols-5 gap-4">
          {
            products?.map((product: Product) => <ProductCard key={product.id}></ProductCard>)
          }
      </main>
    </div>
  );
}
