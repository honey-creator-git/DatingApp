import React from "react";
import { Link } from "react-router-dom";
import Stepbar from "../Components/Stepbar";

const Idfront = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
        <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
        <div className="mt-5">
          <div className="bg-white items-center rounded p-5 mb-6 rounded-[50px]">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <p className="text-center text-[20px] py-4 font-bold flex items-center">
                  <span className="pr-2">
                    <img src="images/id-cardB 1.svg" alt />
                  </span>
                  Identity Card “Front”
                </p>
              </div>
              <p className="text-center text-[16px] py-4 text-[#838282]">
                Please open the camera of your device and scan <br />
                your document
              </p>
              <Stepbar />
            </div>
          </div>
          <div className="w-[90%] mx-auto pt-10 pb-4">
            <img src="images/Group.svg" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idfront;
