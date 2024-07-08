import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageWrapper from "./../components/common/PageWrapper";
import { getWorkshopById } from "../fetchData/workshop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendar,
  faClock,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/features.jpg";
import Button from "./../../node_modules/@mui/material/Button/Button";
import { Box, Modal } from "@mui/material";
import ModalBuy from "../components/common/ServiceDetail/ModalBuy";
import Skeleton from "@mui/material/Skeleton";

const ServiceDetail = () => {
  const { id } = useParams(); // Get the id from the URL params
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getWorkshopById(id)
      .then((response) => {
        setServiceData(response.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => console.error("Error fetching service data:", error));
  }, [id]);

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
    const date = new Date(dateString);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return formattedTime;
  }

  const remainingTickets =
    serviceData && serviceData.ticketQuantity
      ? parseInt(serviceData.ticketQuantity) -
        parseInt(serviceData.ticketSellQuantity)
      : 0;

  return (
    <PageWrapper>
      <div className="px-[129px] py-[74px] bg-slate-100">
        {loading ? (
          <div className="my-8">
            <Skeleton variant="text" width="40%" height={60} />
            <Skeleton variant="rectangular" width="100%" height={420} />
            <Skeleton variant="text" width="60%" height={24} />
            <Skeleton variant="text" width="80%" height={16} />
            <Skeleton variant="text" width="70%" height={16} />
            <Skeleton variant="text" width="60%" height={16} />
            <Skeleton variant="text" width="50%" height={16} />
            <Skeleton variant="text" width="40%" height={16} />
            <Skeleton variant="text" width="30%" height={16} />
            <Skeleton variant="text" width="20%" height={16} />
          </div>
        ) : (
          <div className="my-8">
            <h1 className="text-center my-10 text-5xl italic font-extrabold font-primary text-four">
              VIEW WORKSHOP DETAIL
            </h1>
            <h1 className=" font-secondary font-medium text-gray-600 mb-5 ml-4">
              <Link to={"/"}> Greenteenage</Link> {`> ${serviceData.name}`}{" "}
            </h1>
            <div
              style={{
                boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)",
              }}
              className="bg-[#f683ac] rounded-3xl flex gap-x-5 "
            >
              <div className="w-2/3 rounded-md px-3 py-10">
                <img
                  className="object-cover px-4  w-full h-[420px] "
                  src={serviceData.image}
                  alt=""
                />
              </div>
              <div className="w-1/2 border-l-4 border-dashed py-10 relative flex flex-col justify-between">
                {/* hinh tron */}
                <div
                  className="w-16 h-16 rounded-full bg-gray-100 absolute top-0 left-0"
                  style={{
                    transform: "translate(-2.125rem, -1.875rem)",
                  }}
                ></div>
                <div
                  className="w-16 h-16 rounded-full bg-gray-100 absolute bottom-0 left-0"
                  style={{
                    transform: "translate(-2.125rem, 1.875rem)",
                  }}
                ></div>
                {/* hinh tron */}
                <div className="container px-10 flex flex-col gap-y-5">
                  <h1 className="text-[28px] uppercase mt-2 text-center font-logoTitle font-semibold  text-[#fff] ">
                    {serviceData.name}
                  </h1>
                  <div className="flex flex-row gap-x-6 items-start text-[#38383d] ">
                    <FontAwesomeIcon className=" text-xl" icon={faCalendar} />
                    <span className="font-secondary text-sm text-[#00375C] font-medium ">
                      {" "}
                      {formatDate(serviceData.openDate)}
                    </span>
                  </div>
                  <div className="flex flex-row gap-x-6 items-start text-[#38383d] ">
                    <FontAwesomeIcon className=" text-xl" icon={faClock} />
                    <span className="font-secondary text-sm text-[#00375C] font-medium ">
                      {getFormattedTime(serviceData.timeStart)} to{" "}
                      {getFormattedTime(serviceData.timeEnd)}
                    </span>
                  </div>
                  <div className="flex flex-row gap-x-7 items-start text-[#38383d]">
                    <FontAwesomeIcon
                      className=" text-xl"
                      icon={faLocationDot}
                    />
                    <span className="font-secondary text-sm  text-[#00375C] font-medium ">
                      {serviceData.location}
                    </span>
                  </div>
                  <div className="flex flex-row gap-x-5 items-start text-[#38383d] ">
                    <FontAwesomeIcon
                      className=" text-xl"
                      icon={faAddressCard}
                    />
                    <span className="font-secondary text-sm  text-[#00375C] font-medium ">
                      Nguyen Thi Trieu
                    </span>
                  </div>
                  <div className="flex flex-row gap-x-5 items-start text-[#38383d] ">
                    <FontAwesomeIcon className=" text-xl" icon={faPaperPlane} />
                    <span className="font-secondary text-sm  text-[#00375C] font-medium ">
                      {remainingTickets}/{serviceData.ticketQuantity} tickets
                    </span>
                  </div>
                </div>
                <div className=" mx-10 px-3 pt-4 border-t-2 flex flex-col gap-y-3">
                  <div>
                    <span className="text-white text-lg mr-2 font-secondary font-semibold">
                      From{" "}
                    </span>
                    <span className="text-[#00375C] text-lg font-secondary font-semibold">
                      {serviceData.price} VND
                    </span>
                  </div>
                  <div>
                    <button
                      className="w-full py-3 bg-four text-sm rounded-3xl"
                      onClick={handleOpen}
                    >
                      Buy now
                    </button>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <ModalBuy
                          serviceData={serviceData}
                          handleClose={handleClose}
                        />
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row my-10 gap-x-8">
              <div className="container px-7 py-6 rounded-md border bg-white">
                <div className="py-3 border-b-[1px] mb-4 ">
                  <h1 className="font-medium text-lg">About</h1>
                </div>
                <div className="flex flex-col gap-y-3">
                  <h1 className="font-medium">{serviceData.name}</h1>
                  <span className="font-medium">
                    Price: {serviceData.price} VND
                  </span>
                  <span>{serviceData.description}</span>
                  <span>
                    Date:{" "}
                    <span className="font-medium">
                      {formatDate(serviceData.openDate)}
                    </span>{" "}
                    from{" "}
                    <span className="font-medium">
                      {getFormattedTime(serviceData.timeStart)}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                      {" "}
                      {getFormattedTime(serviceData.timeEnd)}{" "}
                    </span>
                  </span>
                  <span className="mb-4">
                    Location: {serviceData.location}{" "}
                  </span>
                  <div className="flex flex-col gap-y-3 text-sm pt-5 border-t-[1px]">
                    <span>
                      We eagerly anticipate your presence at this special event.
                      Your participation will add vibrant energy to the workshop
                      and provide an opportunity to unwind, create, and connect
                      with others in a joyful and relaxed environment.
                    </span>
                    <span>
                      We look forward to sharing this creative journey with you
                      and can’t wait to see the amazing work you'll create.
                    </span>
                    <span>Join us and make lasting memories!</span>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <img className="rounded-md" src={img} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default ServiceDetail;
