import React from "react";
import { Link } from "react-router-dom";
import Sidebarnav from "../Components/Sidebarnav";

const Esign = () => {
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
              <h5 className="text-[25px] font-bold text-center pt-2">
                CONGRATULATIONS
              </h5>
              <h4 className="text-[18px] text-center pt-3">
                SUGAR HAS CONFIRMED YOUR DATE ON 05/02 AT 1 AM, PLEASE SIGN THE
                MUTUAL CONSENT CONTRACT TO CONFIRM THE DATE.
              </h4>
              <img
                src="images/Group 573.svg"
                className="mx-auto w-[40%] py-5"
                alt
              />
              <div className="mt-5 mx-auto ">
                <Link
                  to="/Importdate"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[240px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  E-Sign &amp; Confirmed
                </Link>
              </div>
              <div className="flex justify-between w-[40%] mx-auto py-4">
                <div>
                  <img src="images/chatB.svg" alt />
                </div>
                <div>
                  <img src="images/telephoneB.svg" alt />
                </div>
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

export default Esign;
