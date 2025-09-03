import { api } from "@/config/api"
import type { Product } from "@/types/product-type";
import { useEffect } from "react"

export function Home() {
  useEffect(()=>{
    async function getProducts() {
      const response = await api.get<{products: Product[]}>('/products')
      console.log(response.data);
    }
    getProducts()
  },[])
  return (
    <div>
      home
    </div>
  )
}
