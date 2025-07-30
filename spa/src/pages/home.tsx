import { api } from "@/config/api"
import type { Product } from "@/types/product-type";
import { useEffect } from "react"

export function Home() {
  useEffect(()=>{
    async function getProducts() {
      const response = await api.get<{products: Product[]}>('/products')
      console.log(JSON.stringify(response.data.products[0].name, null, 2));
    }
    getProducts()
  },[])
  return (
    <div>
      home
    </div>
  )
}
