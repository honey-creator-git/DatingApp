import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />

          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5 ">
            <div className="w-[90%] mx-auto items-center mt-16 py-5">
              <p className="text-center text-[20px] font-bold">
                Appointment Time &amp; Duration
              </p>
              <div className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] p-5 mt-5">
                <div className="flex justify-between border-b-2 border-[#fff] pb-4">
                  <p className="text-[20px] text-white">4:30 AM</p>
                  <img src="images/check-markB 7.svg" alt />
                </div>
                <div className="border-b-2 border-[#fff] pb-4 mt-6">
                  <p className="text-[20px] text-white">5:00 AM</p>
                </div>
                <div className="flex justify-between border-b-2 border-[#fff] pb-4 mt-6">
                  <p className="text-[20px] text-white">5:30 AM</p>
                  <img src="images/check-markB 7.svg" alt />
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-[20px] text-white">6:00 AM</p>
                  <img src="images/check-markB 7.svg" alt />
                </div>
              </div>
              <p className="text-center text-[25px] font-bold py-5">
                Send Invite
              </p>
              <textarea
                id="message"
                rows={8}
                className="block p-2.5 w-full text-sm text-white bg-gradient-to-b from-[#0198FE] to-[#0247FF] border border-gray-300 "
                placeholder="Description...."
                defaultValue={""}
              />
               <div className="mt-5 mx-auto ">
                <Link
                  to="/Searcgresults"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] inline-block text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="submit"
                >
                  Submit
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

export default Appointment;
