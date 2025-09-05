import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import { Rating } from '../rating'
import { Button } from '@/components/ui/button'

export function ProductDetails() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button>

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
                src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" alt="Notebook" />
              <div className='shrink grid grid-rows-[auto_auto_1fr_auto] gap-4 xl:pt-4'>
                <h1 className='font-semibold text-2xl'>Notebook</h1>
                <Rating />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Enim veritatis facilis illo. Iure, fuga reiciendis? 
                  Voluptatem exercitationem soluta sunt impedit saepe. 
                  Itaque animi laboriosam, exercitationem asperiores 
                  omnis praesentium dicta vero!
                </p>
                <div className='flex justify-between items-center pt-2 border-t'>
                  <p>RS 900,90</p>
                  <Button>Tenho interesse</Button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
