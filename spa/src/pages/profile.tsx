import LayoutDefault from "@/components/organisms/layout-default";
import { getUser } from "@/services/user-service";
import type { User } from "@/types/user-type";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import defaultImage from "../assets/img/user-image-default.png";
import { EditIcon } from "lucide-react";

export function Profile() {
  let { email: emailParams } = useParams();
  console.log(emailParams);

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    if (emailParams) {
      getUser(emailParams).then(
        (data) => setUser(data)
      )
    }
  }, [])
  return (
    <LayoutDefault>
      <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto md:flex-row md:justify-between md:items-stretch md:gap-8">
        <div>
          <img
            className="rounded-full aspect-square object-cover object-center max-h-96 border"
            src={user?.image || defaultImage}
            alt="User" />
          <p className="text-4xl font-semibold text-center mt-4">{user?.name}</p>
        </div>

        <div className="shrink w-full md:w-auto md:py-4 space-y-4">
          <EditIcon />
          <div>
            <h1 className="text-2xl font-semibold">Localidade</h1>
            <p>Estado: {user?.state}</p>
            <p>Cidade: {user?.city}</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Contato</h1>
            <p>Email: {user?.email}</p>
            <p>Telefone: {user?.whatsapp}</p>
          </div>
        </div>
      </div>
    </LayoutDefault>
  )
}
