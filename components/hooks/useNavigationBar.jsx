/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("-right-full");

  

  function openMenu() {
    setMenu("right-0");
  }

  function closeMenu() {
    setMenu("-right-full");
  }

  

  return [navMenu, openMenu, closeMenu];
}

export default useNavigationBar;
