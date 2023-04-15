import Nav from "@/components/Nav";
import React, { useState } from "react";

function Booking() {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <main className="flex flex-col justify-center w-screen min-h-screen gap-6 p-6 px-4 bg-[#2a9988] text-white">
      <h1 className="text-3xl text-center text-white md:text-4xl">
        Book an appointment
      </h1>

      <div className="flex items-center justify-around">
        <form className="flex flex-col justify-center w-full h-fit p-4 md:p-8 py-5 gap-7 md:gap-10 bg-[#fcffff80] rounded-xl shadow-lg max-w-xl xl:max-w-fit">
          <div className="flex flex-col items-center w-full xl:flex-row gap-7 xl:gap-10">
            <fieldset
              className={`w-full flex flex-col xl:flex-row items-center gap-7 xl:gap-10 rounded-lg basis-3/4`}
            >
              <div className="flex flex-col w-full gap-4">
                <label>
                  Patients name
                  <input
                    type="text"
                    className="w-full h-12 pl-2 text-black rounded min-w-[300px] mt-1"
                    name="patient name"
                    placeholder="Patients name"
                  />
                </label>

                <label className="">
                  Date of Birth
                  <input
                    type="date"
                    className="w-full h-12 px-2 mt-1 text-black rounded"
                    name="Date of Birth"
                  />
                </label>

                <label>
                  Address
                  <input
                    type="text"
                    className="w-full h-12 pl-2 mt-1 text-black rounded"
                    name="patient address"
                    placeholder="Address"
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
                      onChange={handleGenderChange}
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
                      onChange={handleGenderChange}
                    />
                    Female
                  </label>
                </div>
              </div>

              <hr className="w-full xl:hidden" />

              <div className="flex flex-col w-full gap-4">
                <label className="w-full">
                  State
                  <select className="w-full h-12 px-2 mt-1 text-black rounded outline-none">
                    <option>Select</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                  </select>
                </label>

                <label className="w-full">
                  Hospital
                  <select className="w-full h-12 px-2 mt-1 text-black rounded outline-none">
                    <option>Select</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                  </select>
                </label>

                <label className="w-full">
                  Department
                  <select className="w-full h-12 px-2 mt-1 text-black rounded outline-none">
                    <option>Select</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                  </select>
                </label>

                <label className="w-full">
                  Specialist
                  <select className="w-full h-12 px-2 mt-1 text-black rounded outline-none">
                    <option>Select</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                    <option>Abia</option>
                  </select>
                </label>
              </div>
            </fieldset>

            <hr className={`w-full xl:hidden`} />

            <div className="flex flex-col w-full gap-4">
              <label className="text-xl text-center">
                Complaint
                <textarea
                  className="w-full p-4 mt-1 text-base text-black rounded-lg outline-none"
                  rows={8}
                  cols={40}
                  placeholder="Please write down your complaint"
                ></textarea>
              </label>

              <label className="w-full">
                Appointment date
                <input
                  type="date"
                  className="w-full h-12 px-2 mt-1 text-black rounded"
                  name="Date of Birth"
                />
              </label>

              <label className="w-full">
                Appointment time
                <select className="w-full h-12 px-2 mt-1 text-black rounded outline-none">
                  <option>Select</option>
                  <option>Abia</option>
                  <option>Abia</option>
                  <option>Abia</option>
                  <option>Abia</option>
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
  );
}

export default Booking;
