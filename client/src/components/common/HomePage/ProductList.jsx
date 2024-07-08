import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "./Product";

function ProductList() {
  const [courseFreeData, setCourseFreeData] = useState([]);
  const [courseProData, setCourseProData] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 1400, once: true });
  }, []);
  return (
    <section className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          <div className="text-center uppercase mt-7 mb-4">
            <h1 className=" title text-four text-6xl font-logoTitle mb-10"      data-aos="fade-up"
          data-aos-delay="100">
              Mental Health Care Services
            </h1>
            <p className="font-medium text-[14px] lg:text-base "  data-aos="fade-up"
          data-aos-delay="200">
              Exploring Therapeutic Modalities and Support Services for Mental
              Health
            </p>
          </div>
          <div className="mb-12">
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
