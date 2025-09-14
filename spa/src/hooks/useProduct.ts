import { createProduct, deleteProduct, editProduct, getAllProducts } from "@/services/product-service";
import { useAuthStore } from "@/stores/auth-store";
import { useProductStore } from "@/stores/product-store";
import { useEffect, useMemo } from "react";

interface props {
  fetchingProductsOnMount?: boolean
}

export function useProduct({ fetchingProductsOnMount=false }: props) {
  const {
    products,
    setProducts,
    addProduct,
    updateProduct,
    deleteProduct: deleteProductStore
  } = useProductStore();

  const {
    user
  } = useAuthStore();

  const handleLoadProducts = async () => {
    const products = await getAllProducts();
    products && setProducts(products);
  }

  const handleCreateProduct = async (productFormData: FormData) => {
    const product = await createProduct(productFormData);
    product && addProduct(product);
  }

  const handleEditProduct = async (productId: string, productFormData: FormData) => {
    const product = await editProduct(productId, productFormData);
    product && updateProduct(productId, product);

  }

  const handleDeleteProduct = async (id: string) => {
    const productDeleted = await deleteProduct(id);
    productDeleted && deleteProductStore(id);
  }

  const myProducts = useMemo(
    () => products.filter(product => product.userId === user?.id),
    [products]
  );
  const otherProducts = useMemo(
    () => products.filter(product => product.userId !== user?.id),
    [products]
  );

  const getProductById = (id: string) => products.find(product => product.id === id);


  useEffect(() => {
    products.length === 0 && fetchingProductsOnMount && handleLoadProducts();
  }, [fetchingProductsOnMount])

  return {
    allProducts: products,
    myProducts,
    otherProducts,
    handleLoadProducts,
    handleCreateProduct,
    handleEditProduct,
    handleDeleteProduct,
    getProductById
  }
}