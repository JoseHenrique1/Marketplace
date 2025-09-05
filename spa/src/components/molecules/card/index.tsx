import { StarIcon } from "lucide-react";

export function Card() {
  return (
    <div className="cursor-pointer container rounded-md md:max-w-xs duration-300  hover:shadow bg-gray-50">
      <img
        className="rounded-t-md"
        src="https://images.pexels.com/photos/18105/pexels-photo.jpg" alt="Notebook" />
      <div className="p-3 space-y-3">
        <h1 className="font-semibold text-xl">
          Notebook
        </h1>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <StarIcon size={18} />
              <StarIcon size={18} />
              <StarIcon size={18} />
              <StarIcon size={18} />
              <StarIcon size={18} />
              <p className="ml-2 text-sm">50 Avaliações</p>
            </div>
            <p className="font-medium text-lg text-right">RS 900,90</p>
          </div>
        </div>
      </div>
    </div>
  )
}
