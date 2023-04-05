import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import consultationsData from "/data/consultationsDummyData.json";
import Button from "@/components/UI/Button";

const dummyData = consultationsData.consultations;

let upcomingArray = [];
let ongoingArray = [];
let completedArray = [];

// Comment line 16 to line 24 to see how the page looks when there is no data :)

// forEach function to separate the different consultations into their states
dummyData.forEach((data) => {
  if (data.status == "upcoming") {
    upcomingArray.push(data);
  } else if (data.status == "ongoing") {
    ongoingArray.push(data);
  } else if (data.status == "completed") {
    completedArray.push(data);
  }
});

function Consultations() {
  const [upcoming, setUpcoming] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [arrayUsed, setArrayUsed] = useState([]);

  useEffect(() => {
    if (upcoming) {
      setArrayUsed(upcomingArray);
    } else if (ongoing) {
      setArrayUsed(ongoingArray);
    } else if (completed) {
      setArrayUsed(completedArray);
    }
  }, [upcoming, ongoing, completed]);

  return (
    <div className="w-screen bg-[#F8FFFE] flex justify-center">
      <div className="flex flex-col w-[95%] h-screen py-10 overflow-hidden">
        <h1 className="text-4xl text-center md:text-6xl text-[#1C665B]">
          Consultations
        </h1>

        <div className="flex flex-col h-full mt-10 overflow-hidden">
          <div className="flex items-center justify-around text-center">
            <Button
              cState={upcoming}
              label={"Upcoming"}
              clickFunction={() => {
                if (ongoing == true) {
                  setOngoing(false);
                } else if (completed == true) {
                  setCompleted(false);
                }
                setUpcoming(true);
              }}
            />

            <Button
              cState={ongoing}
              label={"Ongoing"}
              clickFunction={() => {
                if (upcoming == true) {
                  setUpcoming(false);
                } else if (completed == true) {
                  setCompleted(false);
                }
                setOngoing(true);
              }}
            />

            <Button
              cState={completed}
              label={"Completed"}
              clickFunction={() => {
                if (upcoming == true) {
                  setUpcoming(false);
                } else if (ongoing == true) {
                  setOngoing(false);
                }
                setCompleted(true);
              }}
            />
          </div>

          <div className="h-full">
            <div className="relative h-full pt-10 pb-8 overflow-hidden">
              <div
                className={`w-full h-full ${
                  arrayUsed.length == 0
                    ? "flex flex-col items-center justify-center gap-10"
                    : ""
                } overflow-scroll`}
              >
                {arrayUsed.length > 0 ? (
                  arrayUsed.map((data) => {
                    return (
                      <div
                        className="flex flex-col w-full bg-[#FCFCFC] rounded-lg shadow-lg mb-8"
                        key={data.id}
                      >
                        <div className="flex items-center justify-between p-4 border-b">
                          <p className="text-sm">{data.dateBooked}</p>
                          <button className="px-3 py-1 text-red-500 border border-red-500 rounded-lg">
                            Cancel
                          </button>
                        </div>
                        <div className="flex items-center justify-between w-full p-4">
                          <div className="flex items-center gap-2">
                            <div className="relative w-20 aspect-square">
                              <Image
                                fill
                                src={data.profilePic}
                                alt="ProfilePic"
                              />
                            </div>
                            <div>
                              <h1>{data.name}</h1>
                              <p className="text-sm">{data.type}</p>
                            </div>
                          </div>
                          <button className="px-3 py-1 text-[#1C665B] border border-[#1C665B] rounded-lg">
                            View info
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <p>No upcoming consultation(s) found</p>
                    <div className="relative w-40 h-40">
                      <Image src={"/emptyList.svg"} fill alt="placeholderImg" />
                    </div>
                    <Link
                      className="flex items-center gap-2 px-4 py-3 bg-[#1C665B] text-white rounded-lg shadow-lg absolute bottom-8 right-0"
                      href={"#"}
                    >
                      <div className="relative w-5 h-5">
                        <Image src={"/cross.svg"} fill alt="placeholderImg" />
                      </div>
                      Book an Appointment
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultations;