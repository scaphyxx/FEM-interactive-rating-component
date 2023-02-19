import { create } from "zustand";

export const useRating = create<{ rating: number }>(() => ({
  rating: 0,
}));
