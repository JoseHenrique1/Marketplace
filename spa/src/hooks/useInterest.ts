import { createProductInterest, getInterests, getInterestsPerProduct, getInterestsPerUser, patchInterest } from "@/services/interest-service";
import { useAuthStore } from "@/stores/auth-store";
import { InterestStatus, type Interest } from "@/types/interest-types";
import { useState } from "react";

export function useInterest() {
  const [interests, setInterests] = useState<Interest[]>([]);
  const { user } = useAuthStore();

  const handleLoadInterests = async () => {
    const interests = await getInterests();
    interests && setInterests(interests);
  }

  const handleLoadInterestsPerUser = async () => {
    if (user) {
      const currentInterests = await getInterestsPerUser(user.id);
      currentInterests && setInterests(currentInterests);
    }
  }

  const handleLoadInterestsPerProduct = async (productId: string) => {
    if (user) {
      const currentInterests = await getInterestsPerProduct(productId);
      currentInterests && setInterests(currentInterests);
    }
  }

  const handleCreateInterest = async (productId: string) => {
    if (user) {
      const interest = await createProductInterest(productId, user.id);
      interest && setInterests([...interests, interest]);
    }
  }

  const handleAcceptInterest = async (productId: string) => {
    if (user) {
      const interest = await patchInterest(user.id, productId, InterestStatus.ACCEPTED);
      interest && setInterests([...interests, interest]);
    }
  }

  const handleRejectInterest = async (productId: string) => {
    if (user) {
      const interest = await patchInterest(user.id, productId, InterestStatus.REJECTED);
      interest && setInterests([...interests, interest]);
    }
  }

  return { 
    interests,
    handleLoadInterestsPerUser,
    handleLoadInterestsPerProduct,
    handleCreateInterest,
    handleAcceptInterest,
    handleRejectInterest
   };
}
