import React from "react";

const InfoCard = ({ image, background, title, paragraph }) => {
  return (
    <div class={`card lg:card-side h-25 content-center ${background}`}>
      <figure className="p-5 pr-0">
        <img src={image} alt="Album" />
      </figure>
      <div class="card-body pr-0 pt-0 lg:pt-8 text-white">
        <h2 class="card-title">{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default InfoCard;
