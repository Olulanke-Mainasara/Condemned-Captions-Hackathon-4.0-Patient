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

  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),

  splash: true,
  toggleSplash: () => set((state) => ({ splash: !state.splash })),

  visited: 0,
  increaseVisited: () => set((state) => ({ visited: state.visited + 1 })),
}));

export default useStore;
