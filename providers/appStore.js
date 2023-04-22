import { create } from "zustand";

const useStore = create((set) => ({
  dark: true,
  toggleDark: () => set((state) => ({ dark: !state.dark })),

  name: ", welcome",
}));

export default useStore;
