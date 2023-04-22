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
  complaint,
}) => {
  const [string, setString] = useState(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Patient Name: {patientName}</h1>
      <h1>Specialist: {specialist}</h1>
      <h1>Hospital: {hospital}</h1>
      <h1>Appointment Date: {appointmentDate}</h1>
      <h1>Appointment Time: {appointmentTime}</h1>
      <h1>Appointment Status: Ongoing</h1>
      <h1>Complaint: {complaint}</h1>
      <h1>Gender: {gender}</h1>
    </div>
  );
  const [visible, setVisible] = useState(false);

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
