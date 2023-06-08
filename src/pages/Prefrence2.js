import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Prefrence2 = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[80%] mx-auto items-center mt-16 p-5">
              <div className="mt-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] text-center w-full border border-[#05B7FD] px-16 rounded text-white font-bold py-2  text-center"
                  type="button"
                >
                  Preferences
                </button>
              </div>
              <div className="flex justify-between mt-8">
                <div className="text-center">
                  <img src="images/Ellipse 58.svg" alt />
                  <p className="text-[16px] py-2">Oliver James</p>
                </div>
                <div className="text-center">
                  <img src="images/Ellipse 59.svg" alt />
                  <p className="text-[16px] py-2">Harry Robert</p>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <div className="text-center">
                  <img src="images/Ellipse 58.svg" alt />
                  <p className="text-[16px] py-2">Oliver James</p>
                </div>
                <div className="text-center">
                  <img src="images/Ellipse 59.svg" alt />
                  <p className="text-[16px] py-2">Harry Robert</p>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <div className="text-center">
                  <img src="images/Ellipse 58.svg" alt />
                  <p className="text-[16px] py-2">Oliver James</p>
                </div>
                <div className="text-center">
                  <img src="images/Ellipse 59.svg" alt />
                  <p className="text-[16px] py-2">Harry Robert</p>
                </div>
              </div>
              <div className="mt-5 mx-auto ">
                <Link
                  to="/Appointment"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
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

export default Prefrence2;
