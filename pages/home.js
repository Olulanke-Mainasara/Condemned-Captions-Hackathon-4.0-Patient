import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Card, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import specialistsDummy from "/data/specialistsDummyData.json";
import doctorsDummyData from "/data/doctorsDummyData.json";

const Home = () => {
  const [value, setValue] = useState();

  const onSearch = () => {
    console.log(value);
  };

  const dummyData = specialistsDummy.specialists;
  const doctorsArray = doctorsDummyData.doctors;

  const prefix = (
    <SearchOutlined
      onClick={onSearch}
      style={{
        fontSize: 16,
        cursor: "pointer",
        marginRight: "5px",
      }}
    />
  );

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <div className="w-full px-3 md:px-8 lg:px-12">
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <h1 className="text-xl font-semibold sm:text-3xl ">Hi, Anna.</h1>
          </div>
          <div className="flex flex-row gap-3 lg:gap-5">
            <Image
              src="/WalletIcon.svg"
              alt="notification"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/Notification.svg"
              alt="wallet"
              height={15}
              width={15}
              className="cursor-pointer"
            />
            <Image
              src="/user.png"
              alt="user"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>
        </div>
        <br />
        <div className="flex flex-row items-center justify-center w-full">
          <Input
            enterButton="Search"
            size="small"
            onChange={(e) => setValue(e.currentTarget.value)}
            prefix={prefix}
            placeholder="Search for Doctors"
            className="w-full p-0 px-4 text-xl font-semibold rounded-lg lg:w-1/2 md:w-1/2 sm:p-4 sm:px-0"
          />
        </div>
        <div className="w-full block md:hidden lg:hidden relative h-[60vw]">
          <Image
            width={150}
            height={250}
            className="absolute bottom-0 right-0 z-10"
            src="/doctor.png"
            alt="doctor"
          />
          <div className="text-white w-full bg-[#2A9988] rounded-xl absolute bottom-0">
            <div className="flex flex-col items-start justify-start w-2/3 px-4 py-4">
              <h1 className="text-lg font-light">
                Learn How to Stay Healthy From these Tips!
              </h1>
              <p className="text-xs font-light">
                Eat fruits, Drink water, Excercise regularly, avoid smoking...
              </p>
              <br />
              <button className="px-2 py-1 rounded-md font-light text-sm bg-[#3EE5CC]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden w-full relative h-[50vh]">
          <Image
            width={150}
            height={250}
            className="absolute bottom-0 right-0 z-10"
            src="/doctor.png"
            alt="doctor"
          />
          <div className="text-white w-full bg-[#2A9988] rounded-xl absolute bottom-0">
            <div className="flex flex-col items-start justify-start w-2/3 px-4 py-5">
              <h1 className="text-lg font-semibold">
                Learn how to stay Healthy from these tips!
              </h1>
              <p className="text-xs font-light">
                Eat fruits, Drink water, Excercise regularly, avoid smoking...
              </p>
              <br />
              <button className="px-2 py-1 rounded-md font-light text-sm bg-[#3EE5CC]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden lg:block w-full relative h-[70vh]">
          <Image
            width={400}
            height={250}
            className="absolute bottom-0 z-20 right-52"
            src="/doctorLg.png"
            alt="doctor"
          />
          <Image
            width={320}
            height={250}
            className="absolute bottom-0 right-0 z-10"
            src="/doctorWomanLg.png"
            alt="doctor"
          />
          <div className="text-white w-full bg-[#2A9988] rounded-xl absolute bottom-0">
            <div className="flex flex-col items-start justify-start w-1/2 gap-5 py-8 pl-10">
              <h1 className="text-5xl font-semibold">
                Learn how to stay Healthy from these tips!
              </h1>
              <ul className="text-2xl ">
                <li>• Eat plenty of fruits daily</li>
                <li>• Drink enough water daily</li>
                <li>• Excercise regularly everyday</li>
                <li>• Avoid smoking...</li>
              </ul>
              <button className="px-8 py-2 rounded-xl text-2xl bg-[#3EE5CC]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="flex flex-col w-full gap-3 mt-0 lg:gap-10 lg:mt-10">
          <h1 className="font-bold lg:text-4xl text-[#2A9988] text-center">
            Find your Doctor
          </h1>
          <div className="grid h-full grid-cols-4 gap-2 overflow-scroll md:grid-cols-4 lg:grid-cols-6 md:gap-6 lg:gap-8 xl:gap-10">
            {dummyData.slice(0, 7).map((data) => {
              return (
                <Link href={data.link} key={data.id}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 max-w-full lg:w-36 lg:h-32">
                      <Image fill src={data.imgSrc} alt="docPic" />
                    </div>
                    <p className="text-xs lg:text-lg">{data.type}</p>
                  </div>
                </Link>
              );
            })}
            {
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center max-w-full text-2xl font-bold rounded-full shadow-lg w-14 h-14 lg:w-36 lg:h-32">
                  +
                </div>
                <br />
                <p className="text-xs lg:text-lg">More</p>
              </div>
            }
          </div>
        </div>
      </div>
      <br />
      <div className="w-full flex flex-col items-start justify-center bg-[#1C665B] text-white px-4 overflow-auto">
        <div className="flex flex-row items-center justify-between w-full py-5 overflow-hidden">
          <h1 className="font-semibold lg:text-4xl">Our Doctors</h1>
          <a className="text-xs font-light cursor-pointer lg:text-xl">
            view more
          </a>
        </div>
        <div className="w-full overflow-auto">
          <div className="flex gap-5 pb-8 overflow-x-auto w-fit">
            {doctorsArray.slice(0, 3).map((data) => {
              return (
                <div key={data.id} className="flex flex-row items-center justify-start py-3 bg-white w-72 rounded-xl">
                  <div className="flex flex-col items-center justify-center w-2/5 p-2">
                    <Image width={80} height={80} alt="docPic" src={data.profilePic} />
                  </div>
                  <div className="flex flex-col items-start justify-center w-3/5 text-black">
                    <h1>Dr. Sayall Olawale</h1>
                    <p>Cardiologist</p>
                    <Rate disabled allowClear allowHalf defaultValue={3.5} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;