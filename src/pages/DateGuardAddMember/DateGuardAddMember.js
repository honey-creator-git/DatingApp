import React from 'react';
import Button from '../../components/Button';

export default function DateGuardAddMember() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px] text-[#05B7FD]'>Date Guard</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[67px] h-[82px]'><img src={process.env.PUBLIC_URL + '/images/DateGuardMask.png'} alt="Date Guard Mask" /></div></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><span className='font-bold text-[30px] text-white'>Atlanta</span></div>
                <div style={{marginBottom: '200px'}} className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <div className='relative mt-5'><div style={{left: '2px'}} className='absolute w-[44px] z-20'><Button text="+" className='font-bold text-[35px] rounded-[50%] bg-[#05B7FD] h-[44px] flex items-center justify-center' size="44px" /></div><div className='relative w-[245px] h-[45px] bg-[#4200FF] rounded-[25px] border-2 border-[#4200FF]'><span style={{left: '20px'}} className='font-bold text-[24px] text-white relative'>Add/Members</span></div></div>
                </div>
            </div>
        </div>
    );
}