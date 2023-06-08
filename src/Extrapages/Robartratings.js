import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Robartratings = () => {
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
              <div className="flex justify-between mt-5 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">On Time</h3>
                </div>
                <div className=" flex items-center gap-5">
                  <div className="flex items-center mr-3">
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
                      Yes
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
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">Etequette</h3>
                </div>
                <div className>
                  <img src="images/Group 260.svg" alt />
                </div>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">Attitude</h3>
                </div>
                <div className>
                  <img src="images/Group 260.svg" alt />
                </div>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">Paid as agreed</h3>
                </div>
                <div className=" flex items-center gap-5">
                  <div className="flex items-center mr-3">
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
                      Yes
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
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">Overall</h3>
                </div>
                <div className=" flex items-center gap-2">
                  <img src="images/Group 263.svg" alt />
                  <img src="images/Group 264.svg" alt />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-[18px] font-medium text-gray-900 font-bold"
                >
                  Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-[#F0F0F0] border-0"
                  placeholder="Write your thoughts here..."
                  defaultValue={""}
                />
              </div>
              <div className="mt-5 mx-auto ">
                <button
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[240px] text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Submit
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

export default Robartratings;
