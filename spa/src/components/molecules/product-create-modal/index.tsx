import { Dialog, DialogPanel } from '@headlessui/react'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { createProduct } from '@/services/product-service'

export function ProductCreateModal() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(12);

    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
    }

    createProduct(formData)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Novo
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <DialogPanel
              transition
              className="
              flex flex-col gap-4
              w-full max-w-2xl rounded-xl 
              bg-gray-100 p-4 backdrop-blur-2xl 
              duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
