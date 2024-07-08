import React, { useEffect } from "react";
import {
  HiAcademicCap,
  HiAnnotation,
  HiUserGroup,
  HiBriefcase,
} from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
function Features() {
  
  useEffect(() => {
    AOS.init({ duration: 1400, once: true });
    window.addEventListener("load", AOS.refresh);
  }, []);
  const features = {
    items: [
      {
        icon: <HiAcademicCap />,
        title: "10+",
        subtitle: "Customer",
      },
      {
        icon: <HiAnnotation />,
        title: "Psychologists",
        subtitle: "Support Experts",
      },
      {
        icon: <HiUserGroup />,
        title: "Connect",
        subtitle: "Create a community",
      },
      {
        icon: <HiBriefcase />,
        title: "Quality",
        subtitle: "Healing your soul",
      },
    ],
  };
  return (
    <section className="section text-center bg-gray-50">
      <div className="container mx-auto">
        <div data-aos="fade-up"
          data-aos-delay="100">
          <h1 className="title text-6xl font-logoTitle uppercase text-four mb-6"   >
            Greenteenage
          </h1>
          <p className="max-x-[639px] mx-auto mb-[50px] lg:mb-[50px] text-lg">
            Revitalize Your Spirit: Embrace Art for Inner Peace.
          </p>
        </div>
        <div className="  grid justify-items-center grid-cols-2 gap-x-8 lg:grid-cols-4 lg:gap-[30px]">
          {features.items.map((item, index) => {
            return (
              <div
                className="container flex flex-col justify-center items-center gap-y-2 bg-slate-50 max-w-[292px] h-[220px] m-3 rounded-md shadow-md fea-item "   data-aos="fade-left"
                data-aos-delay={300 + index * 200}
                key={index}
              >
                <div className="title text-6xl">{item.icon}</div>
                <h4 className="font-semibold text-base sm:text-xl text-four">
                  {item.title}
                </h4>
                <p>{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
