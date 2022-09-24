import React from "react";
import chairImg from "../../Assets/assets/images/chair.png";
import chairBgImg from "../../Assets/assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="bg-no-repeat"
      style={{ backgroundImage: `url(${chairBgImg})`, backgroundSize: "cover" }}
    >
      <div class="hero min-h-screen container mx-auto">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chairImg}
            alt="..."
            class="md:max-w-lg lg:max-w-2xl max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
