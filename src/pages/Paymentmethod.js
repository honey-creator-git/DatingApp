import React from "react";
import { Link } from "react-router-dom";
import Sidebarnav from "../Components/Sidebarnav";

const Paymentmethod = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 py-5">
              <div className="bg-gradient-to-r from-[#01195C] to-[#073FE1] p-5 mt-5">
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
              <h4 className="text-[20px] text-center pt-5">
                Our records show the Following Payment options, Scan the QR Code
                r Copy &amp; Paste User ID in the Chosen App
              </h4>
              <div className="w-[50%] mx-auto mt-8">
                <div className="flex items-center mb-4">
                  <input
                    defaultChecked
                    id="default-radio-1"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <img src="images/image 14.svg" alt />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    defaultValue
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <img src="images/image 19.svg" alt />
                  </label>
                </div>
              </div>
              <div className="mt-8 mx-auto w-[85%]  pb-8 flex justify-between">
                <Link
                  to="/Paymentconfirm"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  QR Code
                </Link>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  Not Now
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

export default Paymentmethod;
