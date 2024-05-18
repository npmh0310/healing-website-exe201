import React from "react";
import { TfiPulse } from "react-icons/tfi";
const Logo = ({size}) => {
  return (
    <div className="flex w-[100%] justify-center items-center ">
      <span className="relative flex justify-center items-center text-primary">
        <span className="absolute w-12 h-12 rounded-full border-2 bg-primary opacity-20 border-primary"></span>
        <TfiPulse size={size} />
      </span>
    </div>
  );
};

export default Logo;
