import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Robart = () => {
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
              <div className="flex justify-between my-5">
                <img src="images/Rectangle 100.svg" alt />
                <img src="images/Rectangle 101.svg" alt />
              </div>
              <div className="mt-[50px] mx-auto w-full">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[280px] justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  View History
                </button>
              </div>
              <div className="mt-5 mx-auto w-full pb-8">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[280px] inline-block justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  View Date Request
                </button>
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

export default Robart;
