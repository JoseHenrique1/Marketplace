import { Card } from "@/components/molecules/card";
import { ProductDetails } from "@/components/molecules/product-details";
import LayoutDefault from "@/components/organisms/layout-default";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Discover() {
  const array = [1, 2]
  const [show, setShow] = useState(false);

  return (
    <LayoutDefault>
      <div className="pb-4 lg:pb-8">
        <Input type="text" className="w-full md:max-w-md" placeholder="Busque um produto"/>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {array.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
      <ProductDetails />
    </LayoutDefault>

  )
}
