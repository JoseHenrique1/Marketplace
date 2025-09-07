import { useNavigate } from "react-router";
import { Rating } from "../rating";

interface props {
  id: string,
  name: string,
  price: number,
  image: string
}
export function CardProduct({ id, name, price, image }: props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`?productId=${id}`);
  }

  return (
    <div className="container rounded-md md:max-w-xs duration-300  hover:shadow bg-gray-50">
      <img
        className="w-full h-64 cursor-pointer rounded-t-md object-center object-cover hover:opacity-80"
        onClick={handleClick}
        src={image} 
        alt={name} />
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
