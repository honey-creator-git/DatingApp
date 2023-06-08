import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Aboutme = () => {
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
              <div className="flex justify-between mt-8 items-center">
                <h2 className="text-[20px] font-bold">About me</h2>
                <a href="#">
                  <img src="images/document-editor 1.svg" alt />
                </a>
              </div>
              <div className="bg-[#F0F0F0] p-3 mt-3">
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
              <h3 className="text-[20px] font-bold mt-3">My details</h3>
              <div className="flex justify-between mt-4 items-center border-b pb-2">
                <h2 className="text-[16px]">Gender</h2>
                <h2 className="text-[16px]">Female</h2>
              </div>
              <div className="flex justify-between mt-3 items-center border-b pb-2">
                <h2 className="text-[16px]">Age</h2>
                <h2 className="text-[16px]">30</h2>
              </div>
              <div className="flex justify-between mt-3 items-center border-b pb-2">
                <h2 className="text-[16px]">Height</h2>
                <h2 className="text-[16px]">6’2”</h2>
              </div>
              <div className="flex justify-between mt-3 items-center ">
                <h2 className="text-[16px]">Weight</h2>
                <h2 className="text-[16px]">55</h2>
              </div>
              <div className="mt-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[240px] text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Update Profile
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

export default Aboutme;
