import { LogOutIcon } from 'lucide-react'
import { Item } from './item'
import { useState } from 'react';

export function Dropdown() {
  const [open, setOpen] = useState(false);

  const imgClassName =open ? "size-10 object-cover rounded-full border-2 border-blue-500" : "size-10 object-cover ";
  return (
    <div className="relative md:flex h-auto">
      <div
        className=" overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Toggle dashboard menu</span>

        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={imgClassName}
        />
      </div>

      {open && <div
        className="absolute end-0 z-10 mt-0.5 md:mt-15 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
        role="menu"
      >
        <div className="p-2">
          <Item label="My account" url="/profile" />
          <Item label="Settings" url="/settings" />

          <button
            type="submit"
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
            role="menuitem"
          >
            <LogOutIcon size={18} />
            Logout
          </button>

        </div>
      </div>}

    </div>
  )
}
