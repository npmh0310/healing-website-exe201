import React from "react";
import Logo from "../Logo";
import { TfiPulse } from "react-icons/tfi";
import { Link } from "react-router-dom";
import bgImg from "../../../assets/images/64c101129d23396724b5b046_hand-atf-p-2600.jpg";
const Hero = () => {
  return (
    <section
      className="lg:bg-center h-[100vh] flex"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container m-auto">
        <div className="flex items-center flex-col lg:flex-row md:mt-[280px] lg:gap-x-[60px]">
          <div className="flex flex-col items-center flex-1 mt-8 lg:min-w-[620px] text-center lg:text-left order-1 lg:-order-1">
            <h1 className="font-secondary text-primary  font-extrabold text-[36px] lg:text-[58px] lg:leading-tight lg:max-w-[855px] ">
              The art of the soul
            </h1>
            <h1 className=" font-secondary font-extrabold text-[30px] lg:text-[48px] lg:leading-tight lg:max-w-[855px] uppercase  text-second">
              Greenteenage
            </h1>
            <h2 className="my-[20px] text-lg text-second">
              {" "}
              Nourish Your Soul: Embrace Art's Healing Power, Relieve Stress,
              and Rediscover Inner Harmony
            </h2>
            <Link to={"/workshop-detail"}>
              <button className="bg-four hover:bg-[#4c9ec3] px-[56px] py-[12px] mt-[10px] hover:transform-[scale3d(1.05,1.05,1.05)] text-lg font-[poppins] font-medium uppercase text-white rounded-[32px]  backdrop-blur-md transition  transform hover:scale-105">
                Show detail
              </button>
            </Link>
          </div>
          <div className="flex-1  flex md:hidden justify-center items-center ">
            <span className="relative flex justify-center items-center text-primary">
              <span className="absolute w-60 h-60 rounded-full border-2 bg-primary opacity-20 border-primary"></span>
              <TfiPulse size={300} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
