import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import InputText from '../../components/InputText';

export default function BusinessRateServices() {
    const currencyOptions = ["Currency", "USD", "EUR", "INR", "FDP"];
    const hoursOptions = ["1 Hour", "2 Hour", "3 Hour", "4 Hour", "5 Hour"];
    const navigate = useNavigate();
    const [currency, setCurrency] = useState("Currency");
    const [firstHour, setFirstHour] = useState("1 Hour");
    const [secondHour, setSecondHour] = useState("1 Hour");
    const [thirdHour, setThirdHour] = useState("1 Hour");
    const changeCurrency = (e) => {
        setCurrency(e.target.value);
    }
    const handleFirstHourChange = (e) => {
        setFirstHour(e.target.value);
    }
    const handleSecondHourChange = (e) => {
        setSecondHour(e.target.value);
    }
    const handleThirdHourChange = (e) => {
        setThirdHour(e.target.value);
    }
    const navigateToBusinessServices = () => {
        navigate('/business-services');
    }

    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-7'>
                <span className='font-extrabold text-[27px]'>Business <br />Rate & Services</span>
            </div>
            <div className='w-full mx-auto flex flex-row justify-center items-center pt-2'>
                <div className='w-[90px]'><Button text="View" size="30px" className='flex items-center justify-center font-bold text-[21.6px] text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl' /></div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-between items-center'>
                <div><span className='font-extrabold text-[12.6px]'>Set Currency</span></div>
                <div className="w-[130px] flex flex-col justify-center items-center"><SelectBox options={currencyOptions} value={currency} onChange={(e) => changeCurrency(e)} borderNone shadowNone textColor="text-[#026EFF]" borderWidth="border-2" borderColor="border-white" size="40px" pr="pr-12" /></div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-5'>
                <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-extrabold text-[12.6px]'>Title of service</span></div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'><InputText className={'rounded-none'} bgColor='white' border='#D9D9D9' /></div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-5'>
                <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-extrabold text-[12.6px]'>Description of service</span></div>
                <textarea rows="3"
                    className="block p-2.5 w-full text-[15px] text-gray-900 rounded-sm border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-[white] focus-visible:border-0 mt-2"
                    placeholder="">
                </textarea>
            </div>
            <div className='w-full mx-auto flex flex-row justify-start items-center mt-9'>
                <div className='w-[120px] flex flex-col justify-center items-center mr-2'><SelectBox options={hoursOptions} value={firstHour} onChange={(e) => handleFirstHourChange(e)} borderWidth='border-2' borderColor='border-white' textSize='text-[12.6px]' fontWeight='font-bold' /></div>
                <div className='w-[120px] flex flex-col justify-center items-center mr-2'><SelectBox options={hoursOptions} value={secondHour} onChange={(e) => handleSecondHourChange(e)} borderWidth='border-2' borderColor='border-white' textSize='text-[12.6px]' fontWeight='font-bold' /></div>
                <div className='w-[120px] flex flex-col justify-center items-center'><SelectBox options={hoursOptions} value={thirdHour} onChange={(e) => handleThirdHourChange(e)} borderWidth='border-2' borderColor='border-white' textSize='text-[12.6px]' fontWeight='font-bold' /></div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-start items-center mt-7'>
                <div><span className='font-bold text-[9px] mr-2'>Time Hr/Price 1</span></div>
                <div><span className='font-bold text-[9px] mr-2'>Time Hr/Price 2</span></div>
                <div><span className='font-bold text-[9px] mr-2'>Time Hr/Price 3</span></div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-start items-center mt-9'>
                <div className='w-[180px]'><Button text="Set Description of services >" className={'font-extrabold text-[12.6px] text-[#073FE1] bg-transparent shadow-none border-b-2 border-b-[#073FE1] rounded-none'} size='20px' /></div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-7'>
                <div className='w-[167px] mr-2 mb-4'><Button text="Enter" className={'bg-[#05B7FD] text-[18px] text-[#040C50] font-bold'} /></div>
                <div className='w-[167px] mb-4'><Button onClick={() => navigateToBusinessServices()} text="Exit Set Up" className={'bg-[#05B7FD] text-[18px] text-[#040C50] font-bold'} /></div>
            </div>
        </div>
    );
}