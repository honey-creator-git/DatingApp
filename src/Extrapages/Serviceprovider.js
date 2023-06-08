import React from "react";
import { Link } from "react-router-dom";
import Sidebarnav from "../Components/Sidebarnav";

const Serviceprovider = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
        <div className="mx-auto w-[70%] mt-16 pb-3">
          <form className>
            <div className="mb-3">
              <select
                id="countries"
                className="border bg-gray-200 text-black border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
              >
                <option selected>English</option>
                <option value="US">Hindi</option>
                <option value="CA">Russian</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Dance "
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Height"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Age"
                type="text"
              />
            </div>
            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-white text-[16px]">In Call Availability</p>
              </div>
              <div className="w-[20%]">
                <div className="flex  justify-between">
                  <div className=" ">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-white text-[16px]">Out Call Availability</p>
              </div>
              <div className="w-[20%]">
                <div className="flex  justify-between">
                  <div className=" ">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mb-3 w-full ">
              <textarea
                className="peer block min-h-[auto] w-full rounded border-2 border-[#fff] bg-transparent py-[0.32rem] px-3 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none placeholder:text-white"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Build Type "
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Hair Color"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Hair Length"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Appearance"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Pier"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Tattoos Type"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="P Type"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Ethnicity"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="Size"
                type="text"
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-5 pr-4 text-white"
                placeholder="C Size"
                type="text"
              />
            </div>

            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-white text-[16px]">B Check</p>
              </div>
              <div className="w-[20%]">
                <div className="flex  justify-between">
                  <div className=" ">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-white text-[16px]">Trans Sexual</p>
              </div>
              <div className="w-[20%]">
                <div className="flex  justify-between">
                  <div className=" ">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-white text-[16px]">Massage Availability</p>
              </div>
              <div className="w-[20%]">
                <div className="flex  justify-between">
                  <div className=" ">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 flex justify-between">
              <div>
                <p className="text-white text-[16px]">Snm Availability</p>
              </div>
              <div className="w-[20%]">
                <div className="flex  justify-between">
                  <div className=" ">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault01"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      checked
                    />
                    <label
                      className="mt-px inline-block pl-1 text-white hover:cursor-pointer"
                      for="radioDefault02"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 mx-auto min-w-[240px]">
              <Link
                to=""
                className="bg-[#05B7FD] bg-opacity-[20%] inline-block min-w-[240px] text-center border border-[#05B7FD] text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>

        <div className="w-[90%] mx-auto pt-10 pb-4">
          <img src="images/Group.svg" alt />
        </div>
      </div>
    </div>
  );
};

export default Serviceprovider;
