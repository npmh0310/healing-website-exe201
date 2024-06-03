import React, { useEffect, useState } from "react";

import Product from "./Product";

function ProductList() {
  const [courseFreeData, setCourseFreeData] = useState([]);
  const [courseProData, setCourseProData] = useState([]);

  return (
    <section className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          <div className="text-center uppercase mt-7 mb-4">
            <h1 className=" title text-four text-6xl font-logoTitle mb-10">
              Mental Health Care Services
            </h1>
            <p className="font-medium text-[14px] lg:text-base ">
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
