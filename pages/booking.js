import Nav from "@/components/Nav";
import React, { useState, useRef } from "react";
import { states } from "@/data/arrays";
import useStore from "@/providers/appStore";
import specialistsDummy from "/data/specialistsDummyData.json";
import doctorsDummy from "/data/doctorsDummyData.json";
import Link from "next/link";
import Image from "next/image";

function Booking() {
  const { addItem, addUpcoming } = useStore();
  const [selectedGender, setSelectedGender] = useState("Male");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [availableHospitals, setAvailableHospitals] = useState([]);
  const specialistsArray = specialistsDummy.specialists;
  const doctorsArray = doctorsDummy.doctors;

  const formFieldsRef = useRef({
    id: Math.floor(Math.random() * 10000),
    status: "upcoming",
    fname: "",
    lname: "",
    dob: "",
    address: "",
    gender: "Male",
    state: "",
    hospital: "",
    department: "",
    specialist: "",
    doc: "/doc1.svg",
    complaint: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formFieldsRef.current);
    addUpcoming(formFieldsRef.current);
    formRef.current.reset();
    setShowConfirmation(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formFieldsRef.current[name] = value;
  };

  async function handleAvailableHospitals(event) {
    const { value } = event.target;
    const hospitalQuery = `hospital in ${value} Nigeria`;

    const searchUrl = `https://nominatim.openstreetmap.org/search?q=${hospitalQuery}&format=json&limit=10`;

    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    setAvailableHospitals(searchData);
  }

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <>
      <main
        className={`flex flex-col justify-center w-screen gap-6 xl:gap-0 p-6 xl:pt-32 px-4 text-white xl:h-screen xl:overflow-hidden ${
          showConfirmation
            ? "h-screen overflow-hidden"
            : "min-h-screen overflow-scroll"
        }`}
      >
        <Nav />

        <h1 className="text-3xl text-center text-[#2A9988] md:text-4xl xl:text-6xl">
          Book an appointment
        </h1>

        <div className="flex items-center justify-around mb-16">
          <form
            ref={formRef}
            className="flex flex-col justify-center w-full max-w-xl p-4 py-5 h-fit md:p-8 gap-7 md:gap-10 xl:max-w-fit"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center w-full gap-10 text-black dark:text-white xl:flex-row">
              <fieldset
                className={`w-full flex flex-col xl:flex-row items-center gap-10 rounded-lg basis-3/4`}
              >
                <div className="flex flex-col w-full gap-6">
                  <label>
                    Patients first name
                    <input
                      type="text"
                      className="w-full h-12 pl-3 rounded min-w-[300px] mt-1"
                      name="fname"
                      pattern="[A-Za-z]+"
                      minLength="2"
                      maxLength="50"
                      required
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Patients last name
                    <input
                      type="text"
                      className="w-full h-12 pl-3 rounded min-w-[300px] mt-1"
                      name="lname"
                      pattern="[A-Za-z]+"
                      minLength="2"
                      maxLength="50"
                      required
                      onChange={handleInputChange}
                    />
                  </label>

                  <label className="">
                    Date of Birth
                    <input
                      type="date"
                      className="w-full h-12 px-3 mt-1 rounded"
                      name="dob"
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Address
                    <input
                      type="text"
                      className="w-full h-12 pl-3 mt-1 rounded"
                      name="address"
                      minLength="2"
                      required
                      onChange={handleInputChange}
                    />
                  </label>

                  <div className="flex items-center justify-around w-full pt-2 text-xl">
                    <label className="flex items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={selectedGender === "Male"}
                        onChange={(e) => {
                          handleGenderChange(e);
                          handleInputChange(e);
                        }}
                      />
                      Male
                    </label>

                    <label className="flex items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={selectedGender === "Female"}
                        onChange={(e) => {
                          handleGenderChange(e);
                          handleInputChange(e);
                        }}
                      />
                      Female
                    </label>
                  </div>
                </div>

                <hr className="w-full xl:hidden" />

                <div className="flex flex-col w-full gap-6">
                  <label className="w-full">
                    State
                    <select
                      name="state"
                      className="w-full h-12 px-3 mt-1 rounded outline-none"
                      onChange={(e) => {
                        handleInputChange(e);
                        handleAvailableHospitals(e);
                      }}
                    >
                      <option>Select</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.state}>
                          {state.state}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="w-full">
                    Hospital
                    <select
                      name="hospital"
                      className="w-full h-12 px-3 mt-1 rounded outline-none"
                      onChange={handleInputChange}
                    >
                      <option>Select</option>
                      {availableHospitals.map((hospital) => {
                        const splitDisplay = hospital.display_name.split(",");
                        return (
                          <option
                            key={hospital.place_id}
                            value={splitDisplay[0]}
                          >
                            {splitDisplay[0]}
                          </option>
                        );
                      })}
                    </select>
                  </label>

                  <label className="w-full">
                    Department
                    <select
                      name="department"
                      className="w-full h-12 px-3 mt-1 rounded outline-none"
                      onChange={handleInputChange}
                    >
                      <option>Select</option>
                      {specialistsArray.map((data) => (
                        <option key={data.id} value={data.type}>
                          {data.type}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="w-full">
                    Specialist
                    <select
                      name="specialist"
                      className="w-full h-12 px-3 mt-1 rounded outline-none"
                      onChange={handleInputChange}
                    >
                      <option>Select</option>
                      {doctorsArray.map((data) => (
                        <option key={data.id} value={data.name}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </fieldset>

              <hr className={`w-full xl:hidden`} />

              <div className="flex flex-col w-full gap-6 basis-1/2">
                <label className="text-xl text-center">
                  Complaint
                  <textarea
                    name="complaint"
                    className="w-full p-3 mt-1 text-base rounded-lg outline-none"
                    rows={8}
                    cols={40}
                    placeholder="Please write down your complaint"
                    onChange={handleInputChange}
                  ></textarea>
                </label>

                <label className="w-full">
                  Appointment date
                  <input
                    type="date"
                    className="w-full h-12 px-3 mt-1 rounded"
                    name="appointmentDate"
                    onChange={handleInputChange}
                  />
                </label>

                <label className="w-full">
                  Appointment time
                  <input
                    type="time"
                    className="w-full h-12 px-3 mt-1 rounded"
                    name="appointmentTime"
                    min="08:00"
                    max="17:00"
                    required
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>

            <button
              className="bg-[#2a9988] hover:bg-[#1C665B] w-4/5 py-3 rounded-lg text-white max-w-md"
              type="submit"
            >
              Confirm appointment
            </button>
          </form>
        </div>
      </main>

      {showConfirmation && (
        <div className="absolute top-0 flex items-center justify-center w-screen h-screen backdrop-brightness-[25%]">
          <div className="flex flex-col items-center justify-center w-4/5 max-w-xs gap-4 px-4 py-6 text-black bg-white rounded-lg">
            <div className="flex items-center justify-center w-20 rounded-full overflow-hidden aspect-square bg-[#1C665B]">
              <div className="relative w-10 aspect-square">
                <Image src={"/success.svg"} fill priority alt="successIcon" />
              </div>
            </div>
            <h1 className="text-2xl">Appointment booked</h1>
            <Link
              href={"/consultations"}
              className="bg-[#2a9988] hover:bg-[#1C665B] w-4/5 py-3 rounded-lg text-white text-center"
            >
              Consultations
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Booking;
