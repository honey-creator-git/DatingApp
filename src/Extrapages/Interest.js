import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Interest = () => {
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
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-[20px] font-bold">Sugar, 24 </h2>
                <h2 className="text-[14px] text-[#999696]">4.5 KM</h2>
              </div>
              <div className="flex justify-between items-center mt-1 border-b pb-2">
                <h2 className="text-[14px] text-[#999696]">Hartland, USA</h2>
                <h2 className="text-[14px] text-[#999696]">
                  active 2 hours ago
                </h2>
              </div>
              <div className="mt-3 border-b pb-4">
                <h2 className="text-[20px] font-bold">About me</h2>
                <p className="text-[12px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
              <h2 className="text-[20px] font-bold pt-3">Interest</h2>
              <div className="mt-5 flex justify-between">
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-4 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Movies
                </button>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-4 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Music
                </button>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-4 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Travel
                </button>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-4 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Party
                </button>
              </div>
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

export default Interest;
