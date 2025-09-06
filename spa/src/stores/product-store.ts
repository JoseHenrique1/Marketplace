import type { Product } from "@/types/product-type"
import { create } from "zustand"

interface ProductStoreType {
  products: Product[]
  setProducts: (products: Product[]) => void
  addProduct: (product: Product) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  deleteProduct: (id: string) => void
}


export const useProductStore = create<ProductStoreType>((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  addProduct: (product) => set((state) => ({
    products: [...state.products, product]
  })),

  updateProduct: (id, updates) => set((state) => ({
    products: state.products.map(product =>
      product.id === id ? { ...product, ...updates } : product
    )
  })),

  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(product => product.id !== id)
  })),
}))