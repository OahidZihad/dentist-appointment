import React, { useState } from "react";
import chairImg from "../../Assets/assets/images/chair.png";
import chairBgImg from "../../Assets/assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  console.log(date);

  return (
    <div
      className="bg-no-repeat"
      style={{
        backgroundImage: `url(${chairBgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div class="hero min-h-screen container mx-auto">
        <div class="hero-content flex-col lg:flex-row-reverse gap-12">
          <img
            src={chairImg}
            alt="..."
            class="md:max-w-md lg:max-w-lg max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
