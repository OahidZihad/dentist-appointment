import React from "react";
import bgImg from "../../Assets/assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="mt-16" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container mx-auto">
        <div className="text-center py-5">
          <h5 className="text-primary text-lg">Contact Us</h5>
          <h2 className="text-white text-4xl pt-2">Stay connected with us</h2>
        </div>
        <form className="text-center">
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="Email Address"
          />
          <br />
          <br />
          <input className="p-2 rounded-md" type="text" placeholder="Subject" />
          <br />
          <br />
          <textarea
            className="p-2 rounded-md"
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Your Message"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
