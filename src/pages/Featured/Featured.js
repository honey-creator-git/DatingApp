import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Carousel2 from "../../components/Carousel-2/Carousel-2";


const vairipayOptions = [
  { img: "/images/fe (1).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (2).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (3).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (4).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (5).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (6).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (7).png", dis: "Lexi 57I90H7" },
  { img: "/images/fe (8).png", dis: "Lexi 57I90H7" },
];
const tabs = [
  { id: 1, name: "Live feed", icon: "", current: false },
  { id: 2, name: "Local Posts", icon: "", current: false },
  { id: 3, name: "FMTY", icon: "", current: true },
  {
    id: 4,
    name: " Marketplace",
    icon: "/images/marketplace-icon.png",
    current: false,
  },
];

const ladyData = [
  {
    badge: "/images/Ellipse74.png",
    name: "Crystal",
    id: "876YT58",
    image: "/images/image-2.png",
  },
  {
    badge: "/images/Ellipse74.png",
    name: "Crystal",
    id: "876YT58",
    image: "/images/image-2.png",
  },
  {
    badge: "/images/Ellipse74.png",
    name: "Crystal",
    id: "876YT58",
    image: "/images/image-2.png",
  },
  {
    badge: "/images/Ellipse74.png",
    name: "Crystal",
    id: "876YT58",
    image: "/images/image-2.png",
  },
  {
    badge: "/images/Ellipse74.png",
    name: "Crystal",
    id: "876YT58",
    image: "/images/image-2.png",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Featured = () => {
  const [selectedTab, setSelectedTab] = useState(2);
  const [selectedGrid, setSelectedGrid] = useState(1);
  return (
    <div className="main-content relative rounded-2xl overflow-hidden bg-[#D5D6E0]">
      <div className="bg-[#D5D6E0] absolute left-[50%] translate-x-[-50%] -top-[25px] w-[92px] rounded-t-[10px]">
        <span className="font-roboto text-[#02227E] font-[800] text-[16px] ">
          Featured
        </span>
      </div>
      <Carousel2 images={vairipayOptions} admin={"true"} vairipay={"false"} />
      <div className="block px-2">
        <div className="border-b border-[#02227E]/[58%]">
          <nav
            className="-mb-[3px] flex space-x-4 overflow-auto scroll-hide"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <button
                onClick={() => setSelectedTab(tab.id)}
                key={tab.id}
                className={classNames(
                  selectedTab === tab.id
                    ? "border-[#040C50]/[40%] "
                    : "border-transparent  hover:border-[#040C50]/[40%] ",
                  "whitespace-nowrap flex items-center judtify-center gap-px font-roboto-serif font-bold text-[#02227E] border-b-[5px]  px-1 text-[12px]"
                )}
              >
                {!!tab.icon && <img src={tab.icon} />}
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="px-5">
        <div className="flex mt-px items-center  justify-between">
          <span className="text-[#D9D9D9] py-[3px] pl-[23px] pr-[34px] block bg-[#02227E]/[58%] border-black border font-roboto-serif font-bold text-[12px] rounded-[5px]">
            Escort
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedGrid(1)}
              className={classNames(
                selectedGrid === 1
                  ? "border bg-[#02227E]/[32%] border-[#02227E]"
                  : "",
                "flex items-center justify-center w-[40px] h-[35px] "
              )}
            >
              <img src="/images/grid-list.svg" />
            </button>
            <button
              onClick={() => setSelectedGrid(2)}
              className={classNames(
                selectedGrid === 2
                  ? "border bg-[#02227E]/[32%] border-[#02227E]"
                  : "",
                "flex items-center justify-center w-[40px] h-[35px] "
              )}
            >
              <img src="/images/grid-2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          selectedGrid === 2 ? "grid-cols-2" : "sm:grid-cols-2",
          " max-h-[calc(100vh_-_274px)] mb-2 overflow-auto grid mt-1.5  gap-2"
        )}
      >
        {ladyData.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(
                selectedGrid === 2 ? "rounded-[14px]" : "rounded-[30px]",
                "bg-[#040C50]/[70%] py-1.5 max-w-[368px] mx-auto "
              )}
            >
              <div
                className={classNames(
                  selectedGrid === 2 ? "px-2" : " px-5",
                  "flex items-end"
                )}
              >
                <div className="flex mb-1 flex-1  items-center gap-1">
                  <img
                    src={item.badge}
                    className={classNames(
                      selectedGrid === 2
                        ? "w-[14px] h-[14px] border"
                        : "w-[26px] h-[26px] border-[2px]",
                      "rounded-full  border-white"
                    )}
                  />
                  <div>
                    <h2
                      className={classNames(
                        selectedGrid === 2 ? "text-[5.17px]" : "text-[10.8px]",
                        " text-white font-bold font-roboto"
                      )}
                    >
                      {item.name}
                    </h2>
                    <h2
                      className={classNames(
                        selectedGrid === 2 ? "text-[5.17px]" : "text-[10.8px]",
                        " text-white font-bold font-roboto"
                      )}
                    >
                      ID# {item.id}
                    </h2>
                    <div
                      className={classNames(
                        selectedGrid === 2 ? "gap-px" : "gap-1",
                        "flex items-center"
                      )}
                    >
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <img
                          src="/images/Star.svg"
                          className={classNames(
                            selectedGrid === 2
                              ? "w-[8px] h-[8px]"
                              : "w-[13px] h-[13px]"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={classNames(
                    selectedGrid === 2 ? "gap-1" : "gap-3",
                    "flex items-center mb-1 "
                  )}
                >
                  <div className="flex items-center gap-1">
                    <span
                      className={classNames(
                        selectedGrid === 2 ? "text-[6px]" : "text-[9px]",
                        " text-white font-bold font-roboto"
                      )}
                    >
                      Like
                    </span>
                    <img
                      src="/images/like.svg"
                      className={classNames(
                        selectedGrid === 2 ? "w-[8px] h-[11px]" : ""
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <span
                      className={classNames(
                        selectedGrid === 2 ? "text-[6px]" : "text-[9px]",
                        " text-white font-bold font-roboto"
                      )}
                    >
                      Comment
                    </span>
                    <img
                      src="/images/comments.svg"
                      className={classNames(
                        selectedGrid === 2 ? "w-[10px] h-[11px]" : ""
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="px-px">
                <img
                  src={item.image}
                  className={classNames(
                    selectedGrid === 2
                      ? "rounded-[12px]"
                      : "rounded-[30px]",
                    "max-w-[362px] w-full mx-auto "
                  )}
               
                />
              </div>

              <div className="mt-[5px]">
                <h2
                  className={classNames(
                    selectedGrid === 2
                      ? "text-[6px] font-medium"
                      : "text-[11px] font-bold",
                    "text-white  mx-auto max-w-[300px]  sm:max-w-auto text-center "
                  )}
                >
                  Special today until 9:30pm Massage with <br /> Happy ending
                </h2>
              </div>
              <div className="mt-2">
                <button
                  className={classNames(
                    selectedGrid === 2 ? "text-[6px] " : "text-[14px] ",
                    "border-[2px] rounded-full px-2 py-[3px] mt-0 text-white bg-[#02227E] font-roboto  border-[#0198FE]"
                  )}
                >
                  Request <span className="font-bold">VAI</span>
                  <span>RIDATE</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
