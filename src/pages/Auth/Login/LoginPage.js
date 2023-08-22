import React, { useState } from "react";
import './login.css'
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formState, setFormState] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  const handleFocus = () => {
    const element = document.getElementById("border-change");
    element.classList.add("input-border-blue");
  }

  const handleBlur = () => {
    const element = document.getElementById("border-change");
    element.classList.add("input-border-blue");
  }

  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState("password");

  const handleShowPassword = () => {
    if(password === "password") {
      setPassword("text");
      setHidden(false);
    } else {
      setPassword("password");
      setHidden(true);
    }
  }

  const handleLogIn = () => {
    navigate('/otp-verification')
  }


  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-img mt-14">
          <img src={process.env.PUBLIC_URL + "/images/loginAvatar.png"} alt="" />
        </div>
      </div>

      <div className="login-title mb-3">
        <span>Login</span>
      </div>

      <div className="login-input-container">
        <div className="w-full mb-6">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={ process.env.PUBLIC_URL + "images/inputUserAvatar.png" } alt="" />
            </span>
            
            <input
              onChange={handleChange}
              className="w-full bg-transparent text-[16px] border-2 border-[#0247FF] py-2 pl-10 pr-4 text-black input-email rounded-2xl"
              name="email"
              placeholder="User Id"
              type="email"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="relative block">
            <div id="border-change" className="flex flex-col border-0">
              <div className="relative input-text flex justify-between items-center gap-4">
                <span className="absolute inset-y-0 left-0  flex items-center pl-3">
                  <img src={ process.env.PUBLIC_URL + "/images/loginPasswordInput.png" } alt="" />
                </span>
                <input
                  type={password}
                  className="w-full bg-transparent text-[16px] border-2 border-[#0247FF] py-2 pl-10 pr-12 text-black input-password rounded-2xl"
                  name="password"
                  placeholder="Enter Password"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <i
                  onClick={handleShowPassword}
                  className={`fa absolute right-5 ${hidden ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </div>
            </div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center">
            <label className="flex justify-center items-center text-gray-500 font-bold">
              <input className="leading-tight mr-1" type="checkbox" />
              <span className="text-sm text-black opacity-40"> Remember me </span>
            </label>
          </div>
          <Link
            className="inline-block align-baseline font-bold text-sm text-black opacity-60"
            to="/reset-password"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="mx-auto mt-7">
          <Link
            className="from-[#05B7FD] to-[#05B7FD] bg-gradient-to-b rounded-full flex flex-col justify-center align-baseline font-extrabold text-[22px] text-black h-[50px] shadow-2xl"
            to="/chain-pass-id"
          >
            <h3 className='align-middle'>
              Sign Up
            </h3>
          </Link>
        </div>

        <div className="divider">
          <div className="divider-line"></div>
            <div className="divider-or"> 
              <span>OR</span>
            </div>
          <div className="divider-line"></div>
        </div>

        <div className="bg-transparent rounded-full mt-2 mb-20">
          <button
            className="text-center from-[#05B7FD] to-[#05B7FD] bg-gradient-to-b rounded-full bg-opacity-[20%] border-0 w-full font-extrabold focus:outline-none focus:shadow-outline h-[50px] text-[22px] text-black shadow-2xl"
            type="Submit"
            onClick={handleLogIn}
          >
            LogIn
          </button>
        </div>
      </div>
    </div>
  )
}
