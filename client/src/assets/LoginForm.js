    import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signInData } from "../../data/loginData";
import IconGoolge from '../../assets/svgicon/icons8-google.svg';
import IconFacebook from '../../assets/svgicon/icons8-facebook.svg';
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/authContext";
import { BASE_URL } from "../../utils/config";

function LoginForm() {
    const { name, subtitle, userName, password, buttonLogin } = signInData

    const [show, setShow] = useState(false)
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };
    const handleClick = async e => {
        e.preventDefault()

        dispatch({ type: 'LOGIN_START' })

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(credentials)
            })

            const result = await res.json()
            if (!res.ok) {
                alert(result.message);
                return;
            }

            dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
            navigate('/')

        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error.message })
        }

        // console.log(credentials)
    }


    return <div className="signin-form w-[524px]  px-12 py-14 mx-auto  bg-white rounded-lg ">
        <div className="mb-5">
            <h1 className=" mb-8 text-5xl text-primary  font-logoTitle" id="typing-animation">{name}</h1>

        </div>
        <form action="" className="space-y-3 md:space-y-4" onSubmit={handleClick}>
            <div className="mb-5">
                <div className="flex flex-row items-center justify-between  mb-3"><label className="block  font-medium text-gray-900 " htmlFor="">{userName.name}</label>
                    <div className="flex items-center text-[13px] gap-x-2">
                        <p >{subtitle}</p>
                        <Link className="text-[13px]  text-primary font-medium" to="/signup">Sign up</Link>
                    </div>
                </div>
                <input className="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus hover:bg-slate-200:border-primary-600 block w-full p-2.5"
                    name="username"
                    type="text"
                    placeholder={userName.placeholder}
                    id='username'
                    onChange={handleChange} />
            </div>
            <div>
                <div className="flex flex-row items-center justify-between mb-3" >
                    <label for="password" class="block  font-medium text-gray-900 ">{password.name}</label>
                    <span onClick={() => setShow(!show)} className="text-[13px]">{show ? <FontAwesomeIcon icon={faEyeSlash} className="mr-1" />
                        : <FontAwesomeIcon icon={faEye} className="mr-1" />}
                        {show ? "Hiden" : "Show"}
                    </span>

                </div>
                <input type={`${show ? 'text' : 'password'}`}
                    name="password"
                    placeholder={password.placeholder}
                    id='password'
                    onChange={handleChange}
                    class="bg-gray-50 border h-12 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
            </div>
            <div className="flex flex-row justify-between items-center h-6">
                <hr className="w-[50%]"></hr>
                <p className="m-5 text-gray-400">or</p>
                <hr className="w-[50%]"></hr>

            </div>
            <div className="flex flex-col justify-center w-full gap-y-3 xl:flex-col items-center xl:gap-x-4">

                <button className="text-center border border-gray-300   w-full py-3 px-3 rounded-full hover:bg-slate-200 flex justify-center items-center">
                    <img src={IconGoolge} className="w-6 mx-2" alt="" />
                    <p className="text-[13px]"> Sign in with Google</p>
                </button>

                <button className="text-center border border-gray-300 w-full py-3 px-3 rounded-full hover:bg-slate-200 flex justify-center items-center">
                    <img src={IconFacebook} className="w-6 mx-2" alt="" />
                    <p className="text-[13px]"> Sign in with Facebook</p>
                </button>


            </div>
            <div className="flex items-center justify-between h-[40px]">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-start h-4">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <div className="button-login text-center ">
                <button className="btnLogin border hover:bg-[#03ecbe] text-white bg-primary transition  transform hover:scale-105 ]" onClick={handleClick}>{buttonLogin}</button>
            </div>
        </form >
    </div >;
}

export default LoginForm;
