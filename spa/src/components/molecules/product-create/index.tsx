import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '../modal'
import { useProduct } from '@/hooks/useProduct'

export function ProductCreateModal() {
  let [isOpen, setIsOpen] = useState(false);
  const { handleCreateProduct } = useProduct({});

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    //for (const [key, value] of formData) {console.log(`${key}: ${value}\n`);}
    handleCreateProduct(formData);
    close();
  }

  return (
    <>
      <Button onClick={open}>
        Novo
      </Button>

      <Modal isOpen={isOpen} handleClose={close} className='max-w-2xl'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <Input
            placeholder="Nome do produto"
            name='name' />
          <Textarea
            placeholder="Descrição do produto"
            name='description'
            className='h-40 resize-none' />
          <Input
            type='number'
            placeholder="Preço"
            name='price' />
          <Label htmlFor='isAvailable'>
            <Checkbox
              id='isAvailable'
              value={"true"}
              defaultChecked
              name='isAvailable' />
            Disponivel?
          </Label>
          <Input
            type='file'
            name='image' />
          <Button>Salvar</Button>
        </form>
      </Modal>
    </>
  )
}
