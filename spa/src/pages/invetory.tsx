import { CardProduct } from "@/components/molecules/card-product";
import { ProductCreateModal } from "@/components/molecules/product-create-modal";
import { ProductDetails } from "@/components/molecules/product-details";
import LayoutDefault from "@/components/organisms/layout-default";
import { Input } from "@/components/ui/input";
import { useProduct } from "@/hooks/useProduct";

export function Inventory() {
  const { myProducts } = useProduct();



  return (
    <LayoutDefault>
      <div className="flex justify-between py-4 lg:pb-8">
        <Input type="text" className="w-full md:max-w-md" placeholder="Busque um produto" />
        <ProductCreateModal />
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {myProducts.map((item) => (
            <CardProduct {...item} key={item.id} />
          ))}
        </div>
      </div>
      <ProductDetails />
    </LayoutDefault>

  )
}
