import type { Product } from "@/types/product-type"
import { Modal } from "../modal";
import { Rating } from "../rating";
import { Button } from "@/components/ui/button";

interface props {
  product: Product;
  isOpen: boolean;
  handleClose: () => void
}
export function ProductView({ product, isOpen, handleClose }: props) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} className="flex flex-col gap-4 md:flex-row">
      <img
        className="shrink-0 rounded-md w-full max-h-96 object-cover object-center md:max-w-sm lg:max-w-md lg:max-h-[500px]"
        src={
          product.image || "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
        }
        alt="Notebook" />
      <div className='basis-full grid grid-rows-[auto_auto_1fr_auto] gap-4 xl:pt-4'>
        <h1 className='font-semibold text-2xl'>{product.name}</h1>
        <Rating />
        <p className="text-sm">
          {product.description}
        </p>
        <div className='w-full flex justify-between items-center pt-2 border-t'>
          <p>RS {product.price}</p>
          <Button>Tenho interesse</Button>
        </div>
      </div>
    </Modal>
  )
}
