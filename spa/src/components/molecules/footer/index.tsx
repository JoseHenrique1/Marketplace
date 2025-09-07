import { Logo } from "@/components/atoms/logo";

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center gap-2 text-teal-600 sm:justify-start">
            <Logo />
            <p className="text-3xl font-bold">Marketplace</p>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
