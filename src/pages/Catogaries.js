import React, { Component } from "react";
import Slider from "react-slick";
import Sidebarnav from "../Components/Sidebarnav";
import { Link } from "react-router-dom";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div>
        <div className="max-w-[820px] mx-auto">
          <Sidebarnav />
          <div className="bg-white pb-2 h-[80%] w-full rounded-[50px] mt-5  py-8">
            <div className=" mx-auto items-center p-5">
              <div className="px-3 mx-auto">
                <p className="text-center text-[25px] font-bold pb-3">
                  Independent
                </p>
                <Slider {...settings}>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 15.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Model
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 16.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Massage
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 15.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Model
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 16.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Massage
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className=" mx-auto items-center p-5">
              <div className="px-3 mx-auto">
                <p className="text-center text-[25px] font-bold pb-3">
                  Business / Agency
                </p>
                <Slider {...settings}>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 15.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Model
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 16.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Massage
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 15.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Model
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-[90%] ">
                      <img src="images/image 16.svg" className="w-full" alt />
                      <div className="bg-[#02227E] py-2 text-center">
                        <Link
                          className="text-white text-[16px]"
                          to="/Prefrence"
                        >
                          Massage
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto pt-6 pb-4">
            <img src="images/Group.svg" alt />
          </div>
        </div>
      </div>
    );
  }
}
