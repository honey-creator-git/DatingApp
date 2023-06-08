import React from "react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
        <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
        <div className="bg-white items-center rounded p-5 pb-10 my-10 rounded-[50px] text-center">
          <p className="text-center text-[50px] py-4">
            Your <br />
            verification <br />
            is under <br />
            process.
          </p>
          <Link
            to="/Idverified"
            className="text-center text-[35px] pt-10 pb-16"
          >
            PLEASE WAIT....
          </Link>
        </div>
        <div className="w-[90%] mx-auto pt-10 pb-4">
          <img src="images/Group.svg" alt />
        </div>
      </div>
    </div>
  );
};

export default Process;
