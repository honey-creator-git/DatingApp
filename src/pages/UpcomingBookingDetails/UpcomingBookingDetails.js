import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

export default function UpcomingBookingDetails() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/IntimateMassage.png'} alt="Intimate Massage" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/IntimateMassageIcon2.png'} alt="Intimate Massage Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Sugar</span>
                </div>
                <div className='w-[100vw] flex flex-col justify-center items-center mt-4 bg-[#797E9E] py-2'><span className='font-bold text-[26px] text-[#040C50]'>Pending Requests</span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <div className='w-full mx-auto flex flex-row justify-center items-center'><span className='font-extrabold text-[16px]'>Upcoming Booking Details</span></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[14px] text-[#0247FF]'>Date/Time</span></div>
                        <div><span className='font-normal text-[14px]'>1/28/23 at 4:00pm</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div className='flex flex-row justify-center items-center'><div><span className='font-bold text-[16px] text-[#0247FF] mr-2'>Service</span></div><div><span className='font-bold text-[14px]'>Escort</span></div></div>
                        <div className='flex flex-row justify-center items-center'><div><span className='font-bold text-[16px] text-[#0247FF] mr-2'>Duration</span></div><div><span className='font-bold text-[14px]'>1 hr</span></div></div>
                        <div className='flex flex-row justify-center items-center'><div><span className='font-bold text-[16px] text-[#0247FF] mr-2'>Rate</span></div><div><span className='font-bold text-[14px]'>$500</span></div></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[14px] text-[#0247FF]'>Extra's</span></div>
                        <div><span className='font-bold text-[14px]'>MSOG $50, BBBJ $50</span></div>
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
                        <div><span className='font-bold text-[16px]'>Female</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>VAIRIFY ID</span></div>
                        <div><span className='font-bold text-[17px] text-[#0247FF]'>MSOG $50, BBBJ $50</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>VAIRIDATE #</span></div>
                        <div><span className='font-bold text-[16px] text-[#0247FF]'>0046893490</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center px-2 mt-4'>
                        <div><span className='font-bold text-[16px]'>Agreed Rate for this  Appointment</span></div>
                        <div><span className='font-bold text-[16px]'>$600</span></div>
                    </div>
                    <div style={{border: '1px solid white'}} className='w-full mt-2'></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-14'>
                    <div className='w-[104px] mr-2 mb-2'><Button text="Approve" className={'rounded-[20px] bg-[#13A307] border-2 border-[#02227E] font-extrabold text-[16px] text-[#02227E]'} size="33px" /></div>
                    <div className='w-[104px] mr-2 mb-2'><Button text="Modify" className={'rounded-[20px] bg-[#FFC020] border-2 border-[#02227E] font-extrabold text-[16px] text-[#02227E]'} size="33px" /></div>
                    <div className='w-[104px] mb-2'><Button text="Deny" className={'rounded-[20px] bg-[#DB3002] border-2 border-[#02227E] font-extrabold text-[16px] text-[#02227E]'} size="33px" /></div>
                </div>
            </div>
        </div>
    );
}