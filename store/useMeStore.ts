import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  displayName?: string | null;
  email?: string | null;
  isLogin?: boolean | null;
  isRegister?: boolean | null;
};

type Action = {
  setUserDetails?: (data: {displayName: any, email: any}) => void;
  isUserLogin: (data: {isLogin: boolean}) => void;
  isUserRegister: (data: {isRegister: boolean}) => void;
};

export const useMeStore = create<State & Action>()(
  persist(
    (set) => ({
      displayName: "",
      email: "",
      isLogin: false,
      isRegister: false,
      isUserLogin: (data) => set({isLogin: data.isLogin}),
      isUserRegister: (data) => set({isRegister: data.isRegister})
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
