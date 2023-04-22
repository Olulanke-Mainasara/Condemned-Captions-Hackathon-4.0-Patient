import React, { useState } from "react";
import html2canvas from "html2canvas";
import { Card, QRCode, Button, message } from "antd";
import Link from "next/link";
import { auth, db } from "@/firebase/client";
import { doc, updateDoc } from "firebase/firestore";

export const Ticket = ({patientName, specialist, hospital, appointmentDate, appointmentTime}) => {
  const [string, setString] = useState(
    `Patient Name: ${patientName}, Appointment Status: Upcoming...`
  );
  const [visible, setVisible] = useState(false);

  const addQrCode = async () => {
    try {
      const user = auth.currentUser;
      console.log(typeof id);
      if (user) {
        const uid = user.uid;
        const appointmentDocRef = doc(
          db,
          "users",
          uid,
          "upcoming-appointments",
          id
        );
        // This the function that updates the users upcoming appointment, but I dont know exactly what generates the code
        await updateDoc(appointmentDocRef, {qr_string: ""});
      } else {
        alert("Oops! You're not logged in.");
        router.push("/login");
      }
    } catch (error) {
      console.error("Error adding Qr Code appointment: ", error);
    }
  }

  const downloadTicket = async () => {
    setVisible(true);
    const element = document.getElementById("myqrcode");
    const canvas = await html2canvas(element);
    document.body.appendChild(canvas);
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "My_Appointment.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      document.body.removeChild(canvas);
      message.info("Done ✅");
      setVisible(false);
    } else {
      message.info("No document found.📄 Please Try again!⚠️");
      document.body.removeChild(canvas);
      setVisible(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card
        size="small"
        className="card"
        title={
          <h1 className="w-full text-lg font-bold text-center">
            Appointment Booked
            <br />
          </h1>
        }
        bordered={false}
        style={{ width: `${visible ? 600 : 300}` }}
        id="myqrcode"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <p style={{ textAlign: "center" }}>
              <b>{specialist}</b>
            </p>
            <p style={{ color: "teal", textAlign: "center" }}>
              <b>{hospital}</b>
            </p>
            <br />
          </div>
          <div>
            <QRCode
              errorLevel="H"
              size={200}
              value={string}
              iconSize={200 / 6}
              icon="health-icon.png"
            />
          </div>
          <br />
          <p>
            <b>Patient Name: {patientName}</b>
          </p>
          <p>
            <b>{appointmentDate + " | " + appointmentTime}</b>
          </p>
        </div>
      </Card>
      <br />
      <Button.Group className="w-[90%] rounded-xl">
        <Link
          href={"/appointments"}
          style={{ padding: "5px 40px" }}
          className="flex items-center justify-center w-1/2 text-white bg-teal-700 rounded-l-lg hover:bg-teal-800 active:bg-teal-800"
        >
          Appointments
        </Link>
        <Button
          size="medium"
          style={{ padding: "5px 40px" }}
          type="primary"
          onClick={downloadTicket}
          className="flex flex-row items-center w-1/2 text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-800"
        >
          Download
        </Button>
      </Button.Group>
    </div>
  );
};
