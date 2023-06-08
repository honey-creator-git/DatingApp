import React from "react";
import { Link } from "react-router-dom";

const Salect = () => {
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
              <p className="text-center text-[20px] font-bold text-[#02227E] pt-4">
                ChainPass ID
              </p>
              <p className="text-center text-[16px">Extreme $49.99</p>
              <div className="text-center bg-[#C1E4F2] p-3 my-5">
                <p className="text-[16px]">
                  With “V.A.J” <br />
                  EU paid dating sites, Hook up Dating
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] mx-auto h-auto my-6">
            <select
              id="countries"
              className="bg-[#0198FE] border-0 text-white text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>-- Select --</option>
              <option value="US">1</option>
              <option value="CA">2</option>
              <option value="FR">3</option>
              <option value="DE">4</option>
            </select>
            <div className="my-6 mx-auto">
              <Link
                to="/Emails"
                className="bg-gradient-to-b from-[#000C3E] to-[#02227E] text-center min-w-[280px] w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center"
                type="button"
              >
                Submit
              </Link>
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

export default Salect;
