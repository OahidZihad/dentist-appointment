import React from "react";
import footerImg from "../../../Assets/assets/images/footer.png";

const Footer = () => {
  return (
    <section
      className="container mx-auto bg-center"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
      }}
    >
      <footer class="p-10">
        <div className="footer sm:flex sm:justify-between pt-10">
          <div>
            <span class="footer-title">SERVICES</span>
            <a class="link link-hover">Emergency Checkup</a>
            <a class="link link-hover">Monthly Checkup</a>
            <a class="link link-hover">Weekly Checkup</a>
            <a class="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span class="footer-title">ORAL HEALTH</span>
            <a class="link link-hover">Fluoride Treatment</a>
            <a class="link link-hover">Cavity Filling</a>
            <a class="link link-hover">Teath Whitening</a>
          </div>
          <div>
            <span class="footer-title">OUR ADDRESS</span>
            <a class="link link-hover">New York - 101010 Hudson</a>
          </div>
        </div>
        <div className="pt-10 text-center">
          <p>
            Copyright © 2022 - All right reserved by <b>PRITOM'S CHEMBER</b>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
