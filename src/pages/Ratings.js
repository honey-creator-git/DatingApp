import React from "react";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

const Ratings = () => {
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
              <div className="flex justify-between mt-5 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">On Time</h3>
                </div>
                <div className=" flex items-center gap-5">
                  <div className="flex items-center mr-3">
                    <input
                      id="default-radio-1"
                      type="radio"
                      defaultValue
                      name="default-radio4"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      defaultValue
                      name="default-radio2"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="wrapper">
                <div className="form-group-row therating my-3">
                  <label
                    className="starlabel text-[18px] font-bold"
                    htmlFor="inputtime "
                  >
                    Incall Location
                  </label>
                  <div className="rating flex gap-3">
                    <input
                      id="timing5"
                      name="timing"
                      type="radio"
                      defaultValue={5}
                      className="radio-btn hide"
                    />
                    <label htmlFor="timing5" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="timing4"
                      name="timing"
                      type="radio"
                      defaultValue={4}
                      className="radio-btn hide"
                    />
                    <label htmlFor="timing4" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="timing3"
                      name="timing"
                      type="radio"
                      defaultValue={3}
                      className="radio-btn hide"
                    />
                    <label htmlFor="timing3" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="timing2"
                      name="timing"
                      type="radio"
                      defaultValue={2}
                      className="radio-btn hide"
                    />
                    <label htmlFor="timing2" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="timing1"
                      name="timing"
                      type="radio"
                      defaultValue={1}
                      className="radio-btn hide"
                    />
                    <label htmlFor="timing1" className="text-[20px] font-bold">
                      ☆
                    </label>
                  </div>
                </div>
                <div className="form-group-row therating my-3">
                  <label
                    className=" starlabel text-[18px] font-bold"
                    htmlFor="inputmatch"
                  >
                    Atmosphere
                  </label>
                  <div className="rating flex gap-3">
                    <input
                      id="starmatch5"
                      name="match"
                      type="radio"
                      defaultValue={5}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="starmatch5"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="starmatch4"
                      name="match"
                      type="radio"
                      defaultValue={4}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="starmatch4"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="starmatch3"
                      name="match"
                      type="radio"
                      defaultValue={3}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="stamatchr3"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="starmatch2"
                      name="match"
                      type="radio"
                      defaultValue={2}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="starmatch2"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="star1match"
                      name="match"
                      type="radio"
                      defaultValue={1}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="star1match"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                  </div>
                </div>
                <div className="form-group-row therating my-3">
                  <label
                    className="col-2 starlabel text-[18px] font-bold"
                    htmlFor="inputoverall"
                  >
                    Service Received
                  </label>
                  <div className="rating flex gap-3">
                    <input
                      id="overall5"
                      name="overall"
                      type="radio"
                      defaultValue={5}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall5" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall4"
                      name="overall"
                      type="radio"
                      defaultValue={4}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall4" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall3"
                      name="overall"
                      type="radio"
                      defaultValue={3}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall3" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall2"
                      name="overall"
                      type="radio"
                      defaultValue={2}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall2" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall1"
                      name="overall"
                      type="radio"
                      value="1"
                      className="radio-btn hide"
                    />
                    <label for="overall1" className="text-[20px] font-bold">
                      ☆
                    </label>
                  </div>
                </div>
                <div className="form-group-row therating my-3">
                  <label
                    className="col-2 starlabel text-[18px] font-bold"
                    htmlFor="inputapp"
                  >
                    Appearence
                  </label>
                  <div className="rating flex gap-3">
                    <input
                      id="overall6"
                      name="overall1"
                      type="radio"
                      defaultValue={5}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall6" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall7"
                      name="overal2"
                      type="radio"
                      defaultValue={4}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall7" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall8"
                      name="overall3"
                      type="radio"
                      defaultValue={3}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall8" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall9"
                      name="overall4"
                      type="radio"
                      defaultValue={2}
                      className="radio-btn hide"
                    />
                    <label htmlFor="overall9" className="text-[20px] font-bold">
                      ☆
                    </label>
                    <input
                      id="overall10"
                      name="overall5"
                      type="radio"
                      defaultValue={1}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="overall10"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                  </div>
                </div>
                <div className="form-group-row therating my-3">
                  <label
                    className="col-2 starlabel text-[18px] font-bold"
                    htmlFor="inputcumm"
                  >
                    Communication
                  </label>
                  <div className="rating flex gap-3">
                    <input
                      id="overall11"
                      name="overall6"
                      type="radio"
                      defaultValue={5}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="overall11"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="overall12"
                      name="overall7"
                      type="radio"
                      defaultValue={4}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="overall12"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="overall13"
                      name="overall8"
                      type="radio"
                      defaultValue={3}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="overall13"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="overall14"
                      name="overall9"
                      type="radio"
                      defaultValue={2}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="overall14"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                    <input
                      id="overall15"
                      name="overall10"
                      type="radio"
                      defaultValue={1}
                      className="radio-btn hide"
                    />
                    <label
                      htmlFor="overall15"
                      className="text-[20px] font-bold"
                    >
                      ☆
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-2 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">
                    Advertising Photos <br />
                    Match verified photos
                  </h3>
                </div>
                <div className=" flex items-center gap-5">
                  <div className="flex items-center mr-3">
                    <input
                      id="radio-3"
                      type="radio"
                      defaultValue
                      name="default-radio1"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="radio-3"
                      className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-4"
                      type="radio"
                      defaultValue
                      name="default-radio2"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="radio-4"
                      className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <div>
                  <h3 className="text-[18px] font-bold">Overall</h3>
                </div>
                <div className=" flex items-center gap-2">
                  <img src="images/Group 263.svg" alt />
                  <img src="images/Group 264.svg" alt />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-[18px] font-medium text-gray-900 font-bold"
                >
                  Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-[#F0F0F0] border-0"
                  placeholder="Write your thoughts here..."
                  defaultValue={""}
                />
              </div>
              <div className="mt-5 mx-auto ">
                <Link
                  to="/WebCamera"
                  className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[240px] text-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2  text-center"
                  type="button"
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

export default Ratings;
