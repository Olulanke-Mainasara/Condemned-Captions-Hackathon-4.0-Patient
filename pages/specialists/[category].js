import Head from "next/head";
import Image from "next/image";
import React from "react";
import Nav from "@/components/Nav";
import doctorsDummyData from "/data/doctorsDummyData.json";
import specialistsDummy from "/data/specialistsDummyData.json";
import { useRouter } from "next/router";

const specialistsArray = specialistsDummy.specialists;

export default function Category({ specialist }) {
  const doctorsArray = doctorsDummyData.doctors;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{specialist.type} | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center w-screen">
        <div className="flex flex-col w-[95%] max-w-[900px] h-screen pt-5 pb-14 xl:pt-24 overflow-hidden">
          <Nav />

          <div>
            <button
              className="px-1 dark:text-white"
              onClick={() => router.back()}
            >
              &larr; Back
            </button>
          </div>

          <h1 className="text-4xl text-center md:text-6xl text-[#2A9988]">
            {specialist.type + "s"}
          </h1>

          <div className="h-full mt-5 overflow-hidden md:mt-10">
            <div
              className={`w-full h-full overflow-scroll grid grid-cols-1 md:grid-cols-2 gap-10 pb-12`}
            >
              {doctorsArray.map((data) => {
                return (
                  <div
                    className="flex flex-col w-full h-fit bg-[#FCFCFC] rounded-lg shadow-lg"
                    key={data.id}
                  >
                    <div className="flex items-center justify-between w-full p-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-28 aspect-square">
                          <Image
                            fill
                            src={data.profilePic}
                            priority
                            alt="ProfilePic"
                          />
                        </div>
                        <div>
                          <h1 className="text-2xl">{data.name}</h1>
                          <p className="text-lg">{data.degrees}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = specialistsArray.map((specialist) => ({
    params: { category: specialist.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const specialist = specialistsArray.find((spec) => spec.id.toString() === category);

  return {
    props: {
      specialist,
    },
  };
}
