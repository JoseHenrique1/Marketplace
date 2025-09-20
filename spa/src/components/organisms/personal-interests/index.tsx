import { useInterest } from "@/hooks/useInterest";
import { useEffect } from "react";

export function PersonalInterests() {
  const {
    myInterests,
    otherInterests,
    handleLoadInterests
  } = useInterest();

  useEffect(() => {
    handleLoadInterests();
  }, [])
  return (
    <div className="flex flex-col gap-4">
      {myInterests.map((interest) => (
        <div key={interest.userId + interest.productId} className="flex gap-4 bg-gray-200 shadow rounded-md p-4 pointer">
          <p>{interest.user.name}</p>
          <p>{interest.product.name}</p>
          <p>{interest.status}</p>
        </div>
      ))}

      <hr />

      {otherInterests.map((interest) => (
        <div key={interest.userId + interest.productId} className="flex gap-4 bg-gray-200 shadow rounded-md p-4 pointer">
          <p>{interest.user.name}</p>
          <p>{interest.product.name}</p>
          <p>{interest.status}</p>
        </div>
      ))}

    </div>
  )
}
