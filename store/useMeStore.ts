import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  displayName?: string | null;
  email?: string | null;
};

type Action = {
  setUserDetails: (data: {displayName: any, email: any}) => void;
};

export const useMeStore = create<State & Action>()(
  persist(
    (set) => ({
      displayName: "",
      email: "",
      setUserDetails: (data) => set({displayName: data.displayName, email: data.email}),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
