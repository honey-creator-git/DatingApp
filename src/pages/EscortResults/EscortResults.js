import React from 'react';

const EscortResults = () => {
    const escort_results = [
        {
            'img': '/images/Escort-1.png',
        },
        {
            'img': '/images/Escort-2.png',
        },
        {
            'img': '/images/Escort-3.png',
        },
        {
            'img': '/images/Escort-4.png',
        },
        {
            'img': '/images/Escort-5.png',
        },
        {
            'img': '/images/Escort-6.png',
        },
        {
            'img': '/images/Escort-7.png',
        },
        {
            'img': '/images/Escort-8.png',
        },
    ];
    return (
        <div>
            <div className='pt-2'>
                <p className='text-[28px] text-[#02227E] font-bold text-center'>Escort Results</p>
                <div className='bg-linear-gradient h-[40px]  mb-3 mt-3'></div>
                <div className='flex flex-wrap justify-center sm:justify-center gap-2 sm:gap-4'>
                    {escort_results.map((data, index) => (
                        <div data-index={index} className='rounded-2xl px-4 pt-2 bg-gradient-to-b from-[#0247FF] to-[#fff] mb-4 w-[47%] max-w-[190px]'>
                            <div className='flex justify-center flex-col'>
                                <img src={data.img} alt="" className='rounded-2xl' />
                                <div className='text-center'>
                                    <p className='text-[12px] text-[#000] font-bold'>TRUREVU <span className='text-[8px]'>ⓒ</span> <br /> Sugar / ID# <span>5SES168</span></p>
                                    <div className='flex items-center justify-center gap-1'>
                                        <img src="images/Star.svg" alt="" />
                                        <img src="images/Star.svg" alt="" />
                                        <img src="images/Star.svg" alt="" />
                                        <img src="images/Star.svg" alt="" />
                                        <img src="images/Star.svg" alt="" />
                                        <span className='text-[#000] font-bold'>5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EscortResults;
