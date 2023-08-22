import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function VerifiedAcceptDeny() {
    const navigate = useNavigate();
    const navigatetoCongratulations = () => {
        navigate("/sugar-congratulations");
    }
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
                <div className='w-full mx-auto flex flex-col items-center justify-center mt-20 relative'>
                    <div className='flex-1'><img src={process.env.PUBLIC_URL + '/images/VerifiedBackgroundImg.png'} alt="Verified Background Image" /></div>
                    <div className='absolute top-0'><img src={process.env.PUBLIC_URL + '/images/VerifiedMember.png'} alt="Verified Member" /></div>
                    <div style={{top: '30px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/VerifiedMarkIcon.png'} alt="Verified Mark Icon" /></div>
                    <div className='flex flex-col justify-center items-center h-[105px]'><div className='flex items-center justify-center'><span className='font-normal text-[32px]'>Sugar has been</span></div><div className='flex items-center justify-center'><span className='font-bold text-[32px] text-[#13A307]'>"verified"</span></div></div>
                </div>
                <div style={{marginBottom: '60px'}} className='w-full mx-auto flex flex-row justify-center items-center flex-wrap mt-6'>
                    <div className='w-[100px] mr-8 mb-2'><Button onClick={() => navigatetoCongratulations()} text="Accept" className={'bg-gradient-to-b from-[#02227E] to-[#0247FF] text-white font-bold text-[24px] rounded-[25px] border-2 border-[#0247FF]'} size="45px" /></div>
                    <div className='w-[100px] mb-2'><Button onClick={() => navigatetoCongratulations()} text="Deny" className={'focus:bg-gradient-to-b focus:from-[#02227E] focus:to-[#0247FF] focus:text-white bg-transparent font-bold text-[24px] text-[#0247FF] rounded-[25px] border-2 border-[#0247FF]'} size="45px" /></div>
                </div>
            </div>
        </div>
    );
}