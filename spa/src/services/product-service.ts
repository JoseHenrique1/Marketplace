import { api } from "@/config/api";
import type { Product } from "@/types/product-type";

export async function getAllProducts() {
  try {
    const response = await api.get<{products:Product[]}>(`/products`)
    
    if (!response || response.status !== 200) throw new Error('Não autorizado');
    console.log(response.data);
    
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function createProduct(productFormData: FormData) {
  try {
    const response = await api.post<{product:Product}>(`/products`, productFormData)
    
    if (!response || response.status !== 201) {
      console.log(response);
      throw new Error('Não autorizado')
    };
    console.log(response.data);
    
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function editProduct(productId: string, productFormData: FormData) {
  try {
    const response = await api.put<{product:Product}>(`/products/${productId}`, productFormData)
    
    if (!response || response.status !== 201) {
      console.log(response);
      throw new Error('Não autorizado')
    };
    console.log(response.data);
    
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function deleteProduct(id: string) {
  try {
    const response = await api.delete(`/products/${id}`)
    
    if (!response || response.status !== 200) {
      console.log(response);
      throw new Error('Não autorizado')
    };
    console.log(response.data);
    
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
  return null;
}