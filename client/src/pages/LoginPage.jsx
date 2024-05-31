import React, { useEffect, useState } from "react";

import "../components/common/Login/login.css";
import LoginForm from "../components/common/Login/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import { useSelector } from "react-redux";
function LoginPage() {
  const navigate = useNavigate()
  const isLogin = useSelector((state) => state.isLogin)
  if (isLogin) {
    navigate('/')
  }
  const [displayText, setDisplayText] = useState("");
  const name =
    '"Healing Minds: Embark on a Transformative Journey to Inner Peace with Greenteenage"';

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < name.length) {
          i++;
          setDisplayText((prevText) => prevText + name.charAt(i - 1));
        } else {
          clearInterval(typingEffect);
        }
      }, 100);

      return () => clearInterval(typingEffect);
    }, 900); // Chờ 3 giây trước khi bắt đầu hiệu ứng ghi ra từng chữ

    return () => clearTimeout(timer); // Xóa timer nếu component unmount
  }, [name]);

  return (
    <div className="w-full m-auto bg-white relative">
      <div className="container-login flex flex-row">
        <div className=" relative lg:flex justify-center hidden items-center flex-1">
          {/* <img className="w-[100%] blur-[10px]" src={ImgLogin} alt="" /> */}
          <div className="image-container mb-[56px] w-[548px] text-four">
            <p className="text-2xl font-medium min-h-8">{displayText}</p>
            <div>
              <span className="font-semibold uppercase text-five font-logoTitle text-3xl ">
                - Green
              </span>
              <span className="font-semibold uppercase text-four font-logoTitle text-3xl ">
                TeenAge -
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-1 flex-col items-center justify-center ">
          <LoginForm />
        </div>
      </div>
      <div className="absolute top-6 left-10">
        <Link className="flex flex-row items-center gap-x-2" to="/">
          <Logo size={30} />
          <div>
            <span className="font-semibold uppercase text-five font-logoTitle text-xl ">
              Green
            </span>
            <span className="font-semibold uppercase text-four  font-logoTitle text-xl ">
              TeenAge
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
