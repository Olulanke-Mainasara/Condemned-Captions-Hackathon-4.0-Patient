import React from "react";
import categoriesDummy from "/data/categoriesDummyData.json";
import Image from "next/image";
import Link from "next/link";

function Categories() {
  const dummyData = categoriesDummy.categories;

  return (
    <div className="w-screen bg-[#F8FFFE] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-screen gap-8 py-6 overflow-hidden xl:w-1/2">
        <div className="w-full px-4 md:px-0">
          <h1 className="text-4xl text-center md:text-6xl text-[#1C665B]">
            Our Specialists
          </h1>
          <form className="w-full h-10 md:h-12 mt-6 rounded-lg md:rounded-xl border border-[#83E5D7] overflow-hidden">
            <input
              type="text"
              className="w-full h-full pl-4 placeholder-black bg-transparent"
              placeholder="Search for specialists"
            ></input>
          </form>
        </div>

        <div className="w-full overflow-hidden">
          <div className="grid h-full grid-cols-3 gap-3 overflow-scroll md:grid-cols-4 md:gap-6 lg:gap-8 xl:gap-10">
            {dummyData.map((data) => {
              return (
                <Link href={"#"} key={data.id}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-24 h-20 max-w-full lg:w-36 lg:h-32">
                      <Image fill src={data.imgSrc} alt="docPic" />
                    </div>
                    <p className="text-sm lg:text-lg">{data.type}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
