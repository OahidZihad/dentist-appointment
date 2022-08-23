import React from "react";
import InfoCard from "./InfoCard";
import clockImg from "../../Assets/assets/icons/clock.svg";
import markerImg from "../../Assets/assets/icons/marker.svg";
import phoneImg from "../../Assets/assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto">
      <InfoCard
        image={clockImg}
        background="bg-gradient-to-r from-secondary to-primary"
        title="Opening Hours"
        paragraph="This is open for 24/7. In some cases it might be changed."
      ></InfoCard>
      <InfoCard
        image={markerImg}
        background="bg-accent"
        title="Visit our location"
        paragraph="Dashbekari Mor, Gaibandha"
      ></InfoCard>
      <InfoCard
        image={phoneImg}
        background="bg-gradient-to-r from-secondary to-primary"
        title="Contact us now"
        paragraph="+88 017 52746973"
      ></InfoCard>
    </div>
  );
};

export default Info;
