import React from 'react';
import Button from '../../components/Button';

export default function DateGuardSelectGroup() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#05B7FD]'>Date Guard</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[67px] h-[82px]'><img src={process.env.PUBLIC_URL + '/images/DateGuardMask.png'} alt="Date Guard Mask" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><span className='font-bold text-[30px] text-[#D9D9D9]'>SELECT GROUP</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-12'>
                    <div className='w-[262px]'><Button text="Edit/Select Groups" className={'bg-[#4200FF] rounded-[25px] font-bold text-[24px] text-[#D9D9D9]'} size="43px" /></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-7 mb-20'>
                    <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap'>
                        <div className='w-[34px] h-[34px] rounded-[50%] bg-[#05B7FD] flex items-center justify-center mr-4 mb-0'><img src={process.env.PUBLIC_URL + '/images/MathPlusMinus.png'} alt="Plus-Minus Icon" /></div>
                        <div className='w-[122px] flex flex-col justify-center items-start mr-6 mb-4'><div><span className='font-bold text-[20px] text-[#D9D9D9]'>Los Angeles</span></div><div className='w-[100px]'><Button text="Edit/Details" className={'rounded-[25px] bg-[#05B7FD] font-bold text-[14px] text-[#02227E]'} size="20px" /></div></div>
                        <div className='w-[35px] mr-4 mb-4'><span className='font-bold text-[30px] text-[#D9D9D9]'>8</span></div>
                        <div className='w-[77px] mb-4'><Button text="Select" className={'rounded-[25px] bg-[#05B7FD] font-bold text-[20px]'} size="34px" /></div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap mt-5'>
                        <div className='w-[34px] h-[34px] rounded-[50%] bg-[#05B7FD] flex items-center justify-center mr-4 mb-0'><img src={process.env.PUBLIC_URL + '/images/MathPlusMinus.png'} alt="Plus-Minus Icon" /></div>
                        <div className='w-[122px] flex flex-col justify-center items-start mr-6 mb-4'><div><span className='font-bold text-[20px] text-[#D9D9D9]'>Family</span></div><div className='w-[100px]'><Button text="Edit/Details" className={'rounded-[25px] bg-[#05B7FD] font-bold text-[14px] text-[#02227E]'} size="20px" /></div></div>
                        <div className='w-[35px] mr-4 mb-4'><span className='font-bold text-[30px] text-[#D9D9D9]'>5</span></div>
                        <div className='w-[77px] mb-4'><Button text="Select" className={'rounded-[25px] bg-[#05B7FD] font-bold text-[20px]'} size="34px" /></div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap mt-5'>
                        <div className='w-[34px] h-[34px] rounded-[50%] bg-[#05B7FD] flex items-center justify-center mr-4 mb-0'><img src={process.env.PUBLIC_URL + '/images/MathPlusMinus.png'} alt="Plus-Minus Icon" /></div>
                        <div className='w-[122px] flex flex-col justify-center items-start mr-6 mb-4'><div><span className='font-bold text-[20px] text-[#D9D9D9]'>Atlanta</span></div><div className='w-[100px]'><Button text="Edit/Details" className={'rounded-[25px] bg-[#05B7FD] font-bold text-[14px] text-[#02227E]'} size="20px" /></div></div>
                        <div className='w-[35px] mr-4 mb-4'><span className='font-bold text-[30px] text-[#D9D9D9]'>10</span></div>
                        <div className='w-[77px] mb-4'><Button text="Select" className={'rounded-[25px] bg-[#05B7FD] font-bold text-[20px]'} size="34px" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}