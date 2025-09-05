import { StarIcon } from "lucide-react";

export function Rating() {
  return (
    <div className="flex items-center">
      <StarIcon size={18} />
      <StarIcon size={18} />
      <StarIcon size={18} />
      <StarIcon size={18} />
      <StarIcon size={18} />
      <p className="ml-2 text-sm">50 Avaliações</p>
    </div>
  )
}
