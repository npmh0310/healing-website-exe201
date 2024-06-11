import React, { useEffect } from "react";
import features1 from "../../../assets/images/features2.jpg";
import features2 from "../../../assets/images/features3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const SubFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1400, once: true });
    window.addEventListener("load", AOS.refresh);
  }, []);
  return (
    <section className="section ">
      <div className=" container relative px-36 flex mx-auto">
        <div className="w-1/2"         data-aos="fade-right"
            data-aos-delay="100">
          <img className="" src={features1} alt="" />
        </div>
        <div className="absolute flex flex-col gap-y-4 bottom-1 right-14 w-1/2 mx-12" >
          <h1 className="text-[62px] text-primary leading-[62px] font-extrabold"    data-aos="fade-up"
              data-aos-delay="700">
            Hi, we are Greenteenage
          </h1>
          <div className="flex flex-col ml-36 pr-5 gap-y-4">
            <h2 className="text-xl text-start font-secondary font-medium text-four">
              Nurturing Mental Well-being: Embrace Inner Healing
            </h2>
            <span className="text-lg">
              "We are committed to guiding you through the process of emotional
              and psychological healing. Our platform offers extensive
              resources, compassionate support, and expert advice to help you
              navigate and overcome mental health challenges. By fostering a
              nurturing environment, we aim to restore your inner peace,
              balance, and sense of wholeness. Our ultimate goal is to empower
              you to achieve a fulfilling and harmonious life, where you can
              thrive and experience profound well-being"
            </span>
          </div>
        </div>
      </div>
      <div className=" container relative px-36 mt-16 flex mx-auto">
        <div className=" flex flex-col gap-y-4 justify-center w-1/2 mx-12">
          <div className="flex flex-col pr-5 gap-y-4 justify-center">
            <h2 className="text-xl text-start font-secondary font-medium text-four">
              Empowering Your Mental Health Journe
            </h2>
            <span className="text-lg ">
              "Our mission is to provide you with the tools and support needed
              for emotional healing and psychological growth. Through our
              platform, you will find a wealth of resources, expert guidance,
              and a compassionate community dedicated to helping you overcome
              mental health obstacles. We strive to create a safe space for
              personal transformation, fostering inner peace, resilience, and a
              balanced, fulfilling life where you can flourish and achieve
              lasting well-being"
            </span>
          </div>
        </div>
        <div className="w-1/2 mr-0"   data-aos="fade-left"     >
          <img className="" src={features2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SubFeatures;
