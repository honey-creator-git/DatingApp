import React from "react";
import { Link } from "react-router-dom";
import Sidebarnav from "../Components/Sidebarnav";

const Duration = () => {
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
              <div className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] p-5 mt-5">
                <p className="text-[20px] text-white text-center">
                  DURATION OF DATE REQUSTED
                </p>
                <div className="flex justify-between mt-6">
                  <p className="text-[20px] text-white">1/2 HOUR</p>
                  <p className="text-[20px] text-white">$ 500</p>
                </div>
                <div className="flex justify-between mt-3 ">
                  <p className="text-[20px] text-white">1 HOUR</p>
                  <p className="text-[20px] text-white">$ 1000</p>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="text-[20px] text-white">1 1/2 HOUR</p>
                  <p className="text-[20px] text-white">$ 0000</p>
                </div>
                <div className="flex justify-between w-[15%] mx-auto pt-4">
                  <div>
                    <img src="images/arrow-down-sign-to-navigateB 2.svg" alt />
                  </div>
                  <div>
                    <img src="images/arrow-down-sign-to-navigateB 3.svg" alt />
                  </div>
                </div>
              </div>
              <h2 className="text-[25px] font-bold pt-3 text-center font-bold">
                CUSTOM REQUEST
              </h2>
              <div className="mt-5 mx-auto ">
                <Link
                  to="/Futuretime"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] inline-block min-w-[280px] text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
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

export default Duration;
