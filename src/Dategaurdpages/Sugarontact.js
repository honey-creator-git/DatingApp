import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Sugarontact = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
        <Sidebarnav />
        <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
          <div className="w-[90%] mx-auto items-center mt-16 py-5">
            <div className="p-5 bg-gradient-to-r from-[#01195C] relative to-[#073FE1] w-[90%] mx-auto h-[130px]">
              <img
                src="images/Ellipse 20.svg"
                className="mx-auto w-[150px] absolute left-[30%] bottom-[-30px]"
                alt
              />
            </div>
            <p className="text-[20px] text-center flex items-center justify-center pt-10">
              Sugar Emergency Contacts
            </p>
            <p className="text-[18px] text-center text-[#AEAEAE] flex items-center justify-center pt-2">
              Community: 5 groups
            </p>
            <div className="py-2 px-5 shadow-lg border mt-5 flex justify-between items-center">
              <div>
                <img src="images/Group 1080.svg" alt />
              </div>
              <div>
                <p className="text-center text-[14px] ">
                  NASHVILLA TN SHELBY POLICE STATION <br />
                  615-564-8798
                </p>
                <div className="bg-[#D9D9D9] py-1">
                  <p className="text-center text-[10px]">
                    34 01’ 46.6”N 118 28’11.3”W
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2 px-5 shadow-lg border mt-5 flex justify-between items-center">
              <div className="flex items-center gap-10">
                <img src="images/Ellipse 28.svg" alt />
                <p className="text-center text-[14px] ">Julian</p>
              </div>
              <div>
                <p className="text-center text-[14px] ">Mar 26, 2023</p>
              </div>
            </div>
            <div className="py-2 px-5 shadow-lg border mt-5 flex justify-between items-center">
              <div className="flex items-center gap-10">
                <img src="images/Ellipse 28.svg" alt />
                <p className="text-center text-[14px] ">Amy</p>
              </div>
              <div>
                <p className="text-center text-[14px] ">Feb 18, 2023</p>
              </div>
            </div>
            <div className="py-2 px-5 shadow-lg border mt-5 flex justify-between items-center">
              <div className="flex items-center gap-10">
                <img src="images/Ellipse 28.svg" alt />
                <p className="text-center text-[14px] ">Marlin</p>
              </div>
              <div>
                <p className="text-center text-[14px] ">Jan 05, 2023</p>
              </div>
            </div>
            <div className="py-2 px-5 shadow-lg border mt-5 flex justify-between items-center">
              <div className="flex items-center gap-10">
                <img src="images/Ellipse 26.svg" alt />
                <p className="text-center text-[14px] ">Julian</p>
              </div>
              <div>
                <p className="text-center text-[14px] ">Nov 16, 2022</p>
              </div>
            </div>
            <div className="py-2 px-5 shadow-lg border mt-5 flex justify-between items-center">
              <div className="flex items-center gap-10">
                <img src="images/Ellipse 27.svg" alt />
                <p className="text-center text-[14px] ">Roberto</p>
              </div>
              <div>
                <p className="text-center text-[14px] ">Aug 22, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto pt-6 pb-4">
          <img src="images/Group.svg" alt />
        </div>
      </div>
    </div>
  );
};

export default Sugarontact;
