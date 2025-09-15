import { Modal } from '../../molecules/modal'
import { useProductDetails } from '@/hooks/useProductDetails'
import { useProduct } from '@/hooks/useProduct'
import { useAuthStore } from '@/stores/auth-store'
import { ProductView } from '@/components/molecules/product-view'
import { ProductEdit } from '@/components/molecules/product-edit'

interface props {
  productsAreMine?: boolean
}

export function ProductDetails({ productsAreMine = false }: props) {
  const { isAuthenticated, user } = useAuthStore();
  const { productId, isOpen, handleClose } = useProductDetails();
  const { allProducts, handleEditProduct, handleDeleteProduct } = useProduct({});

  const product = allProducts.find(p => p.id === productId)
  const isOwner = isAuthenticated && user?.id === product?.userId

  if (!product || isOwner === !productsAreMine || !isOwner === productsAreMine) {
    return (
      <Modal isOpen={isOpen} handleClose={handleClose} className='max-w-xl'>
        <h1>Produto não encontrado</h1>
      </Modal>
    );
  }

  if (isOwner) {
    return (
      <ProductEdit
        product={product}
        isOpen={isOpen}
        handleClose={handleClose}
        handleEdit={handleEditProduct}
        handleDelete={handleDeleteProduct} />
    )
  }

  return (
    <ProductView product={product} isOpen={isOpen} handleClose={handleClose} />
  )
}