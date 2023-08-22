import React, { useState } from 'react';
import TimePicker from '../../components/TimePicker';
import Button from '../../components/Button';

export default function DateGuardSetTimeAlarm() {
    const [range, setRange] = useState(() => 50);
    const handleRangeChange = (e) => {
        if(e.target.value < 10) {
            setRange(() => "0" + e.target.value);
        } else {
            setRange(() => "" + e.target.value);
        }
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#05B7FD]'>Date Guard</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[67px] h-[82px]'><img src={process.env.PUBLIC_URL + '/images/DateGuardMask.png'} alt="Date Guard Mask" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#D9D9D9]'>SET YOUR TIME</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-12'><TimePicker /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-14'><span className='font-bold text-[30px] text-[#D9D9D9]'>ALARM DELAY</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-12'><div className='w-[100px] h-[48px] flex items-center justify-center rounded-[25px] border-2 border-white'><span className='font-bold text-white text-[32px]'>{range}<span className='font-normal text-white text-[20px]'>min</span></span></div></div>
                <div className='w-full mx-auto flex flex-row items-center justify-center mt-9 overflow-auto'>
                    <div><span className='font-bold text-[14px] text-white'>1min</span></div>
                    <div className='w-full mx-auto flex items-center justify-center'>
                        {/* <input onChange={(e) => handleRangeChange(e)} type="range" min={1} max={59} value={range} className="w-full mx-5 h-3 bg-gray-200 rounded-lg cursor-pointer range-lg dark:bg-gray-700"></input> */}
                        {/* <Range
                            value={range}
                            step={10}
                            onChange={(e) => handleRangeChange(e)}
                        /> */}
                        <input onChange={(e) => handleRangeChange(e)} type="range" min="1" max="59" value={range} className='w-full mx-5' /> 
                    </div>
                    <div><span className='font-bold text-[14px] text-white'>59min</span></div>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-9'>
                    <div className='w-[132px]'><Button text="Select" className={'bg-[#05B7FD] rounded-[25px] text-[20px] font-bold'} size="34px" /></div>
                </div>
            </div>
        </div>
    );
}