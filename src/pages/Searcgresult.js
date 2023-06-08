import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Searcgresult = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[80%] mx-auto items-center mt-16 p-5">
              <div className="mt-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[280px] justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  <span className="pr-1">
                    <img src="images/searchB 2.svg" alt />
                  </span>
                  Search Results
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
                <button
                  className="bg-[#E0E1E3] min-w-[280px] text-center w-full border-0 px-16 rounded  py-1 text-[16px] text-center"
                  type="button"
                >
                  See all results
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

export default Searcgresult;
