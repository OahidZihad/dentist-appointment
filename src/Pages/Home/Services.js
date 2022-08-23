import React from "react";
import ServiceCard from "./ServiceCard";
import fluorideImg from "../../Assets/assets/images/fluoride.png";
import cavityImg from "../../Assets/assets/images/cavity.png";
import whiteningImg from "../../Assets/assets/images/whitening.png";

const Services = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center">
        <h5 className="text-primary font-bold uppercase text-sm">
          our services
        </h5>
        <h4 className="text-2xl">Services We Provide</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
        <ServiceCard
          image={fluorideImg}
          title="Fluoride Treatment"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos quod! Cum velit, magni expedita omnis reiciendis possimus nemo esse!"
        ></ServiceCard>
        <ServiceCard
          image={cavityImg}
          title="Cavity Filling"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos quod! Cum velit, magni expedita omnis reiciendis possimus nemo esse!"
        ></ServiceCard>
        <ServiceCard
          image={whiteningImg}
          title="Teeth Whitening"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos quod! Cum velit, magni expedita omnis reiciendis possimus nemo esse!"
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
