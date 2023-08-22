import React from 'react';

export default function DateGuardPasswordInput() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#05B7FD]'>Date Guard</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[67px] h-[82px]'><img src={process.env.PUBLIC_URL + '/images/DateGuardMask.png'} alt="Date Guard Mask" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center mt-9'><span className='text-center text-white font-bold text-[24px]'>We were not able to complete your Facial ID. please enter your password</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-9 mb-32'>
                    <input className='focus:outline-none focus:shadow-none border-2 border-[white] border-dashed border-t-0 border-l-0 border-r-0 h-[78px] max-w-[317px] bg-transparent text-[35px] text-center text-white' type="text" id="password" />
                </div>
            </div>
        </div>
    );
}