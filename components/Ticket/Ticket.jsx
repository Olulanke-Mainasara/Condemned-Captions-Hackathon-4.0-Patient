import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { Card, QRCode, Button, message } from "antd";
import Link from "next/link";

export const Ticket = () => {
  const [string, setString] = useState(
    "Patient Name: Anna, Consultation Status: Ongoing..."
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
      <br />
      <Card
        size="small"
        className="card"
        title={
          <h1 className="w-full text-center text-lg font-bold">
            Appointment Booked
            <br />
            <hr className="w-full" />
          </h1>
        }
        bordered={false}
        style={{ width: `${visible ? 600 : 300}` }}
        id="myqrcode"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <p style={{ textAlign: "center" }}>
              <b>Dr. Sayall Olawale</b>
            </p>
            <p style={{ color: "teal", textAlign: "center" }}>
              <b>Greenwich Hospital, 65b Ojota Rd.</b>
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
            <b>Patient Name: Anna</b>
          </p>
          <p>
            <b>29th April, 2023</b>
          </p>
        </div>
      </Card>
      <br />
      <Button.Group className="w-full rounded-xl">
        <Link
          href={"/consultations"}
          style={{ padding: "5px 40px" }}
          className="bg-teal-700 hover:bg-teal-800 active:bg-teal-800 rounded-l-lg w-1/2 text-white flex flex-row items-center"
        >
          Consultations
        </Link>
        <Button
          size="medium"
          style={{ padding: "5px 40px" }}
          type="primary"
          onClick={downloadTicket}
          className="bg-teal-700 hover:bg-teal-800 active:bg-teal-800 w-1/2 text-white flex flex-row items-center"
        >
          Download
        </Button>
      </Button.Group>
    </div>
  );
};
