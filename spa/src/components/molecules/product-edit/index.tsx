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
  handleDelete: (productId: string) => void;
}

export function ProductEdit({ product, isOpen, handleClose, handleEdit, handleDelete }: props) {
  console.dir(product)

  const handleDeleteProduct = () => {
    handleClose();
    handleDelete(product.id);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("id", product.id)
    formData.append("isAvailable", String(product.isAvailable))
    //formData.append("image", product.image);
    formData.append("userId", product.userId);

    for (const [key, value] of formData) {
      console.dir(`${key}: ${value}\n`);
    }

    handleEdit(product.id, formData);
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
        <div className='basis-full flex flex-col items-start gap-4 xl:pt-4'>
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
              /* name="isAvailable" */
              defaultValue={String(product.isAvailable)}
              defaultChecked={product.isAvailable}
              onCheckedChange={(e) => console.log(e)}
              onChange={(e) => console.log(e)}
              />
            Disponivel
          </Label>
          <div className='w-full flex justify-between items-center pt-2 border-t'>
            <Input name="price" defaultValue={product.price} className="w-auto" />
            <div className="space-x-2">
              <Button type="button" onClick={handleDeleteProduct} variant={"destructive"}>Excluir</Button>
              <Button>Salvar</Button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}
