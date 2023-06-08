import React,{useState} from 'react'
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const people = [
  {
    id: 1,
    name: "Choose a Gender",
  },
  {
    id: 2,
    name: "Male",
  },
  {
    id: 3,
    name: "Female",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Forgotpassword = () => {
    const [selected, setSelected] = useState(people[2]);
    
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
        <div>
          <img
            src="images/ChainPass-ID-AppIcon-Blue-512x 2.png"
            className="mx-auto my-8"
            alt
          />
        </div>
        <div className="mt-[45px]">
          <img src="images/Group 483.png" className="mx-auto" alt />
        </div>
        <div className="mx-auto w-[70%] mt-16 pb-3">
          <form className>
            <div className="mb-6">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src="images/avatarB 4.svg" alt />
                </span>
                <input
                  className="w-full bg-transparent placeholder:font-italitc border text-[16px] border-2 border-white rounded py-2 pl-10 pr-4 text-white"
                  placeholder="Email"
                  type="text"
                />
              </label>
            </div>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md  py-1.5 pl-3 pr-10 text-left ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span
                        className="ml-3 block truncate"
                      
                      >
                        {selected.name}
                      </span>

                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <IoIosArrowDown
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md py-1   bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate text-grey"
                                  )}
                                >
                                  {person.name}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <IoIosArrowDown
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            <div className="my-6 mx-auto min-w-[240px]">
              <button
                className="bg-[#05B7FD] bg-opacity-[20%] inline-block min-w-[240px] text-center border border-[#05B7FD] text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send OTP
              </button>
            </div>
            <div className="mb-6">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src="images/padlockB.svg" alt />
                </span>
                <input
                  className="w-full bg-transparent placeholder:font-italitc text-[16px] border border-2 border-white rounded py-2 pl-10 pr-4 text-white"
                  placeholder="Enter OTP"
                  type="text"
                />
                <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                  <img src="images/hideB 1.svg" alt />
                </span>
              </label>
            </div>
            <div className="mb-6">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src="images/padlockB.svg" alt />
                </span>
                <input
                  className="w-full bg-transparent placeholder:font-italitc text-[16px] border border-2 border-white rounded py-2 pl-10 pr-4 text-white"
                  placeholder="Enter Password"
                  type="text"
                />
                <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                  <img src="images/hideB 1.svg" alt />
                </span>
              </label>
            </div>
            <div className="mb-6">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src="images/padlockB.svg" alt />
                </span>
                <input
                  className="w-full bg-transparent placeholder:text-white text-[16px] border border-2 border-white rounded py-2 pl-10 pr-4 text-white"
                  placeholder="Confirm Password"
                  type="text"
                />
                <span className="absolute inset-y-0 right-5 flex items-center pl-3">
                  <img src="images/hideB 1.svg" alt />
                </span>
              </label>
            </div>
            <div className="mt-6 mx-auto min-w-[240px]">
              <button
                className="bg-[#05B7FD] bg-opacity-[20%] inline-block min-w-[240px] text-center border border-[#05B7FD] text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                LogIn
              </button>
            </div>
          </form>
        </div>

        <div className="w-[90%] mx-auto pt-10 pb-4">
          <img src="images/Group.svg" alt />
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword
