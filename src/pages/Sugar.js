import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Sugar = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto overflow-hidden">
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
            <div className="flex justify-between gap-5 ">
              <div className="mt-10 w-[48%]">
                <Link
                  to="/Aboutme"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-2 justify-center flex items-center text-center border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-2">
                    <img src="images/contacts (1)C 1.svg" alt />
                  </span>{" "}
                  About Me
                </Link>
              </div>
              <div className="mt-10 w-[48%]">
                <Link
                  to="/Gallary"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-8 justify-center flex items-center  border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-2">
                    <img src="images/gallery (2)C 1.svg" alt />
                  </span>{" "}
                  Gallery
                </Link>
              </div>
            </div>
            <div className="flex justify-between gap-5 ">
              <div className="mt-5 w-[48%]">
                <Link
                  to="/History"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-8 justify-center flex items-center text-center border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-2">
                    <img src="images/social-mediaC 3.svg" alt />
                  </span>{" "}
                  History
                </Link>
              </div>
              <div className="mt-5 w-[48%]">
                <Link
                  to="/Rates"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-8 justify-center flex items-center  border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-2">
                    <img src="images/starC 1.svg" alt />
                  </span>{" "}
                  Rates
                </Link>
              </div>
            </div>
            <div className="flex justify-between gap-5 ">
              <div className="mt-5 w-[48%]">
                <Link
                  to="/Calender"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-8 justify-center flex items-center text-center border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-2">
                    <img src="images/calendarC 1.svg" alt />
                  </span>{" "}
                  Calendar
                </Link>
              </div>
              <div className="mt-5 w-[48%]">
                <Link
                  to="/Findme"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-8 justify-center flex items-center  border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-2">
                    <img src="images/find-my-friendB 1.svg" alt />
                  </span>{" "}
                  Find Me
                </Link>
              </div>
            </div>
            <div className="flex justify-between gap-5 ">
              <div className="mt-5 w-[48%]">
                <a
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-2 justify-center flex items-center text-center border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-1">
                    <img src="images/peer-to-peerB 1.svg" alt />
                  </span>
                  P2P Wallet
                </a>
              </div>
              <div className="mt-5 w-[48%]">
                <Link
                  to="/Contact"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[160px] px-2 justify-center flex items-center  border border-[#05B7FD] rounded-full text-white font-bold py-2 "
                  type="a"
                >
                  <span className="pr-1">
                    <img src="images/headset-C 1.svg" alt />
                  </span>{" "}
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center my-4 w-[90%] mx-auto">
              <input
                id="default-radio-1"
                type="radio"
                defaultValue
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm text-gray-900 dark:text-gray-300"
              >
                Real time photo required at the time of request
              </label>
            </div>
            <div className="mt-6 mx-auto flex justify-center ">
              <Link
                to="/Datestart"
                className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                type="a"
              >
                Request Appointment
              </Link>
            </div>
            <p className="text-center py-5 text-[18px]">
              The ChainPass member requires a $25 <br /> deposite at the time of
              confirmation.
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto pt-6 pb-4">
          <img src="images/Group.svg" alt />
        </div>
      </div>
    </div>
  );
};

export default Sugar;
