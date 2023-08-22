import React from 'react';
import Slider from 'react-slick';
import CarouselNextArrow from '../CarouselNextArrow';
import CarouselPrevArrow from '../CarouselPrevArrow';

export default function Carousel({images, des, admin, vairipay}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        prevArrow: <CarouselPrevArrow />,
        nextArrow: <CarouselNextArrow />
    }

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        prevArrow: <CarouselPrevArrow admin={admin} />,
        nextArrow: <CarouselNextArrow admin={admin} />
    }

    return (
        <div className="mx-auto w-11/12 py-6">
            {
            admin == 'true' ? 
            <Slider {...settings2}>
                <div className="max-w-[90px] h-[90px]">
                    <img className="w-full h-full" src={process.env.PUBLIC_URL + images[0]} alt="Slide 1" />
                </div>
                <div className="max-w-[90px] h-[90px]">
                    <img className="w-full h-full" src={process.env.PUBLIC_URL + images[1]} alt="Slide 2" />
                </div>
                <div className="max-w-[90px] h-[90px]">
                    <img className="w-full h-full" src={process.env.PUBLIC_URL + images[2]} alt="Slide 3" />
                </div>
                <div className="max-w-[90px] h-[90px]">
                    <img className="w-full h-full" src={process.env.PUBLIC_URL + images[3]} alt="Slide 4" />
                </div>
            </Slider>
            :
            <Slider {...settings}>
                <div className='flex flex-col items-center justify-between mx-auto max-w-[90px] h-[90px] rounded-xl border-2 bg-[#3760CB] border-white vairipay-item px-2 py-2'>
                    <div className='w-[43px] h-[56px]'><img className='w-full h-full' src={process.env.PUBLIC_URL + images[0]} alt="Slide 1" /></div>
                    {!!des && <div className="text-custom flex justify-center items-center" style={{background: 'transparent', color: "white"}}><span className='font-bold text-[14px]'>{des[0]}</span></div>}
                </div>
                <div className='flex flex-col items-center justify-between mx-auto max-w-[90px] h-[90px] rounded-xl border-2 bg-[#3760CB] border-white vairipay-item px-2 py-2'>
                    <div className='w-[43px] h-[56px]'><img className='w-full h-full' src={process.env.PUBLIC_URL + images[1]} alt="Slide 2" /></div>
                    {!!des && <div className="text-custom flex justify-center items-center" style={{background: 'transparent', color: "white"}}><span className='font-bold text-[14px]'>{des[1]}</span></div>}
                </div>
                <div className='flex flex-col items-center justify-between mx-auto max-w-[90px] h-[90px] rounded-xl border-2 bg-[#3760CB] border-white vairipay-item px-2 py-2'>
                    <div className='w-[43px] h-[56px]'><img className='w-full h-full' src={process.env.PUBLIC_URL + images[2]} alt="Slide 3" /></div>
                    {!!des && <div className="text-custom flex justify-center items-center" style={{background: 'transparent', color: "white"}}><span className='font-bold text-[14px]'>{des[2]}</span></div>}
                </div>
                <div className='flex flex-col items-center justify-between mx-auto max-w-[90px] h-[90px] rounded-xl border-2 bg-[#3760CB] border-white vairipay-item px-2 py-2'>
                    <div className='w-[43px] h-[56px]'><img className='w-full h-full' src={process.env.PUBLIC_URL + images[3]} alt="Slide 4" /></div>
                    {!!des && <div className="text-custom flex justify-center items-center" style={{background: 'transparent', color: "white"}}><span className='font-bold text-[14px]'>{des[3]}</span></div>}
                </div>
            </Slider>
        }
        </div>
    )
}