import React from "react";
import Link from "next/link";
import Image from "next/image";
import useNavigationBar from "./hooks/useNavigationBar";

function Nav() {
  const [navMenu, openMenu, closeMenu] = useNavigationBar();

  const links = [
    {
      id: 1,
      link: "/home",
      imgSrc: "/home.svg",
      label: "Home",
    },
    {
      id: 2,
      link: "/consultations",
      imgSrc: "/cross.svg",
      label: "Consultations",
    },
    {
      id: 3,
      link: "/specialists",
      imgSrc: "/specialists.svg",
      label: "Specialists",
    },
    {
      id: 4,
      link: "/hospitals",
      imgSrc: "/hospitals.svg",
      label: "Hospitals",
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 xl:top-0 left-0 z-30 h-16 w-screen bg-[#2A9988]`}
    >
      <div className="flex items-center justify-around h-full xl:px-10">
        <Link href="/" className={`xl:flex items-center hidden `}>
          <h1 className="text-2xl font-thin text-white">
            NEXT<span className="font-normal">GEN</span>
          </h1>
        </Link>

        <ul className="flex w-full h-full text-base">
          <div className="flex items-center justify-around w-full h-full py-0 text-white xl:justify-end xl:gap-14">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className="xl:duration-300 hover:opacity-50"
                >
                  <div className="relative w-5 sm:w-6 aspect-square xl:hidden">
                    <Image fill src={link.imgSrc} alt="closeMenu" />
                  </div>

                  <div className="hidden xl:block">
                    <p>{link.label}</p>
                  </div>
                </Link>
              </li>
            ))}

            <button
              title="Open navigation menu"
              onClick={openMenu}
              className="relative w-5 text-lg text-white sm:w-6 aspect-square xl:hidden"
            >
              <Image fill src={"/open.svg"} alt="closeMenu" />
            </button>
          </div>
        </ul>

        <div
          className={`flex items-start justify-center text-base absolute bottom-0 h-screen w-full bg-white xl:hidden duration-500 ${navMenu}`}
        >
          <button
            title="Close navigation menu"
            onClick={closeMenu}
            className="relative w-6 mt-24 text-lg text-black aspect-square xl:hidden"
          >
            <Image fill src={"/close.svg"} alt="closeMenu" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
