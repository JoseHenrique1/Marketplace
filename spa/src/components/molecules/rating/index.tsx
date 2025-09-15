import { StarIcon } from "lucide-react";

export function Rating() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <StarIcon size={18} />
        <StarIcon size={18} />
        <StarIcon size={18} />
        <StarIcon size={18} />
        <StarIcon size={18} />
      </div>
      <p className="text-sm">50 Avaliações</p>
    </div>
  )
}
