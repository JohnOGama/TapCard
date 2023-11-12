import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  displayName?: string | null;
  email?: string | null;
  isLogin?: boolean | null;
};

type Action = {
  setUserDetails: (data: {displayName: any, email: any}) => void;
  isUserLogin: (data: {isLogin: boolean}) => void;
};

export const useMeStore = create<State & Action>()(
  persist(
    (set) => ({
      displayName: "",
      email: "",
      isLogin: false,
      setUserDetails: (data) => set({displayName: data.displayName, email: data.email}),
      isUserLogin: (data) => set({isLogin: data.isLogin}),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
