import { Dialog, DialogPanel } from "@headlessui/react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface props {
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
  children: ReactNode
}

export function Modal({ isOpen, handleClose, className="", children }: props) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      as="div" className="relative z-10 focus:outline-none" __demoMode>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40">
        <div className="flex min-h-full items-center justify-center p-4 ">
          <DialogPanel
            transition
            className={twMerge(
              `
              w-full max-w-5xl 
              rounded-xl bg-gray-100 p-4 backdrop-blur-2xl 
              duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0
              `,
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}