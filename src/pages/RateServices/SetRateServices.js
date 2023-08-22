import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function SetRateServices() {
    const navigate = useNavigate()

    const handleServices = () => {
        navigate('/client-services')
    }

    const handleRates = () => {
        navigate('/set-hourly-rate')
    }

    const handleSyncCalendar = () => {
        navigate('/sync-calendar')
    }

    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-custom-24">
                <div className='w-full flex flex-col justify-center items-center'>
                    <div><span className='font-extrabold text-[27px]'>Companion</span></div>
                    <div><span className='font-extrabold text-[27px]'>Rate & Services</span></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <div className='w-[302px] mt-8'><Button onClick={() => handleServices()} className={'border-2 border-[#040C50] font-medium text-[36px] text-white px-4 p-2'} text="Edit Services" size="89px" bgColor={'[#3760CB]'} /></div>
                    <div className='w-[302px] mt-8'><Button onClick={() => handleRates()} className={'border-2 border-[#040C50] font-medium text-[36px] text-white px-4 p-2'} text="Edit Rates" size="89px" bgColor={'[#3760CB]'} /></div>
                    <div className='w-[302px] mt-8'><Button onClick={() => handleSyncCalendar()} className={'border-2 border-[#040C50] font-medium text-[36px] text-white px-4 p-2'} text="Sync Calendar" size="89px" bgColor={'[#3760CB]'} /></div>
                </div>
                <div className='w-full mx-auto flex justify-between items-center mt-12'>
                    <div className='w-[163.8px]'><Button text='Skip>>' className='font-bold text-[23.4px] text-[#01195C] bg-transparent shadow-none focus:bg-transparent'/></div>
                    <div className='w-[163.8px]'><Button text='Submit>>' className='font-bold text-[23.4px] text-[#01195C]' /></div>
                </div>
            </div>
        </div>
    );
}