import React from "react";
import testimonialImg from "../../Assets/assets/icons/quote.svg";
import peopleImg from "../../Assets/assets/images/people1.png";

const Testimonial = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between px-5 md:px-0">
        <div>
          <h5 className="text-primary text-lg">Testimonial</h5>
          <h2 className="text-3xl pt-2">What our patients says</h2>
        </div>
        <div>
          <img className="w-[15rem]" src={testimonialImg} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="card bg-[#ffffff] shadow-lg">
          <div class="card-body">
            <p className="pb-3">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div class="card-actions justify-start items-center">
              <img
                className="w-16 border-solid border-4 border-primary rounded-full"
                src={peopleImg}
                alt=""
              />
              <div>
                <h2>Winson Herry</h2>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-[#ffffff] shadow-lg">
          <div class="card-body">
            <p className="pb-3">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div class="card-actions justify-start items-center">
              <img
                className="w-16 border-solid border-4 border-primary rounded-full"
                src={peopleImg}
                alt=""
              />
              <div>
                <h2>Winson Herry</h2>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-[#ffffff] shadow-lg">
          <div class="card-body">
            <p className="pb-3">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div class="card-actions justify-start items-center">
              <img
                className="w-16 border-solid border-4 border-primary rounded-full"
                src={peopleImg}
                alt=""
              />
              <div>
                <h2>Winson Herry</h2>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
