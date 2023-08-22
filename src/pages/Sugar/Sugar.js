import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PersonalInformationBtn from '../../components/PersonalInformationBtn';

export default function Sugar() {
    const navigate = useNavigate();
    const navigateToAboutMe = () => {
        navigate("/about-me");
    }
    const navigateToComments = () => {
        navigate("/comments");
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center ">
                <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 121.png'} alt="Sugar" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/SugarIcon2.png'} alt="Sugar Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Sugar</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <button onClick={() => navigateToComments()} className='w-[142px] h-[31px] bg-gradient-to-b from-[#FFFFFF] to-[#0C8A02] px-2 rounded-[20px]'><div className='flex flex-row justify-center items-center'><span className='mr-2 font-bold text-[16px] flex items-center justify-center'>Request</span><div className='w-[62px] h-[21px] flex items-center justify-center'><img src={process.env.PUBLIC_URL + '/images/VairipayRequestSecond.png'} alt="Vairify Request" /></div></div></button>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><PersonalInformationBtn onClick={() => navigateToAboutMe()} imgURL="/images/ContactsIcon.png" alt="Profile Contact" text="About Me" /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><PersonalInformationBtn imgURL="/images/GalleryIcon.png" alt="Gallery Info" text="Gallery" /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><PersonalInformationBtn imgURL="/images/png/find-friend.png" alt="Trurevu" text="TRUREVUⓒ" /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><PersonalInformationBtn imgURL="/images/VairipayIcon2.png" alt="Vairipay" text="VAIRIPAYⓒ " /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><PersonalInformationBtn imgURL="/images/MyVairifyIcon.png" alt="My Vairify" text="My VAIRIFY" /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><PersonalInformationBtn imgURL="/images/CalendarIcon.png" alt="Calendar" text="Calendar" /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-6 mb-20'><PersonalInformationBtn imgURL="/images/ServicesRates.png" alt="Services & Rates" text="Services & Rates" /></div>
            </div>
        </div>
    );
}