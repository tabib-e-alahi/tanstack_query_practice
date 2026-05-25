"use client"

import { useEffect, useState } from "react";
import ProductCard from "./_components/Card";

interface Product {
  id: string | number;
}

interface ApiResponse {
  products: Product[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data: ApiResponse) => setProducts(data.products));
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
