import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentPage from "../../PaymentPage/PaymentPage";
import { Link } from "react-router-dom";
import "../SingleWorkShopPage/SingleWorkShopPage.css";

const SingleWorkShopPage = ({
  chosenWorkshopId,
  handleGetAllWorkshop,
  setIsOpenSingleWorkshop,
}) => {
  const { workshops, isLoading } = useSelector((state) => state.workshops);

  const [chosenWorkshop, setChosenWorkshop] = useState(
    workshops[
      workshops.findIndex((workshop) => workshop._id == chosenWorkshopId)
    ]
  );

  // const dispatch = useDispatch();

  const [isOpenPaymentPage, setIsOpenPaymentPage] = useState(false);

  return (
    <div className="h-full mx-auto px-4 select-none">
      {isOpenPaymentPage && (
        <div className="payment-overlay">
          <PaymentPage chosenWorkshopId={chosenWorkshopId} />
        </div>
      )}
      <div className="bg-white shadow-md rounded-lg p-10">
        <div className="flex gap-x-10">
          <img
            // src={chosenWorkshop.image}
            src={chosenWorkshop.image}
            alt={chosenWorkshop.name}
            className="object-cover w-[55%] rounded-lg shadow-md"
          />
          <div className="ml-6 flex-col">
            <h1 className="text-4xl font-bold mb-5 text-primary">
              {chosenWorkshop.name}
            </h1>
            <div className="text-gray-700 mb-5 flex gap-x-2">
              {chosenWorkshop.description}
            </div>
            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold">Date: </div>{" "}
              {new Date(chosenWorkshop.openDate).toDateString()}
            </div>
            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold">Time: </div>{" "}
              {new Date(chosenWorkshop.timeStart).toLocaleTimeString()} -{" "}
              {new Date(chosenWorkshop.timeEnd).toLocaleTimeString()}
            </div>
            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold">Location: </div>{" "}
              {chosenWorkshop.location}
            </div>

            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold">Speaker: </div>{" "}
              {/* {chosenWorkshop.location} */}
              Decao
            </div>

            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold">Ticket Avalible: </div>
              <div className="text-[#37cf41]">
                {chosenWorkshop.ticketQuantity -
                  chosenWorkshop.ticketSellQuantity}
                /{chosenWorkshop.ticketQuantity}
              </div>
            </div>

            <div className="text-gray-700 mb-8 flex gap-x-2">
              <div className="font-bold">Price: </div>{" "}
              <div className="line-through">${chosenWorkshop.price}</div>
              <div className="text-[#f77e47]">
                $
                {chosenWorkshop.price -
                  (chosenWorkshop.price * chosenWorkshop.ticketSale) / 100}
              </div>
            </div>

            <button
              onClick={() => setIsOpenPaymentPage(true)}
              className="bg-primary text-white font-bold py-4 px-6 rounded hover:bg-blue-400"
            >
              Buy Ticket Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkShopPage;
