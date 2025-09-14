import type { Product } from "@/types/product-type";
import { Modal } from "../modal";
import { Rating } from "../rating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface props {
  product: Product;
  isOpen: boolean;
  handleClose: () => void;
  handleEdit: (productId: string, productFormData: FormData) => void;
}

export function ProductEdit({ product, isOpen, handleClose, handleEdit }: props) {
  console.dir(product)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData) {
      console.dir(`${key}: ${value}\n`);
    }

    //handleClose();
  }
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <form className="flex flex-col gap-4 md:flex-row" onSubmit={handleSubmit}>
        <img
          className="shrink-0 rounded-md w-full max-h-96 object-cover object-center md:max-w-sm lg:max-w-md lg:max-h-[500px]"
          src={
            product.image || "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
          }
          alt="Notebook" />
        <div className='basis-full flex flex-col justify-between gap-4 xl:pt-4'>
          <Input name="name" defaultValue={product.name} />
          <Rating />
          <Textarea name="description" defaultValue={product.description} className="grow text-sm resize-none" />

          <Label
            defaultChecked={product.isAvailable}
            htmlFor="isAvailable"
            className="flex items-center gap-2"
          >
            <Checkbox
              id="isAvailable"
              name="isAvailable"
              defaultValue={String(product.isAvailable)}
              defaultChecked={product.isAvailable}
              onCheckedChange={(e) => console.log(e)}
              onChange={(e) => console.log(e)}
              />
            Disponivel
          </Label>
          <div className='w-full flex justify-between items-center pt-2 border-t'>
            <Input name="price" defaultValue={product.price} className="w-auto" />
            <Button>Salvar</Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
