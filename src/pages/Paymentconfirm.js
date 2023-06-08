import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Paymentconfirm = () => {
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
              <div className="flex items-center gap-5 justify-center mt-8">
                <img src="images/image 19.svg" alt />
                <img src="images/q3 1.svg" alt />
              </div>
              <h3 className="text-[25px] text-[#33058B] text-center font-bold pt-6">
                Congratulations!
              </h3>
              <p className="text-[20px] text-center pt-5">
                Your appointment is confirmed with Sugar for 1pm 3/21 would you
                like to import in your calendar.
              </p>
              <div className="mt-8 mx-auto w-[85%]  pb-8 flex justify-between">
                <Link
                  to="/Ratings"
                  className="bg-gradient-to-b from-[#0198FE] to-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-white font-bold py-2  text-center"
                  type="button"
                >
                  Yes
                </Link>
                <button
                  className="bg-white border-2 border-[#0247FF]  justify-center flex items-center border border-[#05B7FD] px-8 rounded-full text-[#0247FF] font-bold py-2  text-center"
                  type="button"
                >
                  No
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

export default Paymentconfirm;
