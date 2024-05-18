import React, { useEffect, useState } from "react";

import Product from "./Product";

function ProductList() {
  const [courseFreeData, setCourseFreeData] = useState([]);
  const [courseProData, setCourseProData] = useState([]);

  return (
    <section className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          <div className="mb-12">
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
