import React from "react";

const appointmentHistory = [
  {
    img: "/images/Ellipse75.png",
    date: "1/03/23",
    time:"3:00pm",
    id: "89475NM98",
  },
  {
    img: "/images/AdminNotificaitonUser2.png",
    date: "1/03/23",
    time:"3:00pm",
    id: "89475NM98",
  },
  {
    img: "/images/AdminFollowing3.png",
    date: "1/03/23",
    time:"3:00pm",
    id: "89475NM98",
  },
  {
    img: "/images/Ellipse 77.png",
    date: "1/03/23",
    time:"3:00pm",
    id: "89475NM98",
  },
  {
    img: "/images/Ellipse142.png",
    date: "1/03/23",
    time:"3:00pm",
    id: "89475NM98",
  },
];

const AppointmentHistory = () => {
  return (
    <div className="main-content pt-[34px] rounded-[20px] pb-[45px] bg-[#D5D6E0]">
      <div className="flex flex-col justify-between">
        <div className="mt-2 bg-[#040C50]/[26%] w-full ">
          <h2 className="font-bold text-[26px] text-[#02227E] font-inter ">
            Appointment History
          </h2>
        </div>
        <div className="px-[14px] flex flex-col gap-4 mt-[61px]">
          {appointmentHistory.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#3760CB]/[83%]  shadow-xl px-2 py-2 rounded-full border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="flex-none">
                    <img src={item.img} className="w-[64px] h-[64px]" />
                  </div>
                  <div className="flex flex-1 justify-between items-center">
                    <div className="">
                      <h6 className="text-xs text-white font-roboto font-medium">
                        TRUREVUⓒ
                      </h6>
                      <h6 className="text-xs text-white font-roboto font-medium">
                        Hot Rod <br /> 98UY778
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
                        <span className="text-[#02227E] block text-center  font-roboto font-bold text-[15px]">
                          5.0
                        </span>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-[14px] font-roboto font-bold text-white">
                      {item.date}<br/>{item.time}
                      </h6>
                    </div>
                    <div>
                      <button className="font-roboto py-px flex items-center flex-col text-white px-4 border rounded-[15px] border-white bg-[#02227E]">
                        <span className="underline  text-[12px] font-[400]">
                         {item.id}
                        </span>
                        <span className=" font-bold leading-[14px] text-[16px]">
                          {" "}
                          Details
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
