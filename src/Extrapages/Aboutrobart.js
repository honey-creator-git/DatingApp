import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Aboutrobart = () => {
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
                    <img src="images/Ellipse 49.svg" alt />
                  </div>
                  <div className=" ">
                    <h2 className="text-[35px] font-bold text-white">ROBORT</h2>
                    <p className="text-[10px] text-white">
                      ChainPass ID 5SES1688
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-[25px] text-center font-bold mt-5">ROBORT</h3>
              <p className="text-[20px] text-center">
                HAS REQUESTED A DATE ON 05/02 AT 1 PM FOR 1 HOUR
              </p>
              <h3 className="text-[25px] text-center font-bold pt-4">
                OUTCALL LOCATION:
              </h3>
              <p className="text-[20px] text-center">
                5187 BEAVERDAM RD ROCK ISLAND <br /> NJ 48576
              </p>
              <div className="mt-5 mx-auto w-full pb-8 flex justify-between">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-5 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Accept
                </button>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-5 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Modify
                </button>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-5 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Deny
                </button>
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

export default Aboutrobart;
