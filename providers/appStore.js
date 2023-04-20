import { create } from "zustand";

const useStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),

  upcomingItems: [],
  addUpcoming: (item) =>
    set((state) => ({ upcomingItems: [...state.upcomingItems, item] })),
  deleteUpcoming: (item) =>
    set((state) => ({
      upcomingItems: state.upcomingItems.filter((i) => i !== item),
    })),

  dark: true,
  toggleDark: () => set((state) => ({ dark: !state.dark })),

  name: "welcome",
  setName: (value) => set(() => ({ name: value })),
}));

export default useStore;
