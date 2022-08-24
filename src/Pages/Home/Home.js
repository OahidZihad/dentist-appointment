import React from "react";
import Banner from "./Banner";
import DentalCare from "./DentalCare";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
