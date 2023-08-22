import React, { useState } from "react";

const PendingRequests = () => {
  const [requestApprove, setRequestApprove] = useState(false);
  return (
    <div className="main-content pt-[34px] rounded-[20px] pb-[45px] bg-[#D5D6E0]">
      <div className="flex flex-col justify-between">
        <div className="mt-2 bg-[#040C50]/[26%] w-full ">
          <h2 className="font-bold text-[26px] text-[#02227E] font-inter ">
            Pending Requests
          </h2>
        </div>
        <div className="mt-[35px] flex flex-col gap-[26px] px-2">
          <div className="bg-[#3760CB]/[83%] shadow-lg py-[12px] rounded-[20px] border border-gray-100">
            <div className="flex gap-2 sm:gap-4 pl-[4px] pr-[19px]">
              <div className="w-[86px]">
                <img
                  src="/images/AdminAboutMe2.png"
                  className="w-[86px] h-[86px] rounded-full "
                />
                <div className="mt-2">
                  <h6 className="text-xs text-white font-roboto font-medium">
                    TRUREVUⓒ
                  </h6>
                  <h6 className="text-xs text-white font-roboto font-medium">
                    Jon jon 2334YT9
                  </h6>

                  <div className="flex gap-1 items-start">
                    <div className="flex gap-1 mt-1">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <img
                          src="/images/Star.svg"
                          className="w-[10px]  h-[10px]"
                        />
                      ))}
                    </div>
                    <span className="text-white block text-center  font-roboto font-bold text-[15px]">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-[15px] items-center">
                  <div>
                    <span className="text-white block text-[20px]">
                      <span className="font-bold">VAI</span>RIDATE
                    </span>
                    <button className="font-roboto font-bold text-[20px] text-white px-4 border rounded-[15px] border-white bg-[#02227E]">
                      View
                    </button>
                  </div>
                  <div className="flex gap-[38px]">
                    <button>
                      <img src="/images/phone-rounded.svg" />
                    </button>
                    <button>
                      <img src="/images/massege-rounded.svg" />
                    </button>
                  </div>
                </div>
                <div className="grid gap-[10px] grid-cols-4">
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Requested <br /> Appt/time
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Requested <br /> Appt/time
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Elapsed <br /> Time
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Status
                  </span>
                </div>
                <div className="grid gap-[10px] mt-[24px] grid-cols-4">
                  <span className="font-roboto text-white text-[10px] font-bold">
                    1/28/23 <br />
                    6:oopm-9:00pm
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    1/28/23 <br /> 4:28pm
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    3hr 46m
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Pending
                  </span>
                </div>
              </div>
            </div>

            {requestApprove ? (
              <div className="flex items-end justify-between px-[19px] gap-[21px]">
                <div>
                  <span className="block text-[12px] font-bold font-roboto text-white">
                    Request Type
                  </span>
                  <span className="text-white block text-[20px]">
                    <span className="font-bold">VAI</span>RIDATE
                  </span>
                </div>
                <div className="flex flex-wrap items-end gap-[21px]">
                  <button
                    onClick={() => setRequestApprove(false)}
                    className="font-roboto font-bold text-[20px] text-white px-4 border rounded-[15px] border-[#02227E] bg-[#E04A22]"
                  >
                    Cancel
                  </button>
                  <button className="font-roboto font-bold text-[20px] text-white px-4 border rounded-[15px] border-white bg-[#02227E]">
                    View
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 mt-3 items-end justify-between px-2 smpx-[19px] gap-2 md:gap-[21px]">
                <button
                  onClick={() => setRequestApprove(true)}
                  className="font-mulish font-extrabold text-[16px] sm:text-[20px] text-center text-[#02227E] px-4 border rounded-[15px] border-[#02227E] bg-[#13A307]"
                >
                  Approve
                </button>
                <button className="font-mulish font-extrabold text-[16px] sm:text-[20px] text-center text-[#02227E] px-4 border rounded-[15px] border-[#02227E] bg-[#FFC020]">
                  Modify
                </button>
                <button className="font-mulish font-extrabold text-[16px] sm:text-[20px] text-center text-[#02227E] px-4 border rounded-[15px] border-[#02227E] bg-[#DB3002]">
                  Deny
                </button>
              </div>
            )}
          </div>
          <div className="bg-[#3760CB]/[83%] shadow-lg py-[12px] rounded-[20px] border border-gray-100">
            <div className="flex gap-2 sm:gap-4 pl-[4px] pr-[19px]">
              <div className="w-[86px]">
                <img
                  src="/images/AdminAboutMe2.png"
                  className="w-[86px] h-[86px] rounded-full "
                />
                <div className="mt-2">
                  <h6 className="text-xs text-white font-roboto font-medium">
                    TRUREVUⓒ
                  </h6>
                  <h6 className="text-xs text-white font-roboto font-medium">
                    Jon jon 2334YT9
                  </h6>

                  <div className="flex gap-1 items-start">
                    <div className="flex gap-1 mt-1">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <img
                          src="/images/Star.svg"
                          className="w-[10px]  h-[10px]"
                        />
                      ))}
                    </div>
                    <span className="text-white block text-center  font-roboto font-bold text-[15px]">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-[15px] items-center">
                  <div>
                    <span className="text-white block text-[20px]">
                      <span className="font-bold">VAI</span>RIDATE
                    </span>
                    <button className="font-roboto font-bold text-[20px] text-white px-4 border rounded-[15px] border-white bg-[#02227E]">
                      View
                    </button>
                  </div>
                  <div className="flex gap-[38px]">
                    <button>
                      <img src="/images/phone-rounded.svg" />
                    </button>
                    <button>
                      <img src="/images/massege-rounded.svg" />
                    </button>
                  </div>
                </div>
                <div className="grid gap-[10px] grid-cols-4">
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Requested <br /> Appt/time
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Requested <br /> Appt/time
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Elapsed <br /> Time
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Status
                  </span>
                </div>
                <div className="grid gap-[10px] mt-[24px] grid-cols-4">
                  <span className="font-roboto text-white text-[10px] font-bold">
                    1/28/23 <br />
                    6:oopm-9:00pm
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    1/28/23 <br /> 4:28pm
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    3hr 46m
                  </span>
                  <span className="font-roboto text-white text-[10px] font-bold">
                    Pending
                  </span>
                </div>
              </div>
            </div>

            {requestApprove ? (
              <div className="flex items-end justify-between px-[19px] gap-[21px]">
                <div>
                  <span className="block text-[12px] font-bold font-roboto text-white">
                    Request Type
                  </span>
                  <span className="text-white block text-[20px]">
                    <span className="font-bold">VAI</span>RIDATE
                  </span>
                </div>
                <div className="flex flex-wrap items-end gap-[21px]">
                  <button
                    onClick={() => setRequestApprove(false)}
                    className="font-roboto font-bold text-[20px] text-white px-4 border rounded-[15px] border-[#02227E] bg-[#E04A22]"
                  >
                    Cancel
                  </button>
                  <button className="font-roboto font-bold text-[20px] text-white px-4 border rounded-[15px] border-white bg-[#02227E]">
                    View
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 mt-3 items-end justify-between px-2 smpx-[19px] gap-2 md:gap-[21px]">
                <button
                  onClick={() => setRequestApprove(true)}
                  className="font-mulish font-extrabold text-[16px] sm:text-[20px] text-center text-[#02227E] px-4 border rounded-[15px] border-[#02227E] bg-[#13A307]"
                >
                  Approve
                </button>
                <button className="font-mulish font-extrabold text-[16px] sm:text-[20px] text-center text-[#02227E] px-4 border rounded-[15px] border-[#02227E] bg-[#FFC020]">
                  Modify
                </button>
                <button className="font-mulish font-extrabold text-[16px] sm:text-[20px] text-center text-[#02227E] px-4 border rounded-[15px] border-[#02227E] bg-[#DB3002]">
                  Deny
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;
