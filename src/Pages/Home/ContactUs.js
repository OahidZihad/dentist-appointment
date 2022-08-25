import React from "react";
import bgImg from "../../Assets/assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="mt-16" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container mx-auto">
        <div className="text-center py-5">
          <h5 className="text-primary text-lg">Contact Us</h5>
          <h2 className="text-white text-3xl">Stay connected with us</h2>
        </div>
        <form className="text-center py-4">
          <input
            className="p-2 rounded-md w-[400px]"
            type="text"
            placeholder="Email Address"
          />
          <br />
          <br />
          <input
            className="p-2 rounded-md w-[400px]"
            type="text"
            placeholder="Subject"
          />
          <br />
          <br />
          <textarea
            className="p-2 rounded-md w-[400px]"
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Your Message"
          ></textarea>
          <br />
          <br />
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
