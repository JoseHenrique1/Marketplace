import { useEffect, useState } from 'react'
import { Rating } from '../rating'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'react-router'
import { useProduct } from '@/hooks/useProduct'
import { Modal } from '../modal'

export function ProductDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProductById } = useProduct();
  const [productId, setProductId] = useState(searchParams.get('productId') || '');

  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      setProductId(productId);
      open();
    }
    else {
      close();
    }
  }, [searchParams])


  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setSearchParams({});
    setIsOpen(false)
  }

  const productSelected = getProductById(productId);
  console.log(productSelected);

  return (
    <Modal isOpen={isOpen} handleClose={close} className="flex flex-col gap-4 md:flex-row">
      <img
        className="shrink-0 rounded-md w-full max-h-96 object-cover object-center md:max-w-sm lg:max-w-md lg:max-h-[500px]"
        src={
          productSelected?.image || "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
        }
        alt="Notebook" />
      <div className='basis-full grid grid-rows-[auto_auto_1fr_auto] gap-4 xl:pt-4'>
        <h1 className='font-semibold text-2xl'>{productSelected?.name}</h1>
        <Rating />
        <p className="text-sm">
          {productSelected?.description}
        </p>
        <div className='w-full flex justify-between items-center pt-2 border-t'>
          <p>RS {productSelected?.price}</p>
          <Button>Tenho interesse</Button>
        </div>
      </div>
    </Modal>
  )
}