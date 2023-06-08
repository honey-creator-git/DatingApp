import React from "react";
import { Link } from "react-router-dom";
import Sidebarnav from "../Components/Sidebarnav";

const Communitysreach = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 p-5">
              <p className="text-center text-[30px] pb-10 font-bold">
                Community Profiles
              </p>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 "
                placeholder="Search"
                required
              />
              <div className="mt-[50px] mx-auto w-full">
                <Link
                  to="/Sugar"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[280px] justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  <span className="pr-1">
                    <img src="images/searchB 2.svg" alt />
                  </span>{" "}
                  Search
                </Link>
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

export default Communitysreach;
