/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useStore from "@/providers/appStore";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("-right-full");
  const { dark } = useStore();

  function openMenu() {
    setMenu("right-0");
  }

  function closeMenu() {
    setMenu("-right-full");
  }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  return [navMenu, openMenu, closeMenu];
}

export default useNavigationBar;
