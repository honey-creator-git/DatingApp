import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebarnav = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="w-full my-3 px-5 py-2 flex gap-5 items-center">
        <div>
          <nav className="navbar navbar-expand-lg   shadow-md">
            <div className=" ">
              <div className="form-inline ml-auto">
                <div className="" onClick={ToggleSidebar}>
                  <img src="/images/Group 55.svg"></img>
                </div>
              </div>
            </div>
          </nav>
          <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-r from-[#01195CE5] to-[#073FE1E5] bg-opacity-[0.01%]">
              <ul className=" mt-8">
                <li className="text-center">
                  <a
                    href="#"
                    className="text-center p-2 text-base font-normal text-white "
                  >
                    Profile
                  </a>
                  <img
                    src="images/Ellipse 21.svg"
                    className="mx-auto my-2"
                    alt
                  />
                </li>
                <li className="text-center">
                  <Link
                    to="/Sugars"
                    className="text-white text-center p-2 text-base font-normal "
                  >
                    Sugar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Emergencycontact"
                    className="flex items-center p-2 text-base font-normal text-white mt-5"
                  >
                    <img src="images/clock-timeB 1.svg" alt />
                    <span className=" ml-3 ">Date Guard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Aboutme"
                    className="flex items-center p-2 text-base font-normal text-white"
                  >
                    <img src="images/logoutB.svg" alt />
                    <span className=" ml-3 whitespace-nowrap">
                      Update Profile
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Setting"
                    className="flex items-center p-2 text-base font-normal text-white"
                  >
                    <img src="images/questionB.svg" alt />
                    <span className=" ml-3 whitespace-nowrap">
                      Account Settings
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cookies"
                    className="flex items-center p-2 text-base font-normal text-white"
                  >
                    <img src="images/fileB 1.svg" alt />
                    <span className=" ml-3 whitespace-nowrap">Cookies</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Privacypolicy"
                    className="flex items-center p-2 text-base font-normal text-white"
                  >
                    <img src="images/security-shieldC 1.svg" alt />
                    <span className=" ml-3 whitespace-nowrap">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Help"
                    className="flex items-center p-2 text-base font-normal text-white"
                  >
                    <img src="images/settingB 1.svg" alt />
                    <span className=" ml-3 whitespace-nowrap">Help</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Home"
                    className="flex items-center mt-4 p-2 text-base font-normal text-white bg-gradient-to-b from-[#0198FE] to-[#0247FF] px-4 py-2 w-20 rounded-[30px] border border-[#fff]"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </div>
        <div>
         <Link to="/Communityprofile"> <img src="/images/Groups.svg"></img></Link>
        </div>
      </div>
    </>
  );
};

export default Sidebarnav;
