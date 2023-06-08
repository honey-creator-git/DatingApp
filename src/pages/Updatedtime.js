import React from "react";
import { Link } from "react-router-dom";
import Sidebarnav from "../Components/Sidebarnav";

const Updatedtime = () => {
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
              <h2 className="text-[25px] font-bold pt-3 text-center font-bold">
                CUSTOM REQUEST
              </h2>
              <div className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] p-3 mt-5">
                <p className="text-[20px] text-white text-center">
                  FIRST AVAILABLE
                </p>
              </div>
              <div className="bg-white py-2 mt-5 border rounded">
                <p className="text-[20px] text-center">Wed 05/02</p>
              </div>
              <div className="w-[40%] mx-auto">
                <div className="flex justify-between mt-3 items-center">
                  <p className="text-[20px] ">12:00 AM</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 mt-1 border-gray-300 "
                  />
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <p className="text-[20px] ">12:30 AM</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 mt-1 border-gray-300 "
                  />
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <p className="text-[20px] ">01:00 AM</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 mt-1 border-gray-300 "
                  />
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <p className="text-[20px] ">01:30 AM</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 mt-1 border-gray-300 "
                  />
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <p className="text-[20px] ">02:00 AM</p>
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 mt-1 border-gray-300 "
                  />
                </div>
              </div>
              <div className="mt-5 mx-auto ">
                <Link
                  to="/Sugar2"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[240px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Submit
                </Link>
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

export default Updatedtime;
