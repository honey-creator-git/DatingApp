import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Communityprofile = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />

          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[80%] mx-auto items-center mt-16 p-5">
              <p className="text-center text-[30px] font-bold">
                Community Profiles
              </p>
              <div className="mt-[100px] mx-auto ">
                <Link
                  to="/Catogaries"
                  className="bg-[#05B7FD] min-w-[280px] justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  <span className="pr-1">
                    <img src="images/searchB 2.svg" alt />
                  </span>{" "}
                  Search
                </Link>
              </div>
              <div className="mt-10 mx-auto ">
                <Link
                  to="/Catogaries2"
                  className="bg-[#05B7FD] min-w-[280px]  justify-center flex items-center w-full border border-[#05B7FD] px-12 rounded-full text-white font-bold py-2 "
                  type="button"
                >
                  <span className="pr-1">
                    <img src="images/massageB 1.svg" alt />
                  </span>{" "}
                  Send Invitation
                </Link>
              </div>
              <div className="mt-10 mx-auto ">
                <Link
                  to="/Camera"
                  className="bg-[#05B7FD] min-w-[280px] justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 "
                  type="button"
                >
                  <span className="pr-1">
                    <img src="images/qr-codeB 1.svg" alt />
                  </span>{" "}
                  Scan QR Code
                </Link>
              </div>
              <div className="my-10 mx-auto ">
                <Link
                  to="/Communitysreach"
                  className="bg-[#05B7FD] min-w-[280px] justify-center flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  <span className="pr-1">
                    <img src="images/login-B 1.svg" alt />
                  </span>{" "}
                  Enter Manually
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

export default Communityprofile;
