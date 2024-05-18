import React from "react";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading/GlobalLoading";

const OtherLayout = () => {
  return (
    <div className="bg-white">
      <div className="w-full  mx-auto bg-white">
        {/* global loading */}
        <GlobalLoading />
        {/* global loading */}
        {/* Main */}
        <div className="pt-[86px]">
          {" "}
          <Outlet />
        </div>
        {/* Main */}
      </div>
    </div>
  );
};

export default OtherLayout;
