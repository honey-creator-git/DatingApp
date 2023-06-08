import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Changepassword = () => {
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
              <h2 className="text-[20px] font-bold pt-3">Settings</h2>
              <h3 className="text-[20px] font-bold mt-3 border-b pb-2 flex items-center">
                <span className="pr-3">
                  <img src="images/reloadB 1.svg" alt />
                </span>{" "}
                Change Password
              </h3>
              <div className="my-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="images/padlock.svg" alt="" />
                  </span>
                  <input
                    className="w-full border-2  border-[#000] placeholder:font-italitc text-[16px]  rounded py-2 pl-10 pr-4 "
                    placeholder="Enter Old Password"
                    type="text"
                  />
                  <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                    <img src="images/hideB 1.svg" alt="" />
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="images/padlock.svg" alt="" />
                  </span>
                  <input
                    className="w-full border-2  border-[#000] placeholder:font-italitc text-[16px]  rounded py-2 pl-10 pr-4 "
                    placeholder="Enter New Password"
                    type="text"
                  />
                  <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                    <img src="images/hideB 1.svg" alt="" />
                  </span>
                </label>
              </div>
              <div className="mb-6">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="images/padlock.svg" alt="" />
                  </span>
                  <input
                    className="w-full border-2  border-[#000] placeholder:font-italitc text-[16px]  rounded py-2 pl-10 pr-4 "
                    placeholder="Enter Confirm Password"
                    type="text"
                  />
                  <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                    <img src="images/hideB 1.svg" alt="" />
                  </span>
                </label>
              </div>

              <div className="my-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[240px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Done
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

export default Changepassword;
