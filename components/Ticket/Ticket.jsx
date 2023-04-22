import React, { useState } from "react";
import html2canvas from "html2canvas";
import { Card, QRCode, Button, message } from "antd";
import Link from "next/link";

export const Ticket = ({
  patientName,
  specialist,
  hospital,
  appointmentDate,
  appointmentTime,
  qrString,
}) => {
  // Define state variables for the QR code string and the modal visibility
  const [string, setString] = useState(qrString);
  const [visible, setVisible] = useState(false);

  // Function to download the ticket
  const downloadTicket = async () => {
    // Show the modal
    setVisible(true);
    // Get the QR code element
    const element = document.getElementById("myqrcode");
    // Create a canvas from the QR code element
    const canvas = await html2canvas(element);
    // Append the canvas to the document body
    document.body.appendChild(canvas);
    if (canvas) {
      // If the canvas exists, create a URL from it and download it
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "My_Appointment.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      document.body.removeChild(canvas);
      // Show a success message and hide the modal
      message.info("Done ✅");
      setVisible(false);
    } else {
      // If the canvas doesn't exist, show an error message and hide the modal
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
