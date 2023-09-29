import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  displayName: string | null;
};

type Action = {
  setDisplayName: (displayName: string | null) => void;
};

export const useMeStore = create<State & Action>()(
  persist(
    (set) => ({
      displayName: "",
      setDisplayName: (displayName) => set({ displayName: displayName }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
