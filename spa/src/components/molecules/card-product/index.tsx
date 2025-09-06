import { Rating } from "../rating";

interface props {
  name: string,
  price: number,
  image: string
}
export function CardProduct({ name, price, image }: props) {
  return (
    <div className="cursor-pointer container rounded-md md:max-w-xs duration-300  hover:shadow bg-gray-50">
      <img
        className="rounded-t-md max-h-96 object-center object-cover w-full"
        src={image} alt={name} />
      <div className="p-3 space-y-3">
        <h1 className="font-semibold text-xl">
          {name}
        </h1>
        <div>
          <div className="flex justify-between items-center">
            <Rating />
            <p className="font-medium text-lg text-right">RS {price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
