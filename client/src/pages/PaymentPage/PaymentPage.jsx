import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/features/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast từ react-toastify
import { IoClose } from "react-icons/io5";

const PaymentPage = ({ chosenWorkshopId, setIsOpenPaymentPage }) => {
  //Có thể xài useState hoặc useForm
  const { workshops, isLoading } = useSelector((state) => state.workshops);

  const [chosenWorkshop, setChosenWorkshop] = useState(
    workshops[
      workshops.findIndex((workshop) => workshop._id == chosenWorkshopId)
    ]
  );

  const [buyerName, setBuyerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buyerProblem, setBuyerProblem] = useState("");

  // const dispatch = useDispatch();

  // const handleSubmit = () => {
  //   console.log("Buying ticket", {
  //     name: buyerName,
  //     phone: phoneNumber,
  //     ticketQuantity: ticketQuantity,
  //     paymentMethod: paymentMethod,
  //     totalPrice: totalPrice,
  //   });

  //   alert("Thông tin đơn hàng đã được gửi đi");
  // };

  const dispatch = useDispatch();

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async () => {
    if (!buyerName.trim()) {
      toast.error("Vui lòng nhập tên");
      return;
    }

    if (!phoneNumber.trim()) {
      toast.error("Vui lòng nhập số điện thoại");
      return;
    }

    if (ticketQuantity == 0) {
      toast.error("Vui lòng nhập số lượng vé");
      return;
    }

    if (!paymentMethod.trim()) {
      toast.error("Vui lòng chọn phương thức thanh toán");
      return;
    }

    const orderData = {
      buyerName,
      phoneNumber,
      ticketQuantity,
      paymentMethod,
      totalPrice,
      buyerProblem,
      workshopId: chosenWorkshopId,
    };

    const result = await dispatch(createOrder(orderData));
    if (result.type.endsWith("fulfilled")) {
      toast.success(
        "Gửi form mua vé thành công, hãy đợi admin kiểm tra thông tin và gửi vé về mail nhé"
      );
      navigate("/");
    } else if (result?.error?.message === "Rejected") {
      toast.error("Gửi form mua vé thất bại hệ thống đã có lỗi");
      // toast.error(result?.payload, errorStyle);
    }
  };

  useEffect(() => {
    const price = chosenWorkshop.price;
    const discount = chosenWorkshop.ticketSale;
    const finalPrice = discount ? price - (price * discount) / 100 : price;
    setTotalPrice(finalPrice * ticketQuantity);
  }, [ticketQuantity]);

  return (
    <div className="h-full mx-auto px-4 select-none">
      <div className="bg-white shadow-md rounded-lg p-10">
        <IoClose size={35} className="absolute -mt-5 -ml-5 hover:text-red-800 cursor-pointer" onClick={() => setIsOpenPaymentPage(false)}/>
        <div className="flex gap-x-10">
          <div className="px-6 flex-col">
            <h1 className="text-4xl font-bold mb-5 text-primary">
              Mua vé "{chosenWorkshop.name}""
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="buyerName">
                Tên người mua:
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
                Số điện thoại:
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
                htmlFor="buyerProblem"
              >
                Bạn có thể chia sẻ về vấn đề bạn đang gặp phải không:
              </label>
              <textarea
                id="buyerProblem"
                placeholder="Có thể bỏ trống"
                className="w-full p-2 border border-gray-300 rounded"
                value={buyerProblem}
                onChange={(e) => setBuyerProblem(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="ticketQuantity"
              >
                Số lượng vé mua
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
              <div className="font-bold">Số lượng vé còn lại: </div>
              <div className="text-[#37cf41]">
                {chosenWorkshop.ticketQuantity -
                  chosenWorkshop.ticketSellQuantity}
                /{chosenWorkshop.ticketQuantity}
              </div>
            </div>

            <div className="text-gray-700 mb-8 flex gap-x-2">
              <div className="font-bold">Tổng giá trị đơn hàng:</div>{" "}
              {chosenWorkshop.ticketSale === 0 ? (
                <div className="text-[#f77e47]">
                  {chosenWorkshop.price * ticketQuantity} vnd
                </div>
              ) : (
                <div className="flex gap-x-2">
                  <div className="line-through">
                    {chosenWorkshop.price * ticketQuantity} vnd
                  </div>
                  <div className="text-[#f77e47]">
                    {totalPrice}
                    vnd
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4 flex justify-center gap-4">
              <button
                className={`py-2 px-4 rounded ${
                  paymentMethod === "Momo"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() => setPaymentMethod("Momo")}
              >
                Thanh Toán Bằng Momo
              </button>
              <button
                className={`py-2 px-4 rounded ${
                  paymentMethod === "VNpay"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
                onClick={() => setPaymentMethod("VNpay")}
              >
                Thanh Toán Bằng VNpay
              </button>
            </div>
            <div className="flex justify-center">
              {paymentMethod === "Momo" && (
                <div className="flex-col justify-center">
                  <img
                    src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220810110042-637957260425550228.webp"
                    alt="Momo"
                    className="object-cover w-[300px] h-[300px]"
                  />
                  <div className="w-full">
                    Chi tiết: Greenteenage | 0901234567
                  </div>
                </div>
              )}
              {paymentMethod === "VNpay" && (
                <div className="flex-col">
                  <img
                    src="https://kalite.vn/wp-content/uploads/2021/09/maqrkalite.jpg"
                    alt="VNpay"
                    className="object-cover w-[300px] h-[300px]"
                  />
                  <div>Chi tiết: Vietinbank | 0999999999</div>
                </div>
              )}
            </div>

            <div className="text-gray-700 mb-5 flex gap-x-2 mt-2">
              <div className="font-bold">Nội dung thanh toán: </div>
              <div className="text-gray-700">"Họ Và Tên" - "Số Điện Thoại"</div>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                Tôi đã thanh toán và kiểm tra lại toàn bộ thông tin.
              </label>
            </div>
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}
            <button
              className={`w-full py-2 px-4 bg-primary text-white font-bold rounded ${
                isChecked
                  ? "hover:bg-blue-400"
                  : "cursor-not-allowed opacity-50"
              }`}
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

export default PaymentPage;
