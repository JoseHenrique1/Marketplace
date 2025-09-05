import { Rating } from "../rating";

export function Card() {
  return (
    <div className="cursor-pointer container rounded-md md:max-w-xs duration-300  hover:shadow bg-gray-50">
      <img
        className="rounded-t-md max-h-96 object-center object-cover w-full"
        src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg" alt="Notebook" />
      <div className="p-3 space-y-3">
        <h1 className="font-semibold text-xl">
          Notebook
        </h1>
        <div>
          <div className="flex justify-between items-center">
            <Rating />
            <p className="font-medium text-lg text-right">RS 900,90</p>
          </div>
        </div>
      </div>
    </div>
  )
}
