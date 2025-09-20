import type { Interest } from "@/types/interest-types"
import { create } from "zustand"

interface InterestStoreType {
  interests: Interest[]
  setInterests: (interests: Interest[]) => void
  addInterest: (interest: Interest) => void
  deleteInterest: (userId: string, productId: string) => void
}

export const useInterestStore = create<InterestStoreType>((set) => ({
  interests: [],

  setInterests: (interests) => set({ interests }),
  addInterest: (interest) => set((state) => ({ interests: [...state.interests, interest] })),
  deleteInterest: (userId, productId) => set((state) => ({
    interests: state.interests.filter(interest => interest.userId !== userId && interest.productId !== productId)
  })),
}))