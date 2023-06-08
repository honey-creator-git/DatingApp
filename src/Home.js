import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "./Graphql/Queries/Mutations/UserMutation";
import Swal from "sweetalert2";

const Home = () => {
  const [userLogin, { loading }] = useMutation(LOGIN_MUTATION);
  const [formState, setFormState] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });  
  };

  const handleFocus = () => {
    const element = document.getElementById("border-change");
    element.classList.add("input-border-blue");
  };

  const handleBlur = () => {
    const element = document.getElementById("border-change");
    element.classList.remove("input-border-blue");
  }

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");

  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      seteye(false);
    } else {
      setpassword("password");
      seteye(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    })
    .then((res) => {
      Swal.fire("Contracts", "Login into account!", "success");
    })
    .catch((err) => {
      setError(err);
      console.log(err);
      alert(`${err}`);
    });
  };

  return (
    <div className="max-w-[820px] mx-auto">
      <div className="header-container">
        <div className="burger">
          <img src="images/Burger.png" />
        </div>
        <div className="app-logo">
          <img src="images/Logo.png" />
        </div>
      </div>
      <div className="login-input-container">
        <div className="login-text-container">
          <span className="login-txt">Login</span>
          <img src="images/loginAvatar.png" />
        </div>
        
        <div className="input-container">

          <div className="mb-6">
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src="images/inputUserAvatar.png" />
              </span>
              <input
                className="w-full bg-transparent border text-[16px] border-2 border-white rounded py-2 pl-10 pr-4 text-white input-email"
                onChange={handleChange}
                name="email"
                placeholder="Name"
                type="email"
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="relative block">
              <div id="border-change" className="flex flex-col border rounded input-password border-2">
                <div className="input-text flex justify-between  pr-5 rounded-lg items-center gap-4 max-w-[600px] w-full pass">
                  <span className="absolute inset-y-0 left-0  flex items-center pl-3">
                    <img src="images/loginPasswordInput.png" />
                  </span>
                  <input
                    type={password}
                    className="w-full bg-transparent text-[16px] border-0 py-2 pl-10 pr-4 text-white"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <i
                    onClick={Eye}
                    className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </div>
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="md:flex md:items-center">
              <label className="block text-gray-500 font-bold">
                <input className="leading-tight" type="checkbox" />
                <span className="text-sm text-black"> Remember me </span>
              </label>
            </div>
            <Link
              className="inline-block align-baseline font-bold text-sm text-black forgotPassword"
              to="/Forgotpassword"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mx-auto min-w-[240px] login-btn-container">
            <button
              className="btn-login bg-[#05B7FD] text-center bg-opacity-[20%] min-w-[240px] inline-block border border-[#05B7FD] w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline"
              type="Submit"
            >
              Log In
            </button>
          </div>

          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-or">
              <span>OR</span>
            </div>
            <div className="divider-line"></div>
          </div>

          <div className="mx-auto min-w-[240px] login-btn-container">
            <button
              className="btn-login-2 bg-[#05B7FD] text-center bg-opacity-[20%] min-w-[240px] inline-block border border-[#05B7FD] w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline"
              type="Submit"
            >
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
