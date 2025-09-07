import { LogOutIcon, SunDimIcon } from 'lucide-react'
import { Item } from './item'
import { useState } from 'react';
import { useAuthStore } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import defaultImage from "../../../assets/img/user-image-default.png";

export function Dropdown() {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore()

  const imgClassName = open ? "size-10 object-cover rounded-full border-2 border-blue-500" : "size-10 object-cover ";

  if (!isAuthenticated) return (
    <Link to="/auth/signin">
      <Button>Entrar</Button>
    </Link>
  )

  const handleLogout = () => {
    logout()
    localStorage.removeItem('token');
  }

  return (
    <div className="relative md:flex h-auto">
      <div
        className=" overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Toggle dashboard menu</span>

        <img
          src={user?.image || defaultImage}
          alt=""
          className={imgClassName}
        />
      </div>

      {open && <div
        className="absolute end-0 z-10 mt-0.5 md:mt-15 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
        role="menu"
      >
        <div className="p-2">
          <Item label="My account" url={`/profile/${user?.email}`} />

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
            role="menuitem"
          >
            <SunDimIcon size={18} /> 
            Claro
          </button>

          <button
            onClick={handleLogout}
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
