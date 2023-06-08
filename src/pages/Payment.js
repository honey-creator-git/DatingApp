import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Payment = () => {
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
              <h4 className="text-[25px] text-center pt-5">
                TO SECURE <br />
                <span className="font-bold">SUGAR’s</span> TIME ON THIS DATE,{" "}
                <br />
                A DEPOSITE OF <br />
                $25 <br />
                IS REQUIRED
              </h4>
              <div className="mt-10 mx-auto w-[70%]  pb-8 flex justify-center">
                <Link
                  to="/Paymentmethod"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] inline-block justify-center flex items-center border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Next
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

export default Payment;
