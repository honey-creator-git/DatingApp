import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Datestart = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 py-5">
              <div className="bg-gradient-to-r from-[#01195C] to-[#073FE1] p-5">
                <div className="flex justify-between gap-3 items-center">
                  <div>
                    <img src="images/Ellipse 20.svg" alt />
                  </div>
                  <div className=" ">
                    <h2 className="text-[35px] font-bold text-white">SUGAR</h2>
                    <p className="text-[10px] text-white">
                      ChainPass ID 5SES1688
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-[22px] font-bold py-3 text-center">
                $25 DOLLAR DEPOSIT REQUIRED
              </h2>
              <h3 className="text-[22px] font-bold py-3 text-center">
                Date Location
              </h3>
              {/* <div className="flex justify-between w-[60%] mx-auto">
                <div className="border-r-4 pr-5 border-[#000]">
                  <a href className="text-[20px] font-bold py-3 text-center">
                    Her Place
                  </a>
                </div>
                <div>
                  <a href className="text-[20px] font-bold py-3 text-center">
                    His Place
                  </a>
                </div>
              </div> */}
              <div className=" flex justify-center gap-5">
                <div className="flex items-center ">
                  <input
                    id="radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="radio-3"
                    className="ml-3 text-md font-medium text-gray-900 "
                  >
                    Her Place
                  </label>
                </div>
                <div>
                  <img src="/images/Vector 48.svg"></img>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-2"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label
                    htmlFor="radio-4"
                    className="ml-3 text-md font-medium text-gray-900 "
                  >
                    His Place
                  </label>
                </div>
              </div>
              <div className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] p-5 my-6 text-center">
                <p className="text-white text-[20px]">
                  5187 BEAVERDAM RD <br />
                  ROCK ISLAND NJ 48576
                </p>
              </div>
              <div className="mt-6 mx-auto ">
                <Link
                  to="/Duration"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Select Time
                </Link>
              </div>
              <div className="flex justify-between w-[40%] mx-auto py-4">
                <div>
                  <img src="images/chatB.svg" alt />
                </div>
                <div>
                  <img src="images/telephoneB.svg" alt />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto pt-6 pb-4">
            <img src="images/Group.svg" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datestart;
