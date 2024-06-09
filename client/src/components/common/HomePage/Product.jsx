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

  function formatDate(dateString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="flex flex-col ">
      <div className="container mx-auto flex items-center justify-center mt-4">
        <div className="container mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            className="productSlider "
          >
            {productList?.map((data, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer flex flex-col  fea-item  rounded-2xl w-[70%] course-item "
                >
                  <div
                    className="h-[450px] w-full relative rounded-[32px]"
                    style={{
                      backgroundImage: `url(${data.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "32px",
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white gap-y-5 rounded-[32px]">
                      <h3 className="text-[40px] text-primary font-bold drop-shadow-lg uppercase ">
                        {data.name}
                      </h3>
                      <p className="text-lg text-second">{data.location}</p>
                      <p className="text-2xl font-semibold italic text-primary drop-shadow-lg ">
                        {formatDate(data.openDate)}
                      </p>
                      <ButtonCustom link="/servicedetail" id={data._id}/>
                    </div>
                    <div className="absolute top-4 right-8 px-5 py-2 rounded-2xl bg-[#33c2cc] text-[16px] font-medium">
                      {data.price} VND
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Product;
