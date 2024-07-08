import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import menuConfigs from "../../../configs/menu.configs.js";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CgMenuRight, CgClose } from "react-icons/cg";
import HeaderMobile from "./HeaderMobile.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  userLoginSuccess,
  userLogout,
} from "../../../redux/features/authSlice.js";
// import HeaderUser from "./HeaderUser.jsx";
import axios from "../../../fetchData/axios.js";
import { onLogout } from "../../../fetchData/auth.js";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4000/login/success");
  //       if (res.status === 200) {
  //         dispatch(userLoginSuccess(res.data.user));
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [btnColor, setBtnColor] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  // console.log("check Login", isLogin)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBg(true);
        setBtnColor(true);
      } else {
        setBg(false);
        setBtnColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLogout());
    onLogout();
    navigate("/");
  };
  const isHomePage = location.pathname === "/";
  return (
    <header
      className={`${bg ? "bg-[white] shadow-md shadow-bottom py-4 lg:py-4" : "bg-none"
        }  fixed left-0 w-full py-4 lg:py-4 z-10 transition-all duration-200 ${isHomePage ? "header-hidden" : ""
        }`}
    >
      <div className=" flex items-center justify-around gap-x-32">
        <div className="flex items-center justify-between ">
          <Link className="flex flex-row items-center gap-x-1" to="/">
            <Logo size={30} />
            <div>
              <span
                className={`${isHomePage ? (bg ? "text-five" : "text-third") : "text-five"
                  } font-semibold uppercase font-logoTitle text-2xl `}
              >
                Green
              </span>
              <span
                className={`${isHomePage ? (bg ? "text-four" : "text-primary") : "text-four"
                  } font-semibold uppercase font-logoTitle text-2xl `}
              >
                TeenAge
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-x-32 mr-10 ">
          <nav className="hidden px-10 md:flex">
            <ul className="flex md:gap-x-10">
              {menuConfigs.main.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={`${isHomePage
                          ? bg
                            ? "text-four"
                            : "text-second"
                          : "text-four"
                        }  flex  py-1 mx-4 relative nav-link transition-all font-secondary capitalize`}
                      href={item.path}
                    >
                      {item.display}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-around gap-x-14 ">
          {/* <HeaderUser /> */}
          {isLogin ? (
            <button
              onClick={logout}
              className={`bg-four hover:bg-[#4c9ec3] text-second  px-[50px] py-[7px] my-1 hover:transform-[scale3d(1.05,1.05,1.05)] text-sm font-secondary rounded-full  backdrop-blur-md transition  transform hover:scale-105 hidden md:flex uppercase`}
            >
              {" "}
              Logout{" "}
            </button>
          ) : (
            <Link
              to="/login"
              className={`bg-four hover:bg-[#4c9ec3] text-second  px-[50px] py-[7px] my-1 hover:transform-[scale3d(1.05,1.05,1.05)] text-sm font-secondary rounded-full  backdrop-blur-md transition  transform hover:scale-105 hidden md:flex uppercase`}
            >
              Login
            </Link>
          )}
        </div>

        {/* MOBILE */}
        <div
          className={`${mobileNav ? " top-[64px]" : "bottom-full"
            } md:hidden h-[550px] fixed left-0 w-full max-w-full backdrop-blur-lg bg-white/60 transition-all shadow-lg border-t-[1px] custom-nav-mobile `}
        >
          <HeaderMobile />
        </div>
        {/* MOBILE */}
        {/* menu icon*/}
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="text-2xl bg-gray-500 w-8 h-8 m-1 flex justify-center items-center text-white rounded-full md:hidden lg:text-3xl cursor-pointer"
        >
          {mobileNav ? <CgClose /> : <CgMenuRight />}
        </div>
        {/* menu icon*/}
      </div>
    </header>
  );
};

export default Header;
