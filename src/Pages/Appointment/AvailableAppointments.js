import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto">
      <h4 className="text-xl text-secondary text-center">
        Available Services on {format(date, "PP")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title justify-center text-secondary">
              Teeth Orthodontics
            </h2>
            <p>08.00 AM - 08.30 AM</p>
            <p>20 spaces available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white"
                onClick={() => setTreatment(true)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title justify-center text-secondary">
              Teeth Orthodontics
            </h2>
            <p>08.00 AM - 08.30 AM</p>
            <p>20 spaces available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white"
                onClick={() => setTreatment(true)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title justify-center text-secondary">
              Teeth Orthodontics
            </h2>
            <p>08.00 AM - 08.30 AM</p>
            <p>20 spaces available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white"
                onClick={() => setTreatment(true)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title justify-center text-secondary">
              Teeth Orthodontics
            </h2>
            <p>08.00 AM - 08.30 AM</p>
            <p>20 spaces available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white"
                onClick={() => setTreatment(true)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title justify-center text-secondary">
              Teeth Orthodontics
            </h2>
            <p>08.00 AM - 08.30 AM</p>
            <p>20 spaces available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white"
                onClick={() => setTreatment(true)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title justify-center text-secondary">
              Teeth Orthodontics
            </h2>
            <p>08.00 AM - 08.30 AM</p>
            <p>20 spaces available</p>
            <div class="card-actions justify-center">
              <label
                for="booking-modal"
                class="btn btn-secondary text-white"
                onClick={() => setTreatment(true)}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>

      {treatment && <BookingModal></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
