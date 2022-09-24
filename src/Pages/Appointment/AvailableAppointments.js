import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h4 className="text-xl text-secondary text-center">
        Available Services on {format(date, "PP")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <h2 class="card-title justify-center text-secondary">
                {service.name}
              </h2>
              <p>
                {service.slots.length > 0 ? (
                  <span>{service.slots[0]}</span>
                ) : (
                  <span className="text-red-500">Try another date.</span>
                )}
              </p>
              <p>
                {service.slots.length}{" "}
                {service.slots.length > 1 ? "spaces" : "space"} available
              </p>
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
        ))}
      </div>

      {treatment && <BookingModal></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
