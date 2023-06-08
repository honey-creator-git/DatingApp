import React from "react";
import Sidebarnav from "../Components/Sidebarnav";

const Help = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 py-5">
              <h1 className="text-[20px] text-[#0247FF] font-bold text-center">
                HELP
              </h1>
              <p className="text-[16px] pt-6 text-center text-justify">
                This is the Cookie Policy for our wesbite Vairify.Date. Our
                cookie policy ("Policy") describes what cookies are and how
                they're being used by the Vairify.Date website ("Website" or
                "Service") and any of its related products and services
                (collectively, "Services"). This Policy is a legally binding
                agreement
              </p>
              <img src="images/Group 1113.svg" className="mx-auto my-3" alt />
              <div className="mt-2 mx-auto w-full">
                <a
                  href="11-coupancode.html"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[250px] flex inline-block items-center justify-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2"
                  type="button"
                >
                  Email us
                </a>
              </div>

              <div className="mt-4 mx-auto w-full">
                <a
                  href="11-coupancode.html"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[250px] flex inline-block items-center justify-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2"
                  type="button"
                >
                  Contact us
                </a>
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

export default Help;
