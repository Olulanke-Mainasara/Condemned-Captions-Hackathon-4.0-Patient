import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import consultationsData from "/data/consultationsDummyData.json";

const dummyData = consultationsData.consultations;

let upcomingArray = [];
let ongoingArray = [];
let completedArray = [];

// Comment line 14 to line 22 to see how the page looks when there is no data :)

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

  return (
    <div className="w-screen bg-[#F8FFFE] flex justify-center">
      <div className="flex flex-col w-[95%] h-screen py-10 overflow-hidden">
        <h1 className="text-4xl text-center md:text-6xl text-[#1C665B]">
          Consultations
        </h1>

        <div className="flex flex-col h-full mt-10 overflow-hidden">
          <div className="flex items-center justify-around text-center">
            <button
              className={`relative ${
                upcoming ? "after:w-full" : ""
              } after:left-0 after:scale-x-110 after:content-[""] after:absolute after:-bottom-2  after:h-[2px] after:bg-[#1C665B]`}
              onClick={() => {
                if (ongoing == true) {
                  setOngoing(false);
                } else if (completed == true) {
                  setCompleted(false);
                }
                setUpcoming(true);
              }}
            >
              Upcoming
            </button>

            <button
              className={`relative ${
                ongoing ? "after:w-full" : ""
              } after:left-0 after:scale-x-110 after:content-[""] after:absolute after:-bottom-2  after:h-[2px] after:bg-[#1C665B]`}
              onClick={() => {
                if (upcoming == true) {
                  setUpcoming(false);
                } else if (completed == true) {
                  setCompleted(false);
                }
                setOngoing(true);
              }}
            >
              Ongoing
            </button>

            <button
              className={`relative ${
                completed ? "after:w-full" : ""
              } after:left-0 after:scale-x-110 after:content-[""] after:absolute after:-bottom-2  after:h-[2px] after:bg-[#1C665B]`}
              onClick={() => {
                if (upcoming == true) {
                  setUpcoming(false);
                } else if (ongoing == true) {
                  setOngoing(false);
                }
                setCompleted(true);
              }}
            >
              Completed
            </button>
          </div>

          <div className="h-full">
            <div className="relative h-full pt-10 pb-8 overflow-hidden">
              {
                // To handle the data for the upcoming section
                upcoming && (
                  <div
                    className={`w-full h-full ${
                      upcomingArray.length == 0
                        ? "flex flex-col items-center justify-center gap-10"
                        : ""
                    } overflow-scroll`}
                  >
                    {upcomingArray.length > 0 ? (
                      upcomingArray.map((data) => {
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
                          <Image
                            src={"/emptyList.svg"}
                            fill
                            alt="placeholderImg"
                          />
                        </div>
                        <Link
                          className="flex items-center gap-2 px-4 py-3 bg-[#1C665B] text-white rounded-lg shadow-lg absolute bottom-8 right-0"
                          href={"#"}
                        >
                          <div className="relative w-5 h-5">
                            <Image
                              src={"/cross.svg"}
                              fill
                              alt="placeholderImg"
                            />
                          </div>
                          Book an Appointment
                        </Link>
                      </>
                    )}
                  </div>
                )
              }

              {
                // To handle the data for the upcoming section
                ongoing && (
                  <div
                    className={`w-full h-full ${
                      ongoingArray.length == 0
                        ? "flex flex-col items-center justify-center gap-10"
                        : ""
                    } overflow-scroll`}
                  >
                    {ongoingArray.length > 0 ? (
                      ongoingArray.map((data) => {
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
                        <p>No ongoing consultation(s) found</p>
                        <div className="relative w-40 h-40">
                          <Image
                            src={"/emptyList.svg"}
                            fill
                            alt="placeholderImg"
                          />
                        </div>
                        <Link
                          className="flex items-center gap-2 px-4 py-3 bg-[#1C665B] text-white rounded-lg shadow-lg absolute bottom-8 right-0"
                          href={"#"}
                        >
                          <div className="relative w-5 h-5">
                            <Image
                              src={"/cross.svg"}
                              fill
                              alt="placeholderImg"
                            />
                          </div>
                          Book an Appointment
                        </Link>
                      </>
                    )}
                  </div>
                )
              }

              {
                // To handle the data for the upcoming section
                completed && (
                  <div
                    className={`w-full h-full ${
                      completedArray.length == 0
                        ? "flex flex-col items-center justify-center gap-10"
                        : ""
                    } overflow-scroll`}
                  >
                    {completedArray.length > 0 ? (
                      completedArray.map((data) => {
                        return (
                          <div
                            className="flex flex-col w-full h-fit bg-[#FCFCFC] rounded-lg shadow-lg mb-8"
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
                        <p>No completed consultation(s) found</p>
                        <div className="relative w-40 h-40">
                          <Image
                            src={"/emptyList.svg"}
                            fill
                            alt="placeholderImg"
                          />
                        </div>
                        <Link
                          className="flex items-center gap-2 px-4 py-3 bg-[#1C665B] text-white rounded-lg shadow-lg absolute bottom-8 right-0"
                          href={"#"}
                        >
                          <div className="relative w-5 h-5">
                            <Image
                              src={"/cross.svg"}
                              fill
                              alt="placeholderImg"
                            />
                          </div>
                          Book an Appointment
                        </Link>
                      </>
                    )}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultations;
