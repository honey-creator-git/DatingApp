import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const COMMUNITYREVIEWS = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 py-5">
              <div className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] p-3 mt-5">
                <p className="text-[20px] text-white text-center">
                  COMMUNITY REVIEWS
                </p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">Jacob</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">Harry</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">John</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">Michael</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">James </p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">Charlie</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">Jacob</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="flex justify-between mt-6 items-center">
                <p className="text-[16px] ">JAN 27, 2022</p>
                <p className="text-[16px] ">Harry</p>
                <img src="images/Group 886.svg" alt />
                <p className="text-[16px] ">Details</p>
              </div>
              <div className="mt-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[240px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Select Time
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

export default COMMUNITYREVIEWS;
