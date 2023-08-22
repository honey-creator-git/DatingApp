import React from 'react';

export default function SuccessChangedCode() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#05B7FD]'>Date Guard</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-2'><div className='flex-1 flex items-center justify-center'><img src={process.env.PUBLIC_URL + '/images/DateGuardSuccessChangedCode.png'} alt="Date Guard Success Changed Code" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center mt-2'><div className='flex-1 flex items-center justify-center'><img src={process.env.PUBLIC_URL + '/images/DateGuardSuccessCodeMark.png'} alt="Verification Success Mark Icon" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center mt-2'><span className='font-bold text-[30px] text-[#05B7FD]'>Codes Successfully Changed</span></div>
            </div>
        </div>
    );
}