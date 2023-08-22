import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function ESignAndSend() {
    const navigate = useNavigate();
    const navigateToAcceptDeny = () => {
        navigate("/accept-deny");
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
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 154.png'} alt="Hot Rod" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Hot Rod</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-7'>
                    <div><span className='font-bold text-[25px]'>CONTRACT</span></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <div className='w-[200px] h-[200px]'><img src={process.env.PUBLIC_URL + '/images/ESignatureIcon.png'} alt="ESignature Icon" /></div>
                </div>
                <div style={{marginTop: '120px', marginBottom: '30px'}} className='w-full mx-auto flex flex-col justify-center items-center'>
                    <Button onClick={() => navigateToAcceptDeny()} text="E-Sign & Send" className={'bg-[#05B7FD] rounded-[25px] font-bold text-[23.4px] text-[#01195C] shadow-2xl'} />
                </div>
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <div className='mr-14'><img src={process.env.PUBLIC_URL + '/images/MessageIcon.png'} alt="Message Icon" /></div>
                    <div className=''><img src={process.env.PUBLIC_URL + '/images/PhoneCallIcon.png'} alt="Phone Call Icon" /></div>
                </div>
            </div>
        </div>
    );
}