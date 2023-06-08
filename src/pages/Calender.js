import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Calender = () => {
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
              <h2 className="text-[20px] font-bold pt-3">Calendar 2023</h2>
              <div className="flex justify-between">
                <h2 className="text-[18px] font-bold pt-3">March</h2>
                <h2 className="text-[18px] pt-3">April</h2>
                <h2 className="text-[18px] pt-3">May</h2>
                <h2 className="text-[18px] pt-3">June</h2>
              </div>
              <div className="flex justify-between mt-5 items-center shadow p-2">
                <div className="flex items-center gap-5">
                  <div>
                    {" "}
                    <img src="images/Group 1084.svg" alt />
                  </div>
                  <div>
                    <p className="text-center text-[16px] font-bold">Gracy</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-[16px]">10:30 - 11:30 AM</h2>
                </div>
              </div>
              <div className="flex justify-between mt-5 items-center shadow p-2">
                <div className="flex items-center gap-5">
                  <div>
                    {" "}
                    <img src="images/Group 1085.svg" alt />
                  </div>
                  <div>
                    <p className="text-center text-[16px] font-bold">Laura</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-[16px]">$10:00 - 11:00 PM</h2>
                </div>
              </div>
              <div className="flex justify-between mt-5 items-center shadow p-2">
                <div className="flex items-center gap-5">
                  <div>
                    {" "}
                    <img src="images/Group 1086.svg" alt />
                  </div>
                  <div>
                    <p className="text-center text-[16px] font-bold">Robort</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-[16px]">05:30 - 06:30 PM</h2>
                </div>
              </div>
              <img
                src="images/arrow-down-sign-to-navigateB 11.svg"
                className="mx-auto py-3"
                alt
              />
              <div className="flex items-center mt-4 w-[90%] mx-auto">
                <input
                  id="default-radio-1"
                  type="radio"
                  defaultValue
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Real time photo required at the time of request
                </label>
              </div>
              <div className="mt-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[240px] text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Request Appointment
                </button>
              </div>
              <p className="text-center text-[18px] pt-5">
                The ChainPass member requires a $25 deposite at the time of
                confirmation.
              </p>
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

export default Calender;
