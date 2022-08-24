import React from "react";
import doctorImg from "../../Assets/assets/images/doctor.png";
import appointmentImg from "../../Assets/assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="my-10 lg:my-32 p-5 lg:p-0"
      style={{ background: `url(${appointmentImg})` }}
    >
      <div className="flex justify-center items-center container mx-auto">
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px]" src={doctorImg} alt="" />
        </div>
        <div className="flex-1">
          <h5 className="text-primary text-md">Appointment</h5>
          <h2 className="text-white text-2xl pt-2">
            Make an appointment today
          </h2>
          <p className="text-white py-3 pb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
