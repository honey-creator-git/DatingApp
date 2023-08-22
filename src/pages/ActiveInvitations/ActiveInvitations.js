import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function ActiveInvitation() {
    const navigate = useNavigate();
    const navigateToQRScan = () => {
        navigate("/qr-scan");
    }

    return (
        <div className='main-container'>
            <div className="w-full mx-auto flex flex-col justify-center items-center">
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
                <div className='w-[100vw] flex flex-col justify-center items-center mt-4 bg-[#797E9E] py-2'><span className='font-bold text-[26px] text-[#040C50]'>Active Invitations</span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <div className='w-full mx-auto flex flex-row justify-center items-center'><span className='font-extrabold text-[16px]'>Upcoming Booking Details</span></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[14px] text-[#0247FF]'>Date/Time</span></div>
                        <div><span className='font-normal text-[14px]'>1/28/23 at 4:00pm - 10:00pm</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div className='flex flex-row justify-center items-center'><div><span className='font-bold text-[16px] text-[#0247FF] mr-2'>Service</span></div><div><span className='font-bold text-[14px]'>Escort</span></div></div>
                        <div className='flex flex-row justify-center items-center'><div><span className='font-bold text-[16px] text-[#0247FF] mr-2'>Duration</span></div><div><span className='font-bold text-[14px]'>1.5 hr</span></div></div>
                        <div className='flex flex-row justify-center items-center'><div><span className='font-bold text-[16px] text-[#0247FF] mr-2'>Rate</span></div><div><span className='font-bold text-[14px]'>$500</span></div></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[14px] text-[#0247FF]'>Service</span></div>
                        <div><span className='font-bold text-[14px]'>MSOG, BBBJ, GFE, Massage</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[14px] text-[#0247FF]'>Outcall</span></div>
                        <div><span className='font-bold text-[14px]'>1439 Inverness Miami FI 34598</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <div className='w-full mx-auto flex flex-row justify-center items-center'><span className='font-extrabold text-[16px]'>Hot Rod Details</span></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>Gender</span></div>
                        <div><span className='font-bold text-[16px]'>Male</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>VAIRIFY ID</span></div>
                        <div><span className='font-bold text-[17px] text-[#0247FF]'>ID#  658H39P</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>VAIRIDATE #</span></div>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>0046893490</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px]'>Total offered for this appointment.</span></div>
                        <div><span className='font-bold text-[16px]'>$600</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-14'>
                    <div className='w-[154px] mr-2 mb-2'><Button onClick={() => navigateToQRScan()} text="Cancel" className={'rounded-[20px] bg-[#E04A22] border-2 border-[#02227E] font-extrabold text-[16px] text-white'} size="36px" /></div>
                    <div className='w-[154px] mr-2 mb-2'><Button onClick={() => navigateToQRScan()} text="Accepted" className={'rounded-[20px] bg-[#02227E] border-2 border-[#02227E] font-extrabold text-[16px] text-white'} size="36px" bgColor={'[#02227E]'} /></div>
                </div>
            </div>
        </div>
    );
}