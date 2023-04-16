import Nav from "@/components/Nav";
import React, { useState, useRef, useEffect } from "react";
import { states } from "@/data/arrays";
import { times } from "@/data/arrays";
import useStore from "@/providers/appStore";
import specialistsDummy from "/data/specialistsDummyData.json";
import doctorsDummy from "/data/doctorsDummyData.json";
import Link from "next/link";
import Image from "next/image";

function Booking() {
  const { items, addItem } = useStore();
  const [selectedGender, setSelectedGender] = useState("Male");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const specialistsArray = specialistsDummy.specialists;
  const doctorsArray = doctorsDummy.doctors;

  const formFieldsRef = useRef({
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
    complaint: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formFieldsRef.current);
    formRef.current.reset();
    resetFormFields();
    setShowConfirmation(true);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  const resetFormFields = () => {
    formFieldsRef.current = {
      fname: "",
      lname: "",
      dob: "",
      address: "",
      gender: "Male",
      state: "",
      hospital: "",
      department: "",
      specialist: "",
      complaint: "",
      appointmentDate: "",
      appointmentTime: "",
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formFieldsRef.current[name] = value;
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <>
      <main
        className={`flex flex-col justify-center w-screen gap-6 p-6 px-4 bg-[#2a9988] text-white ${
          showConfirmation
            ? "h-screen overflow-hidden"
            : "min-h-screen overflow-scroll"
        }`}
      >
        <Nav />

        <h1 className="text-3xl text-center text-white md:text-4xl">
          Book an appointment
        </h1>

        <div className="flex items-center justify-around mb-16">
          <form
            ref={formRef}
            className="flex flex-col justify-center w-full h-fit p-4 md:p-8 py-5 gap-7 md:gap-10 bg-[#fcffff80] rounded-xl shadow-lg max-w-xl xl:max-w-fit"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center w-full xl:flex-row gap-7 xl:gap-10">
              <fieldset
                className={`w-full flex flex-col xl:flex-row items-center gap-7 xl:gap-10 rounded-lg basis-3/4`}
              >
                <div className="flex flex-col w-full gap-4">
                  <label>
                    Patients first name
                    <input
                      type="text"
                      className="w-full h-12 pl-2 text-black rounded min-w-[300px] mt-1"
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
                      className="w-full h-12 pl-2 text-black rounded min-w-[300px] mt-1"
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
                      className="w-full h-12 px-2 mt-1 text-black rounded"
                      name="dob"
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Address
                    <input
                      type="text"
                      className="w-full h-12 pl-2 mt-1 text-black rounded"
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

                <div className="flex flex-col w-full gap-4">
                  <label className="w-full">
                    State
                    <select
                      name="state"
                      className="w-full h-12 px-2 mt-1 text-black rounded outline-none"
                      onChange={handleInputChange}
                    >
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
                      className="w-full h-12 px-2 mt-1 text-black rounded outline-none"
                      onChange={handleInputChange}
                    >
                      <option>Select</option>
                      <option>Abia</option>
                      <option>Abia</option>
                      <option>Abia</option>
                      <option>Abia</option>
                    </select>
                  </label>

                  <label className="w-full">
                    Department
                    <select
                      name="department"
                      className="w-full h-12 px-2 mt-1 text-black rounded outline-none"
                      onChange={handleInputChange}
                    >
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
                      className="w-full h-12 px-2 mt-1 text-black rounded outline-none"
                      onChange={handleInputChange}
                    >
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

              <div className="flex flex-col w-full gap-4 basis-1/2">
                <label className="text-xl text-center">
                  Complaint
                  <textarea
                    name="complaint"
                    className="w-full p-4 mt-1 text-base text-black rounded-lg outline-none"
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
                    className="w-full h-12 px-2 mt-1 text-black rounded"
                    name="appointmentDate"
                    onChange={handleInputChange}
                  />
                </label>

                <label className="w-full">
                  Appointment time
                  <select
                    name="appointmentTime"
                    className="w-full h-12 px-2 mt-1 text-black rounded outline-none"
                    onChange={handleInputChange}
                  >
                    {times.map((time) => (
                      <option key={time.id} value={time.time}>
                        {time.time}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <button
              className="bg-[#1C665B] w-4/5 py-3 rounded-lg text-white max-w-md"
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
              className="bg-[#1C665B] w-4/5 py-3 rounded-lg text-white text-center"
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
