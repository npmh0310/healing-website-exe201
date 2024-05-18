import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./GlobalLoading.css";
import { TfiPulse } from "react-icons/tfi";

const GlobalLoading = () => {
  const { globalLoading } = useSelector((state) => state.globalLoading);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [globalLoading]);

  return (
    <>
      <div
        style={{
          display: isLoading ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          zIndex: 999,
        }}
      >
        <span className="relative flex justify-center items-center text-primary loading">
        
          <TfiPulse className="logo" size={150} />
        </span>
      </div>
    </>
  );
};

export default GlobalLoading;
