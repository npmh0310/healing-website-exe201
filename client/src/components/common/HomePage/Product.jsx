import React, { useEffect, useState } from "react";
import { getWorkshop } from "../../../fetchData/workshop";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Navigation, Pagination } from "swiper";

import ButtonCustom from "../ButtonCustom";
import "../../../slider.css";
function Product() {
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    getWorkshop().then((res) => setProductList(res.data.data));
  }, []);


  return (
    <div className="flex flex-col ">
      <div className="text-center uppercase my-7">
        <h1 className=" title text-primary">Mental Health Care Services</h1>
        <p className="font-medium text-[14px] lg:text-base ">
          Exploring Therapeutic Modalities and Support Services for Mental
          Health
        </p>
      </div>

      <div className="grid justify-items-center grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-3 ">
        {productList?.map((workshop, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer flex flex-col border fea-item border-gray-300 rounded-2xl w-[90%] course-item hover:shadow-lg"
            >
              <div className="rounded-t-lg ">
                <img
                  class="object-cover rounded-t-lg w-full h-[200px]"
                  src={workshop.image}
                  alt=""
                />
              </div>
              <div className="p-5">
                <h1 className="text-primary mb-3 text-lg font-semibold">
                  {workshop.name}
                </h1>
                <div className="text-gray-700 mb-3 flex gap-x-2">
                  <div className="font-bold">Date: </div>{" "}
                  {new Date(workshop.openDate).toDateString()}
                </div>
                <div className="text-gray-700 mb-3 flex gap-x-2">
                  <div className="font-bold">Time: </div>{" "}
                  {new Date(workshop.timeStart).toLocaleTimeString()} -{" "}
                  {new Date(workshop.timeEnd).toLocaleTimeString()}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2">
                    <div>Số lượng vé:</div>
                    <div className="text-[#37cf41]">
                      {workshop.ticketQuantity - workshop.ticketSellQuantity}/
                      {workshop.ticketQuantity}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Product;
