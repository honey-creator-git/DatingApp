import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Qrcode = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 py-5">
              <p className="text-center text-[20px] font-bold">QR Code</p>
              <img src="images/qr-code 1.svg" className="mx-auto mt-16" alt />
              <div className="mt-16 mb-[150px] mx-auto ">
                <Link
                  to="/Camera"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Scan
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

export default Qrcode;
