import { useSearchParams } from "react-router";

export function useProductDetails() {
  const [searchParams, setSearchParams] = useSearchParams();

  const productId = searchParams.get('productId');
  const isOpen = productId ? true : false;

  function handleClose() {
    setSearchParams({});
  }

  return {
    productId,
    isOpen,
    handleClose
  }
}