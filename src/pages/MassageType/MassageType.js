import React from 'react';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';

export default function MassageType() {
    const options = ["Independent", "Independent1", "Independent2", "Independent3"];
    const locationOptions = ["Current Location", "USA", "United Kingdom", "France"];
    const locationOptions2 = ["Radious", "Radious2", "Radious3", "Radious4"];
    const countryOptions = ["Country", "United States", "United Kingdom", "France"];
    const cityOptions = ["New York", "Washington", "London", "Paris"];
    const genderOptions = ["Female", "Male"];
    const orientationOptions = ["W4M", "W6M", "W8M"];
    const callOptions = ["Incall", "OutCall"];
    const trurevuOption1 = ["1.5", "2.5", "3.5", "4.5", "5.5"];
    const trurevuOption2 = ["1.0", "2.0", "3.0", "4.0", "5.0"];
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[30px]'>Massage</span></div>
                <div className='w-[100vw] flex items-center justify-center bg-gradient-to-b from-[#02227E] to-[#0247FF] mt-2'><span className='font-bold text-[24px] text-white'>Type</span></div>
                <div className='w-[208px] mx-auto flex items-center justify-center mt-4'>
                    <SelectBox options={options} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' />
                </div>
                <div className='w-[100vw] flex items-center justify-center bg-gradient-to-b from-[#02227E] to-[#0247FF] mt-4'><span className='font-bold text-[24px] text-white'>Search</span></div>
                <div className='w-full mx-auto flex items-center justify-start mt-2'><span className='font-bold text-[18px]'>Favorite Locations</span></div>
                <div className='w-full mx-auto flex items-center justify-between'>
                    <div className='flex items-center justify-center relative mr-4'>
                        <div className='absolute left-[5px] top-[14px] z-20'><img src={process.env.PUBLIC_URL + '/images/LocationMask.png'} alt="Location Mask Icon" /></div>
                        <div><SelectBox options={locationOptions} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' pl="pl-6" /></div>
                    </div>
                    <div className='w-[140px]'><SelectBox options={locationOptions2} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' px='px-2' textAlign="text-left" /></div>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[223px]'><Button className={'flex items-center justify-center bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[10px] h-[35px] font-bold text-[20px] text-white'} size="35px" text="Add/Search Location" /></div></div>
                <div className='w-full mx-auto flex flex-col items-center justify-center mt-4'>
                    <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[16px]'>Search</span></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center'>
                        <div className='w-[155px] mr-4'><SelectBox options={countryOptions} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' /></div>
                        <div className='w-[155px]'><SelectBox options={cityOptions} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' /></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><div className='w-[149px]'><Button className={'flex items-center justify-center bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[10px] h-[35px] font-bold text-[20px] text-white'} size="35px" text="Save location" /></div></div>
                <div className='w-full mx-auto flex items-center justify-between mt-4'>
                    <div className='flex flex-col justify-center items-start mr-4'>
                        <div><span className="font-bold text-[18px]">Sex</span></div>
                        <div className='flex items-center justify-center relative mr-4'>
                            <div className='absolute left-[5px] top-[10px] z-20'><img src={process.env.PUBLIC_URL + '/images/MaskSexIcon.png'} alt="Mask Sex Icon" /></div>
                            <div className='w-[150px]'><SelectBox size="43px" options={genderOptions} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' pl="pl-6" /></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <div><span className='font-bold text-[18px]'>Orientation</span></div>
                        <div className='flex items-center justify-center relative'>
                            <div className='absolute left-[5px] top-[10px] z-20'><img src={process.env.PUBLIC_URL + '/images/MaskOrientationIcon.png'} alt="Mask Orientation Icon" /></div>
                            <div className='w-[150px]'><SelectBox size="43px" options={orientationOptions} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' pl="pl-6" /></div>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4'>
                    <div className="flex flex-col justify-center items-center mr-4"><div><span className='font-bold text-[18px]'>Venue</span></div><div className='w-[130px]'><SelectBox options={callOptions} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' /></div></div>
                    <div className='flex flex-col justify-center items-center'>
                        <div><span className='font-bold text-[18px]'>TRUREVU</span></div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='w-[85px]'><SelectBox options={trurevuOption1} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white' /></div>
                            <div><span className='font-bold text-[14px] text-[#01195C] mx-2'>to</span></div>
                            <div className='w-[85px]'><SelectBox options={trurevuOption2} backgroundColor="bg-gradient-to-b from-[#02227E] to-[#0247FF]" rounded="rounded-[10px]" borderNone size="43px" textColor="text-white" fontWeight='font-bold' textSize="text-[20px]" arrowColor='text-white'/></div>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col items-center justify-center mt-8'>
                    <div className='w-full shadow-2xl'><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E]'} text="Send invitation & Save To Favorites" size="35px" /></div>
                    <div className='w-full shadow-2xl mt-4'><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E]'} text="Search & Save To Favorites" size="35px" /></div>
                    <div className='w-full flex flex-row justify-between items-center mt-6'><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E] mr-6 shadow-2xl'} text="Search" size="35px" /><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E] shadow-2xl'} text="Send invitation" size="35px" /></div>
                    <div className='w-full shadow-2xl mt-6'><Button className={'flex items-center justify-center border-[1px] border-[#05B7FD] rounded-[10px] bg-gradient-to-b from-[#02227E] to-[#0247FF] font-bold text-[26px] text-white'} text="Advanced Search" size="45px" /></div>
                </div>
            </div>
        </div>
    );
}