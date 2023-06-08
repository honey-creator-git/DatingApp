import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Setting = () => {
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
              <h2 className="text-[20px] font-bold">Settings</h2>
              <h3 className="text-[20px] font-bold mt-3 border-b pb-2 flex items-center">
                <span className="pr-3">
                  <img src="images/settingB.svg" alt />
                </span>{" "}
                Account
              </h3>
              <div className="flex justify-between mt-4 items-center ">
                <Link to="/Changepassword" className="text-[16px]">
                  Change Password
                </Link>
                <img src="images/arrow-down-sign-to-navigateB 12.svg" alt />
              </div>
              <div className="flex justify-between mt-3 items-center ">
                <h2 className="text-[16px]">Content Settings</h2>
                <img src="images/arrow-down-sign-to-navigateB 12.svg" alt />
              </div>
              <div className="flex justify-between mt-3 items-center ">
                <h2 className="text-[16px]">Social</h2>
                <img src="images/arrow-down-sign-to-navigateB 12.svg" alt />
              </div>
              <div className="mb-3 w-full">
                <select
                  id="countries"
                  className="text-black text-gray-900 text-md border-0 block w-full py-2.5 "
                >
                  <option selected>English</option>
                  <option value="US">Hindi</option>
                  <option value="CA">Russian</option>
                </select>
              </div>

              <h3 className="text-[20px] font-bold pt-5 border-b pb-2 flex items-center">
                <span className="pr-3">
                  <img src="images/bell.svg" alt />
                </span>
                Notifications
              </h3>
              <div className="flex justify-between mt-4 items-center ">
                <h2 className="text-[16px]">New for you</h2>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between mt-3 items-center ">
                <h2 className="text-[16px]">Account activity</h2>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-5 mx-auto ">
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

export default Setting;
