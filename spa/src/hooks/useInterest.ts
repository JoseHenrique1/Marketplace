import { createProductInterest, getInterests, getInterestsPerProduct, getInterestsPerUser, patchInterest } from "@/services/interest-service";
import { useAuthStore } from "@/stores/auth-store";
import { useInterestStore } from "@/stores/interest-store";
import { InterestStatus } from "@/types/interest-types";
export function useInterest() {
  const { interests, setInterests, addInterest, deleteInterest } = useInterestStore();
  const { user } = useAuthStore();

  const handleLoadInterests = async () => {
    const interests = await getInterests();
    interests && setInterests(interests);
  }
  /* 
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
    } */

  const handleCreateInterest = async (productId: string) => {
    if (user) {
      const interest = await createProductInterest(productId, user.id);
      interest && addInterest(interest);
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

  const isInterestedInProduct = (productId: string) => {
    if (user) {
      return interests.some(interest =>
        interest.productId === productId
        &&
        interest.userId === user.id
      );
    }

    return false;
  }

  const myInterests = interests.filter(interest => interest.userId === user!.id);


  const otherInterests = interests.filter(interest => interest.userId !== user!.id);

  return {
    interests,
    myInterests,
    otherInterests,
    isInterestedInProduct,
    handleLoadInterests,
    handleCreateInterest,
    handleAcceptInterest,
    handleRejectInterest
  };
}
