import { useState } from "react";
import { Logo } from "@/components/atoms/logo";
import { Navbar } from "@/components/molecules/navbar";
import { Dropdown } from "@/components/molecules/dropdown";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

export function Header() {
  const [show, setShow] = useState(false);
  
  const handleShow = () => setShow(!show);
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="p-2 gap-2 flex flex-wrap justify-between  min-h-16 md:gap-6 md:items-center md:flex-row md:justify-between">

          <div className="order-1 self-center md:flex-1">
            <Link className=" text-teal-600 dark:text-teal-300" to="/">
            <span className="sr-only">Home</span>
            <Logo />
          </Link>
          </div>

          <Navbar show={show} />

          <div className="order-2 flex items-center gap-2">
            <Dropdown />
            <div className="block md:hidden" onClick={handleShow}>
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <MenuIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
