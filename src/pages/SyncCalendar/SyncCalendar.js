import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

export default function SyncCalendar() {
    const navigate = useNavigate();

    const navigateToCalendar = () => {
        navigate("/calendar");
    }
    const handleSaveRules = () => {
        navigate('/date-guard');
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-10'>
                <div className='w-full mx-auto flex flex-row justify-center items-center max-w-[310px]'>
                    <span>
                        <span className='w-full font-bold text-[18px] text-black'>Select the popular calendar you would like to sync your</span>
                        <br />
                        <span className='font-extrabold text-[18px] text-black'>VAI</span>
                        <span className='font-light text-[18px] text-black'>RIFY</span>
                        <span className='ml-2 font-extrabold text-[18px] text-black'>CALENDAR</span> 
                    </span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <img src={process.env.PUBLIC_URL + '/images/GoogleSync.png'} alt="Google Sync Logo" />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <img src={process.env.PUBLIC_URL + '/images/MicrosoftSync.png'} alt="Microsoft Sync Logo" />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <img src={process.env.PUBLIC_URL + '/images/AppleSync.png'} alt="Apple Sync Logo" />
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4'>
                    <div className='w-[164px] mr-3'><Button onClick={() => navigateToCalendar()} text="Calendar" className="font-bold text-[18px] text-[#040C50]" /></div>
                    <div className='w-[164px]'><Button onClick={() => handleSaveRules()} text="Save Rules" className="font-bold text-[18px] text-[#040C50]" /></div>
                </div>
            </div>
        </div>
    )
}