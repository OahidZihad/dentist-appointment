import React from "react";
import dentalCareImg from "../../Assets/assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div class="hero container mx-auto">
      <div class="hero-content flex-col lg:flex-row lg:gap-20">
        <img
          src={dentalCareImg}
          class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
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
    </div>
  );
};

export default DentalCare;
