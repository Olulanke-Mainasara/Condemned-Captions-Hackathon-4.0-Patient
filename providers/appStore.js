// Import the create function from the "zustand" library
import { create } from "zustand";

// Create a new store using the create function
const useStore = create((set) => ({
  // Declare a boolean state variable called "dark" with an initial value of true
  dark: true,

  // Declare a function called "toggleDark" that toggles the "dark" state variable
  toggleDark: () => set((state) => ({ dark: !state.dark })),

  // Declare a string state variable called "name" with an initial value of ", welcome"
  name: ", welcome",
}));

// Export the useStore function so it can be used in other parts of the code
export default useStore;
