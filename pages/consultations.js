import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useStore from "@/providers/appStore";
import Button from "@/components/UI/Button";
import Nav from "@/components/Nav";

function Consultations() {
  const [upcoming, setUpcoming] = useState(true);
  const [history, setHistory] = useState(false);
  const [arrayUsed, setArrayUsed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [modalData, setModalData] = useState({
    id: "",
    state: "",
    hospital: "",
    department: "",
    specialist: "",
    complaint: "",
    appointmentDate: "",
    appointmentTime: "",
  });
  const [cancelData, setCancelData] = useState({});
  const { items, upcomingItems, deleteUpcoming } = useStore();

  useEffect(() => {
    if (upcoming) {
      setArrayUsed(upcomingItems);
    } else if (history) {
      setArrayUsed(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upcoming, history, items, upcomingItems]);

  const openModal = (dataToBeUsed) => {
    setModalData(dataToBeUsed);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openCancelModal = (dataToBeDeleted) => {
    setCancelData(dataToBeDeleted);
    setShowCancelModal(true);
  };

  const closeCancelModal = () => {
    setShowCancelModal(false);
  };

  const cancelApp = () => {
    deleteUpcoming(cancelData);
    setShowCancelModal(false);
  };

  return (
    <>
      <Head>
        <title>Consultations | NEXTGEN Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center w-screen">
        <div className="flex flex-col w-[95%] max-w-[1024px] h-screen pt-5 pb-14 xl:pt-24 overflow-hidden">
          <Nav />

          <h1 className="text-4xl text-center md:text-6xl text-[#2A9988]">
            Consultations
          </h1>

          <div className="flex flex-col h-full mt-10 overflow-hidden ">
            <div className="flex items-center justify-around text-center dark:text-white">
              <Button
                cState={upcoming}
                label={"Upcoming"}
                clickFunction={() => {
                  if (history == true) {
                    setHistory(false);
                  }
                  setUpcoming(true);
                }}
              />

              <Button
                cState={history}
                label={"History"}
                clickFunction={() => {
                  if (upcoming == true) {
                    setUpcoming(false);
                  }
                  setHistory(true);
                }}
              />
            </div>

            <div className="h-full">
              <div className="relative h-full pt-10 pb-8 overflow-hidden">
                <div
                  className={`w-full h-full ${
                    arrayUsed.length == 0
                      ? "flex flex-col items-center justify-center gap-10"
                      : "md:grid md:grid-cols-2 md:gap-4 xl:gap-10"
                  } overflow-scroll`}
                >
                  {arrayUsed.length > 0 ? (
                    arrayUsed.map((data) => {
                      return (
                        <div
                          className="flex h-fit flex-col mx-auto w-[95%] bg-[#FCFCFC] rounded-lg shadow-lg mb-8"
                          key={data.id}
                        >
                          <div className="flex items-center justify-between p-4 border-b">
                            <p className="text-sm xl:text-lg">
                              {data.appointmentDate +
                                " | " +
                                data.appointmentTime}
                            </p>
                            {upcoming && (
                              <button
                                className="px-3 py-1 text-red-500 border border-red-500 rounded-lg"
                                onClick={() => openCancelModal(data)}
                              >
                                Cancel appointment
                              </button>
                            )}
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
                                <h1 className="xl:text-2xl">
                                  {data.specialist}
                                </h1>
                                <p className="text-sm xl:text-lg">
                                  {data.department}
                                </p>
                              </div>
                            </div>
                            <button
                              className="px-3 py-1 text-white border bg-[#1C665B] rounded-lg"
                              onClick={() => openModal(data)}
                            >
                              View
                            </button>
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
                    className="flex items-center gap-2 px-4 py-3 bg-[#2a9988] hover:bg-[#1C665B] duration-500 text-white rounded-lg shadow-lg absolute bottom-12 right-0"
                    href={"/booking"}
                  >
                    <div className="relative w-5 h-5">
                      <Image src={"/cross.svg"} fill alt="placeholderImg" />
                    </div>
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="absolute top-0 flex items-center justify-center w-screen h-screen backdrop-brightness-[25%]">
          <div
            className="flex h-fit flex-col mx-auto w-[95%] max-w-md bg-[#FCFCFC] rounded-lg shadow-lg mb-8"
            key={modalData.id}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <p className="text-lg">
                {modalData.appointmentDate + " | " + modalData.appointmentTime}
              </p>

              <button
                title="Close modal"
                onClick={() => closeModal()}
                className="relative w-6 text-lg text-black aspect-square"
              >
                <Image fill src={"/close.svg"} alt="closeMenu" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-between w-full p-4 pt-6">
              <div className="flex items-center w-full gap-2 pb-6">
                <div className="relative w-32 aspect-square">
                  <Image fill src={modalData.doc} alt="ProfilePic" />
                </div>
                <div>
                  <h1 className="text-2xl">{modalData.specialist}</h1>
                  <p className="text-lg">{modalData.department}</p>
                </div>
              </div>

              <hr className={`w-full`} />

              <div className="flex flex-col w-full gap-4 pt-6">
                <p className="text-lg font-[600]">
                  State: <span className="font-normal">{modalData.state}</span>
                </p>
                <p className="text-lg font-[600]">
                  Hospital:{" "}
                  <span className="font-normal">{modalData.hospital}</span>
                </p>
                <p className="text-lg font-[600]">
                  Complaint: <br />
                  <span className="font-normal">{modalData.complaint}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCancelModal && (
        <div className="absolute top-0 flex items-center justify-center w-screen h-screen backdrop-brightness-[25%]">
          <div className="flex flex-col items-center justify-center w-4/5 max-w-xs gap-4 px-4 py-6 text-black bg-white rounded-lg">
            <h1 className="text-xl text-center">
              Are you sure you want to cancel this appointment?
            </h1>
            <div className="flex items-center justify-center gap-10 text-white">
              <button
                className="px-3 py-1 bg-red-500 border rounded-lg hover:bg-red-800"
                onClick={() => closeCancelModal()}
              >
                No
              </button>
              <button
                className="px-3 py-1 border bg-[#2a9988] hover:bg-[#1C665B] duration-500 rounded-lg"
                onClick={() => cancelApp()}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Consultations;
