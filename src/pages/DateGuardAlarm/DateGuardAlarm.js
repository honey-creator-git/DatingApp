import React from 'react';
import Alarm from '../../components/AlarmComponent';

export default function DateGuardAlarm() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <div className='mr-4'><span className='font-bold text-[30px] text-[#4200FF]'>Date Guard</span></div>
                    <div className='w-[28px] h-[33px]'><img src={process.env.PUBLIC_URL + '/images/Mask2.png'} alt="Mark Second Logo" /></div>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'>
                    <Alarm />
                </div>
            </div>
        </div>
    )
}