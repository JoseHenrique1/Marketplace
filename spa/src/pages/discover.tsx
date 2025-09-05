import { Card } from "@/components/molecules/card";
import { ProductDetails } from "@/components/molecules/product-details";
import LayoutDefault from "@/components/organisms/layout-default";
import { useState } from "react";

export function Discover() {
  const array = [1, 2]
  const [show, setShow] = useState(false);

  return (
    <LayoutDefault>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {array.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
      <ProductDetails />
    </LayoutDefault>

  )
}
