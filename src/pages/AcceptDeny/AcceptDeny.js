import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function AcceptDeny() {
    const navigate = useNavigate()
    const navigateToVerifiedAcceptDeny = () => {
        navigate("/verified-accept-deny");
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
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-10'>
                    <div className='w-[170px] mb-2 mr-4'><img src={process.env.PUBLIC_URL + '/images/Accept1.png'} alt="Accept and Deny Item" /></div>
                    <div className='w-[170px] mb-2 mr-4'><img src={process.env.PUBLIC_URL + '/images/Accept2.png'} alt="Accept and Deny Item" /></div>
                </div>
                <div style={{marginBottom: '20px'}} className='w-full mx-auto flex flex-row justify-center items-center flex-wrap mt-14'>
                    <div className='w-[110px] mr-8 mb-2'><Button onClick={() => navigateToVerifiedAcceptDeny()} text="Accept" className={'flex items-center justify-center bg-gradient-to-b from-[#02227E] to-[#0247FF] text-white font-bold text-[24px] rounded-[25px] border-2 border-[#0247FF]'} size="45px" /></div>
                    <div className='w-[110px] mb-2'><Button onClick={() => navigateToVerifiedAcceptDeny()} text="Deny" className={'flex items-center justify-center focus:bg-gradient-to-b focus:from-[#02227E] focus:to-[#0247FF] focus:text-white bg-transparent font-bold text-[24px] text-[#0247FF] rounded-[25px] border-2 border-[#0247FF]'} size="45px" /></div>
                </div>
            </div>
        </div>
    );
}