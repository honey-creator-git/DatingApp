import React from "react";
import Slider from "react-slick";
import CarouselNextArrow from "../CarouselNextArrow";
import CarouselPrevArrow from "../CarouselPrevArrow";

export default function Carousel2({ images, des, admin, vairipay }) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
  };


  return (
    <div className="mx-auto w-11/12 py-6">
      <Slider {...settings}>
        {images?.map((item, index) => {
          return (
            <div className="mx-auto rounded-full max-w-[63px]  border-white !flex !items-center flex-col ">
              <img src={process.env.PUBLIC_URL + item.img} alt="Slide 1" className="w-[50px] h-[50px]" />
              {!!item.dis && (
                <div
                  className="w-full text-[7px] w-[10px] font-roboto-serif block font-[900] flex justify-center items-center"
                >
                  <span>{item.dis}</span>
                </div>
              )}
            </div>
          );
        })}
      
      </Slider>
    </div>
  );
}
