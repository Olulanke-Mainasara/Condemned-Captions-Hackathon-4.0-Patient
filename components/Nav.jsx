import React from "react";
import Link from "next/link";
import Image from "next/image";
import useNavigationBar from "./hooks/useNavigationBar";
import useStore from "@/providers/appStore";

function Nav() {
  const [navMenu, openMenu, closeMenu] = useNavigationBar();
  const { dark, toggleDark, upcomingItems } = useStore();

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
              title="Theme"
              onClick={() => {
                toggleDark();
              }}
              className="relative hidden xl:flex items-center justify-center w-6 aspect-square text-base text-[#2A9988] rounded-full"
            >
              {dark ? (
                <Image fill src={"/light.svg"} alt="closeMenu" />
              ) : (
                <Image fill src={"/dark.svg"} alt="closeMenu" />
              )}
            </button>

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
          className={`flex flex-col gap-6 px-6 items-start justify-center text-base absolute bottom-0 h-screen w-full bg-[#F8FFFE] dark:bg-black xl:hidden duration-500 ${navMenu}`}
        >
          <div className="flex items-center justify-between w-full mt-24">
            <button
              title="Close navigation menu"
              onClick={closeMenu}
              className="relative w-6 text-lg text-black dark:text-white aspect-square"
            >
              <Image fill src={"/close.svg"} alt="closeMenu" />
            </button>

            <Link
              href={"/editprofile"}
              className="relative w-5 text-lg text-white rounded-full sm:w-6 aspect-square xl:hidden"
            >
              <Image fill src={"/user.png"} alt="closeMenu" />
            </Link>

            <button
              title="Theme"
              onClick={() => {
                toggleDark();
              }}
              className="relative flex items-center justify-center w-6 text-base text-black rounded-full aspect-square dark:text-white"
            >
              {dark ? (
                <Image fill src={"/light.svg"} alt="closeMenu" />
              ) : (
                <Image fill src={"/dark.svg"} alt="closeMenu" />
              )}
            </button>
          </div>

          <div className="relative h-full pt-10 pb-8 overflow-hidden">
            <div
              className={`w-full h-full ${
                upcomingItems.length == 0
                  ? "flex flex-col items-center justify-center gap-10"
                  : "md:grid md:grid-cols-2 md:gap-4 xl:gap-10"
              } overflow-scroll`}
            >
              {upcomingItems.length > 0 ? (
                upcomingItems.map((data) => {
                  return (
                    <div
                      className="flex h-fit flex-col mx-auto w-[95%] bg-[#FCFCFC] rounded-lg shadow-lg mb-8"
                      key={data.id}
                    >
                      <div className="flex items-center justify-between p-4 border-b">
                        <p className="text-sm xl:text-lg">
                          {data.appointmentDate + " | " + data.appointmentTime}
                        </p>

                        <Link
                          href={"/consultations"}
                          className="px-3 py-1 text-red-500 border border-red-500 rounded-lg"
                        >
                          Cancel app.
                        </Link>
                      </div>
                      <div className="flex items-center justify-between w-full p-4">
                        <div className="flex items-center gap-2">
                          <div className="relative w-20 xl:w-32 aspect-square">
                            <Image
                              fill
                              src={data.doc}
                              priority
                              alt="ProfilePic"
                            />
                          </div>
                          <div>
                            <h1 className="xl:text-2xl">{data.specialist}</h1>
                            <p className="text-sm xl:text-lg">
                              {data.department}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={"/consultations"}
                          className="px-3 py-1 text-white border bg-[#1C665B] rounded-lg"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <p className="dark:text-white md:text-xl">
                    No consultation(s) found
                  </p>
                  <div className="relative w-40 md:w-48 aspect-square">
                    <Image
                      src={"/emptyList.svg"}
                      fill
                      priority
                      alt="placeholderImg"
                    />
                  </div>
                </>
              )}
              <Link
                className="flex items-center gap-2 px-4 py-3 bg-[#2a9988] hover:bg-[#1C665B] text-white rounded-lg shadow-lg absolute bottom-12 right-0"
                href={"/booking"}
              >
                <div className="relative w-5 h-5">
                  <Image src={"/cross.svg"} fill alt="placeholderImg" />
                </div>
                Book an Appointment
              </Link>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-3 bg-[#2a9988] hover:bg-[#1C665B] text-white rounded-lg shadow-lg absolute bottom-12 right-0">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
