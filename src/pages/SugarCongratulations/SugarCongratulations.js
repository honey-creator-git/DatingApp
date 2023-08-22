import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function SugarCongratulations() {
    const navigate = useNavigate();
    const navigateToVairidate = () => {
        navigate("/vairidate");
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
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <div className='w-[126px] h-[184px]'><img src={process.env.PUBLIC_URL + '/images/CongratulationKiss.png'} alt="Congratulations Kiss Icon" /></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[22.86px]'>Congratulations!</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <span className='font-bold text-[20px]'>Sugar</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <span className='font-normal text-[12.19px]'>Has Accepted your date</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <span className='max-w-[293px] text-center font-bold text-[15.24px] text-[#0247FF]'>
                        Be on the lookout for any special instructions you may receive, we are 
                        a one touch secure voice communication
                        THANK YOU FOR BEING PART OF THE 
                        VAIRIFY COMMUNITY!
                    </span>
                </div>
                <div className='w-full max-w-[278px] mx-auto flex flex-col justify-center items-center mt-6 bg-gradient-to-b from-[#0247FF] to-[#FFFFFF] rounded-[25px] px-6 py-4 text-white'>
                    <span className='text-center font-regular text-[15.24px]'>WOULD YOU LIKE TO IMPORT YOUR DATE WITH SUGAR INTO YOUR CALENDAR</span>
                    <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap mt-5'>
                        <div className='w-[100px] mr-6 mb-2'><Button onClick={() => navigateToVairidate()} text="Yes" className={'bg-gradient-to-b from-[#02227E] to-[#0247FF] text-white font-bold text-[15.24px] rounded-[25px]'} size="30px" /></div>
                        <div className='w-[100px] mb-2'><Button onClick={() => navigateToVairidate()} text="No" className={'bg-gradient-to-b from-[#02227E] to-[#0247FF] text-white bg-transparent font-bold text-[15.24px] rounded-[25px]'} size="30px" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}