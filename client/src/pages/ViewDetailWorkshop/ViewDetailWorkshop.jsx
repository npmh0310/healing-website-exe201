import React, { useEffect, useState } from "react";
// import Header from "../../components/common/Header/Header";
import { getAllWorkShops } from "../../redux/features/workshop/workshopSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleWorkShopPage from "./SingleWorkShopPage/SingleWorkShopPage";

const ViewDetailWorkshop = () => {
  const [chosenWorkshopId, setChosenWorkshopId] = useState("");
  const [isOpenSingleWorkshop, setIsOpenSingleWorkshop] = useState(false);
  const { workshops, isLoading } = useSelector((state) => state.workshops);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWorkShops());
  }, []);

  console.log("WS", workshops);

  //Get All
  const handleGetAllWorkshop = () => {
    Promise.all([dispatch(getAllWorkShops())]).catch((error) => {
      console.error("Error during dispatch:", error);
    });
  };

  return (
    <div className="w-full">
      {/* <Header /> */}
      <h1 className="text-center text-3xl font-bold text-primary">
        {isOpenSingleWorkshop ? "View Detail Workshop" : "View All Workshops"}
      </h1>

      <div className="py-10 px-10">
        {isOpenSingleWorkshop && (
          <SingleWorkShopPage
            setIsOpenSingleWorkshop={setIsOpenSingleWorkshop}
            handleGetAllWorkshop={handleGetAllWorkshop}
            chosenWorkshopId={chosenWorkshopId}
          />
        )}
        {!isOpenSingleWorkshop && (
          <div className="grid justify-items-center grid-cols-1 gap-y-10 sm:grid-cols-2  lg:grid-cols-3 ">
            {workshops?.map((workshop, index) => {
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
                          {workshop.ticketQuantity -
                            workshop.ticketSellQuantity}
                          /{workshop.ticketQuantity}
                        </div>
                      </div>
                      <div className="text-gray-500 hover:text-primary">
                        <button
                          onClick={() => {
                            setIsOpenSingleWorkshop(true);
                            setChosenWorkshopId(workshop._id);
                          }}
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDetailWorkshop;
