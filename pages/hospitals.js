import React, { useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Head from "next/head";
import Button from "@/components/UI/Button";
import AllHospitals from "@/components/Hospitals/allHospitals";
import NearbyHospitals from "@/components/Hospitals/nearbyHospitals";

export default function Hospitals({ allHospitals }) {
  const [all, setAll] = useState(true);
  const [nearby, setNearby] = useState(false);
  const [arrayUsed, setArrayUsed] = useState([]);

  const allNgHospitals = useMemo(
    () => <AllHospitals allHospitals={allHospitals} />,
    [allHospitals]
  );

  const nearbyNgHospitals = useMemo(() => <NearbyHospitals />, []);

  return (
    <>
      <Head>
        <title>Hospitals | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-screen bg-[#F8FFFE]">
        <div className="flex mx-auto flex-col w-[95%] max-w-[900px] h-screen pt-5 pb-14 xl:pt-24 overflow-hidden">
          <Nav />

          <h1 className="text-4xl text-center md:text-6xl text-[#1C665B]">
            Hospitals
          </h1>

          <div className="flex flex-col h-full mt-10 overflow-hidden ">
            <div className="flex items-center justify-around text-center">
              <Button
                cState={all}
                label={"All"}
                clickFunction={() => {
                  if (nearby == true) {
                    setNearby(false);
                  }
                  setAll(true);
                }}
              />

              <Button
                cState={nearby}
                label={"Nearby"}
                clickFunction={() => {
                  if (all == true) {
                    setAll(false);
                  }
                  setNearby(true);
                }}
              />
            </div>

            <div className="h-full">
              <div className="relative h-full pt-10 pb-8 overflow-hidden">
                {all ? allNgHospitals : nearbyNgHospitals}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://overpass-api.de/api/interpreter?data=[out:json];area[name=%22Nigeria%22]-%3E.a;node(area.a)[%22amenity%22=%22hospital%22];out%20center;";

  const response = await fetch(url);
  const data = await response.json();

  const allHospitals = [];
  data.elements.forEach((data) => {
    if (!data.tags["addr:full"]) {
      return;
    }
    allHospitals.push(data);
  });

  return {
    props: {
      allHospitals,
    },
  };
}
