import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { payment } from "../../../fetchData/workshop";

const ModalBuy = ({ serviceData, handleClose }) => {
  const [buyerName, setBuyerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSubmit = async () => {
    console.log("Buying ticket", {
      name: buyerName,
      phone: phoneNumber,
      ticketQuantity: ticketQuantity,
      paymentMethod: paymentMethod,
      totalPrice: totalPrice,
    });
    const res = await payment()
    if (res) {
      console.log(res.data)
      window.open(res.data.url, "_self")
    }

    // payment()

    // alert("Thông tin đơn hàng đã được gửi đi");
  };

  return (
    <div className="max-h-full mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white">
      <div className="bg-white shadow-md rounded-lg p-10">
        <div className="flex gap-x-10">
          <div className="px-6">
            <h1 className="text-4xl font-bold mb-5 text-center text-four">
              Buy ticket "{serviceData.name}""
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="buyerName">
                Buyer name:
              </label>
              <input
                type="text"
                id="buyerName"
                className="w-full p-2 border border-gray-300 rounded"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                Buyer phone:
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="ticketQuantity"
              >
                Quality tickets
              </label>
              <input
                type="number"
                id="ticketQuantity"
                className="w-full p-2 border border-gray-300 rounded"
                min="1"
                value={ticketQuantity}
                onChange={(e) => setTicketQuantity(e.target.value)}
              />
            </div>

            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold">remaining tickets: </div>
              <div className="text-[#37cf41]">
                {serviceData.ticketQuantity - serviceData.ticketSellQuantity}/
                {serviceData.ticketQuantity}
              </div>
            </div>

            <div className="text-gray-700 mb-8 flex gap-x-2">
              <div className="font-bold">Total order value:</div>{" "}
              {serviceData.ticketSale === 0 ? (
                <div className="text-[#f77e47]">
                  {serviceData.price * ticketQuantity} vnd
                </div>
              ) : (
                <div className="flex gap-x-2">
                  <div className="">
                    {serviceData.price * ticketQuantity} vnd
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4 flex justify-center gap-4">
              <button
                className={`py-2 px-4 rounded ${paymentMethod === "Momo"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-300 text-black"
                  }`}
                onClick={() => setPaymentMethod("Momo")}
              >
                Pay with momo
              </button>
              <button
                className={`py-2 px-4 rounded ${paymentMethod === "VNpay"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-300 text-black"
                  }`}
                onClick={() => setPaymentMethod("VNpay")}
              >
                Pay with VNpay
              </button>
            </div>
            <div className="flex justify-center">
              {paymentMethod === "Momo" && (
                <div className="flex-col justify-center mb-4">
                  <img
                    src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220810110042-637957260425550228.webp"
                    alt="Momo"
                    className="object-cover w-[300px] h-[300px]"
                  />
                  <h1 className="text-center">0905000000 | Greenteenage</h1>
                </div>
              )}
              {paymentMethod === "VNpay" && (
                <div className="flex-col justify-center mb-4">
                  <img
                    src="https://kalite.vn/wp-content/uploads/2021/09/maqrkalite.jpg"
                    alt="VNpay"
                    className="object-cover w-[300px] h-[300px]"
                  />
                  <h1 className="text-center">0905000000 | Greenteenage</h1>
                </div>
              )}
            </div>

            <div className="text-gray-700 mb-5 flex gap-x-2">
              <div className="font-bold"> Content billing: </div>
              <div className="text-gray-700">
                "Your Fullname" - "Your phone"
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                I double-checked the information before paying
              </label>
            </div>
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}
            <button
              className={`w-full py-2 px-4 bg-primary text-white font-bold rounded ${isChecked
                ? "hover:bg-blue-400"
                : "cursor-not-allowed opacity-50"

              onClick={handleSubmit}
              disabled={!isChecked}
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuy;
