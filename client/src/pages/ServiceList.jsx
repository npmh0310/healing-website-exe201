import React, { useEffect, useState } from "react";
import PageWrapper from "../components/common/PageWrapper";
import { getWorkshop } from "../fetchData/workshop";
import { Link, useNavigate } from "react-router-dom";

const ServiceList = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/servicedetail/${id}`);
  };
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

  function getFormattedTime(dateString) {
    // Tạo Date object từ chuỗi Date
    const date = new Date(dateString);

    // Format time to "12:00"
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    return formattedTime;
  }
  return (
    <PageWrapper>
      <div className="px-[129px] py-[74px] ">
        <div className="my-8">
          {" "}
          <h1 className="text-center my-10 text-5xl italic font-extrabold font-primary text-four">
            WORKSHOP LIST
          </h1>
          <h1 className=" font-secondary font-medium text-gray-600 mb-12 ml-32">
            <Link to={"/"}> Greenteenage</Link> {`> Workshop List`}
          </h1>
          <div className="flex flex-col my-5 gap-y-10">
            {productList.map((product, index) => (
              <div
                className="  flex flex-row border border-gray-200 gap-x-10 rounded-md mx-32 hover:shadow-lg  transition-transform duration-300 transform group-hover:scale-105 fea-item cursor-pointer border-r-8 border-r-four"
                onClick={() => handleClick(product._id)}
                key={index}
              >
                <div className="w-1/3">
                  <img
                    className="object-cover h-full rounded-tl-md rounded-bl-md "
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="w-1/2 mx-3 my-7 flex flex-col justify-center">
                  <h1 className="block text-3xl uppercase font-semibold  text-four">
                    {product.name}
                  </h1>
                  <div className="flex flex-col mt-4 gap-y-3">
                    <span className="">
                      Price:{" "}
                      <span className="font-medium text-">
                        {product.price} VND
                      </span>
                    </span>

                    <span>
                      Date:{" "}
                      <span className="font-medium">
                        {formatDate(product.openDate)}
                      </span>{" "}
                      from{" "}
                      <span className="font-medium">
                        {getFormattedTime(product.timeStart)}
                      </span>{" "}
                      to{" "}
                      <span className="font-medium">
                        {" "}
                        {getFormattedTime(product.timeEnd)}{" "}
                      </span>
                    </span>
                    <span>
                      Speaker:
                      <span className=" font-medium "> Nguyen Thi Trieu</span>
                    </span>
                    <span className="">Location: {product.location} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServiceList;
