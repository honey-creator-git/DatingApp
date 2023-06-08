import React from "react";
import { Link } from "react-router-dom";

const Emails = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto my-6">
        <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
        <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5  py-8">
          <div className="flex w-[80%] mx-auto">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <img src="images/plus-18-movie 1.svg" alt />
            </span>
            <input
              type="text"
              id="#"
              className="rounded-none rounded-r-lg bg-[#000] bg-opacity-[5%] border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
              placeholder="Adult+18"
            />
          </div>
          <div className="w-[80%] mx-auto bg-white items-center rounded mt-5 mb-6">
            <div className="flex flex-col">
              <img
                src="images/encrypted 1.svg"
                className="w-24 mx-auto mt-6"
                alt
              />
              <div className="py-2 bg-gradient-to-t from-[#0198FE] to-[#0247FF] mt-5 w-[30%] mx-auto text-center">
                <p className="text-center text-[16px] text-white">06589</p>
              </div>
              <p className="text-center text-[16px] text-[#838282] pt-3">
                Coupon Code
              </p>
              <form>
                <input
                  type="text"
                  className="w-full bg-transparent  border text-[16px] border-2 border-black mt-5 rounded py-2 pl-2  "
                />
                <input
                  type="text"
                  className="w-full bg-transparent  border text-[16px] border-2 border-black mt-5 rounded py-2 pl-2  "
                />
                <input
                  type="text"
                  className="w-full bg-transparent  border text-[16px] border-2 border-black mt-5 rounded py-2 pl-2  "
                />
                <input
                  type="text"
                  className="w-full bg-transparent  border text-[16px] border-2 border-black mt-5 rounded py-2 pl-2  "
                />
                <div className="my-6 mx-auto">
                  <Link
                    to="/Options"
                    className="bg-gradient-to-b from-[#000C3E] to-[#02227E] text-center min-w-[280px] w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center"
                    type="button"
                  >
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto pt-10 pb-4">
          <img src="images/Group.svg" alt />
        </div>
      </div>
    </div>
  );
};

export default Emails;
