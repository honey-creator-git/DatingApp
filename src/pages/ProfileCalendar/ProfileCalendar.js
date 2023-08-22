import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function SetProfileCalendar() {
    const navigate = useNavigate()

    const handleViewCalendar = () => {
        navigate("/calendar");
    }

    const handleEditSchedules = () => {
        navigate("/schedule")
    }

    const hanldeEditRules = () => {
        navigate("/set-rules")
    }

    const handleSyncCalendar = () => {
        navigate("/sync-calendar")
    }

    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-custom-24">
                <div className='w-full flex flex-col justify-center items-center'>
                    <div><span className='font-extrabold text-[27px]'>Calendar</span></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <div className='w-[302px] mt-8'><Button onClick={() => handleViewCalendar()} className={'border-2 border-[#040C50] font-medium text-[36px] text-white px-4 p-2'} text="View Calendar" size="89px" bgColor={'[#3760CB]'} /></div>
                    <div className='w-[302px] mt-8'><Button onClick={() => handleEditSchedules()} className={'border-2 border-[#040C50] font-medium text-[36px] text-white px-4 p-2'} text="Edit Schedules" size="89px" bgColor={'[#3760CB]'} /></div>
                    <div className='w-[302px] mt-8'><Button onClick={() => hanldeEditRules()} className={'border-2 border-[#040C50] font-medium text-[36px] text-white px-4 p-2'} text="Edit Rules" size="89px" bgColor={'[#3760CB]'} /></div>
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