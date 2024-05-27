import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import IconGoolge from "../assets/icons8-google.svg";
import IconFacebook from "../assets/icons8-facebook.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { onRegister } from "../fetchData/auth";

function RegisterForm() {
  const signUpData = {

    name: "Sign Up",
    title: "Welcome Back To Brainity",
    subtitle: "Already have an account?",
    userName: {
      name: "User name",
      placeholder: "Enter your user name",
    },
    password: {
      name: "Password",
      placeholder: "••••••••",
    },
    email: {
      name: "Email",
      placeholder: "name@gmail.com",
    },
    notes: [
      "One lowercase character",
      " One uppercase character",
      "   One number",
      "   One special character",
      " 8 characters minimum",
    ],

    otherLogin: [
      {
        name: "Sign in with Google",
        icon: <FontAwesomeIcon icon={faGoogle} />,
      },
      {
        name: "Sign in with Facebook",
        icon: <FontAwesomeIcon icon={faFacebook} />,
      },
    ],
    buttonLogin: "Sign up for free",
    security:
      "By clicking the “Sign up for free” button or using any of the social login options, you are creating an account, and agree to Brain Terms of Service and Privacy Policy",
  };
  const [show, setShow] = useState(false);

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  })

  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault()

    let res = await onRegister(credentials);
    console.log(res && res.status === 200)
    if (res) {
      navigate('/login')
    }
  }

  return (
    <div className="flex w-full  relative bg-white">
      <div>
        <Link to="/login" className="absolute top-10 left-10">
          Back to login
        </Link>
      </div>
      <div className="signin-form w-[524px] my-16 px-12 py-14 mx-auto bg-white rounded-lg border border-gray-200 ">
        <div className="mb-10">
          <h1
            className="text-5xl text-primary  font-logoTitle"
            id="typing-animation"
          >
            Sign Up
          </h1>
        </div>
        <form
          action=""
          className="space-y-6 md:space-y-7"

        >
          <div className="flex flex-col gap-y-7">
            <div className="">
              <div className="flex flex-row items-center justify-between  mb-3">
                <label className="block  font-medium text-gray-900 " htmlFor="">
                  {signUpData.userName.name}
                </label>
                <div className="flex items-center text-[13px] gap-x-2">
                  <p>{signUpData.subtitle}</p>
                  <Link
                    className="text-[13px]  text-primary font-medium"
                    to="/login"
                  >
                    Log in
                  </Link>
                </div>
              </div>
              <input
                className="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus hover:bg-slate-200:border-primary-600 block w-full p-2.5"
                name="username"
                type="text"
                placeholder={signUpData.userName.placeholder}
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <div className="flex flex-row items-center justify-between mb-3">
                <label for="email" class="block  font-medium text-gray-900 ">
                  {signUpData.email.name}
                </label>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder={signUpData.email.placeholder}
                class="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="">
              <div className="flex flex-row items-center justify-between mb-3">
                <label for="password" class="block  font-medium text-gray-900 ">
                  {signUpData.password.name}
                </label>
                <span onClick={() => setShow(!show)} className="text-[13px]">
                  {show ? (
                    <FontAwesomeIcon icon={faEyeSlash} className="mr-1" />
                  ) : (
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                  )}
                  {show ? "Hiden" : "Show"}
                </span>
              </div>
              <input
                type={`${show ? "text" : "password"}`}
                id="password"
                onChange={handleChange}
                name="password"
                placeholder={signUpData.password.placeholder}
                class="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {signUpData.notes.map((note, index) => (
              <li className="list-disc list-inside" key={index}>
                <span>{note}</span>
              </li>
            ))}
          </div>

          <div className="button-login text-center ">
            <button
              className="btnLogin border hover:bg-[#03ecbe] text-white bg-primary transition  transform hover:scale-105 ]"
              onClick={handleClick}
            >
              {signUpData.buttonLogin}
            </button>
          </div>
          <div className="flex flex-row justify-between items-center h-6">
            <hr className="w-[50%]"></hr>
            <p className="m-5 text-gray-400">or</p>
            <hr className="w-[50%]"></hr>
          </div>
          <div className="flex flex-col justify-center w-full gap-y-3 xl:flex-col items-center xl:gap-x-4">
            <button className="text-center border border-gray-300   w-full py-3 px-3 rounded-full hover:bg-slate-200 flex justify-center items-center">
              <img src={IconGoolge} className="w-6 mx-2" alt="" />
              <p className="text-[13px]"> Sign in with Google</p>{" "}
            </button>

            <button className="text-center border border-gray-300 w-full py-3 px-3 rounded-full hover:bg-slate-200 flex justify-center items-center">
              <img src={IconFacebook} className="w-6 mx-2" alt="" />
              <p className="text-[13px]"> Sign in with Facebook</p>{" "}
            </button>
          </div>
          <div className="text-center">
            <span className="text-xs">{signUpData.security}</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
