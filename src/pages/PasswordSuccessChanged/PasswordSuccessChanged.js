import React from 'react';

export default function PasswordSuccessChanged() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-cener pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#05B7FD]'>Date Guard</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[67px] h-[82px]'><img src={process.env.PUBLIC_URL + '/images/DateGuardMask.png'} alt="Date Guard Mask" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center mt-9'><span className='font-bold text-[30px] text-[#05B7FD]'>Codes Successfully Changed</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-12 mb-20'><div className='flex-1 flex items-center justify-center'><img src={process.env.PUBLIC_URL + '/images/DateGuardSuccessCodeMark.png'} alt="Verification Success Mark Icon" /></div></div>
            </div>
        </div>
    );
}