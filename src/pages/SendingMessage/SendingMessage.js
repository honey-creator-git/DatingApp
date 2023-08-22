import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

export default function SendingMessage() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
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
                <div className='w-[100vw] flex flex-col justify-center items-center mt-4 bg-[#797E9E] py-2'><span className='font-bold text-[26px] text-[#040C50]'>Pending Requests</span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4 bg-[#316AFF] border-2 border-[#0247FF] rounded-[20px] px-6 py-6'>
                    <div className='font-bold text-[20px] text-white'><span>Would you like to write</span><br /><span>Hot Rod a message</span></div>
                    <textarea rows="3"
                        className="block p-2.5 w-full text-[20px] text-gray-900 rounded-[20px] border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-white focus-visible:border-0 mt-6"
                        placeholder="">
                    </textarea>
                    <div className='w-[94px] mt-6'><Button text="Deny" className="bg-[#DB3002] font-extrabold text-[16px] rounded-[25px] text-white" size="33px" /></div>
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
                <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-14'>
                    <div className='w-[104px] mr-2 mb-2'><Button text="Approve" className={'rounded-[20px] bg-[#13A307] border-2 border-[#02227E] font-extrabold text-[16px] text-[#02227E]'} size="33px" /></div>
                    <div className='w-[104px] mr-2 mb-2'><Button text="Modify" className={'rounded-[20px] bg-[#FFC020] border-2 border-[#02227E] font-extrabold text-[16px] text-[#02227E]'} size="33px" /></div>
                    <div className='w-[104px] mb-2'><Button text="Deny" className={'rounded-[20px] bg-[#DB3002] border-2 border-[#02227E] font-extrabold text-[16px] text-[#02227E]'} size="33px" /></div>
                </div>
            </div>
        </div>
    );
}