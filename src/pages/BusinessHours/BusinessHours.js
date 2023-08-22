import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import InputText from '../../components/InputText';

export default function BusinessHours() {
    const navigate = useNavigate();
    const times = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"]
    const zones = ["A.M", "P.M"];

    useEffect(() => {

    });

    return (
        <div id="schedule_rules" className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-10'>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <span className='font-extrabold text-[27px] text-black'>Business Hours</span>
                </div>
            </div>
            
            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Sunday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Monday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Tuesday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Wednesday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Thursday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Friday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-col justify-center items-center relative'>
                <div className='w-full mx-auto flex flex-col justify-center items-start pl-2 pb-2'><span className='font-extrabold text-[18px]'>Saturday</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center'>
                    <div className='mb-3 flex flex-row justify-center items-center'>
                        <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                    </div>
                    <div className="mx-2 mb-3"><span className="text-[16px] font-medium">To</span></div>
                    <div className="mb-3 flex flex-row justify-center items-center">
                        <div className='mr-3 flex flex-row justify-center items-center'>
                            <div className='w-[70px]'><SelectBox options={times} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                            <div className='w-[70px]'><SelectBox options={zones} px='px-2' pr="pr-6" size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' borderColor="border-white" /></div>
                        </div>
                        <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                    </div>
                </div>
            </div>
            <div className='w-[364px] flex flex-row justify-between items-center mt-6'>
                <Button text="Skip>>" className={'text-[#040C50] mr-6 bg-transparent shadow-none font-bold text-[23.4px]'} />
                <Button text="Finshed" className={'text-[#040C50] font-bold text-[23.4px]'} />
            </div>
        </div>
    );
}