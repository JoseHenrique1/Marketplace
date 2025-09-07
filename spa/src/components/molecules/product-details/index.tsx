import { Dialog, DialogPanel } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { Rating } from '../rating'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'react-router'
import { useProduct } from '@/hooks/useProduct'

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

  const productSelected =  getProductById(productId);
  console.log(productSelected);

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40">
        <div className="flex min-h-full items-center justify-center p-4 ">
          <DialogPanel
            transition
            className="
              flex flex-col gap-4 md:flex-row
              w-full max-w-5xl rounded-xl 
              bg-gray-100 p-4 backdrop-blur-2xl 
              duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
