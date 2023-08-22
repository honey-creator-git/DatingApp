import React from 'react';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Carousel from '../../components/Carousel';
import { useNavigate } from 'react-router-dom';

export default function MyVairipayRequest() {
    const vairipayOptions = ['/images/VairipayPaypal.png', '/images/VairipayApplePay.png', '/images/VairipayVenmo.png', '/images/VairipayPaypal.png', '/images/VairipayApplePay.png', '/images/VairipayVenmo.png']
    const description = ['Click Here', 'Click Here', 'Click Here', 'Click Here', 'Click Here', 'Click Here']
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/my-vairipay-apple-request-qr')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-2">
                {/* <div className='w-full mx-auto flex items-center justify-center'>
                    <img src={process.env.PUBLIC_URL + '/images/VairipayAddLogo.png'} alt="Vairipay Add Logo" />
                </div> */}
                {/* <div className='w-full mx-auto flex flex-row justify-center items-center mt-6'>
                    <div className='flex flex-col justfy-center items-center'>
                        <div className='h-[40px]'><img src={process.env.PUBLIC_URL + '/images/VairipaySugar.png'} alt="Vairipay Sugar" /></div>
                        <div className='h-[15px] flex justify-center items-center'><span className='font-bold text-[10px]'>Sugar</span></div>
                        <div className='h-[15px] flex justify-center items-center'><span className='font-bold text-[10px] text-[#01195C]'>ID#658H39</span></div>
                    </div>
                    <button onClick={() => handleSubmit()}>
                        <div className='w-[150px] h-[47px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#0C8A02] flex flex-col justify-center items-center'>
                            <div className='font-bold text-[10px]'>Sugar has requested</div>
                            <div className='font-bold text-[20px]'>$25.00</div>
                        </div>
                    </button>
                </div> */}
                <div className='w-full mx-auto flex flex-row justify-center items-start'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-medium'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '0px', bottom: '80px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 121.png'} alt="Sugar" /></div>
                        <div style={{right: '4px', top: '6px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/SugarIcon2.png'} alt="Sugar Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-light'>REVU<span className='text-[10px] text-[#040C50] font-light'>ⓒ</span></span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center relative bottom-3'>
                    <div><span className='font-bold text-[24px]'>Sugar</span></div>
                    <div className='mt-2'><img src={process.env.PUBLIC_URL + '/images/MaskGroup.png'} alt="Mask Group" /></div>
                    <button onClick={() => handleSubmit()}>
                        <div className='w-[150px] h-[47px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#0C8A02] flex flex-col justify-center items-center'>
                            <div className='font-bold text-[10px]'>Sugar has requested</div>
                            <div className='font-bold text-[20px]'>$25.00</div>
                        </div>
                    </button>
                </div>
                <div style={{width: '100vw'}} className='flex flex-col justsify-center items-center mt-2 bg-[#040C50] px-4 shadow-2xl'>
                    <Carousel images={vairipayOptions} des={description} vairipay={'true'} />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-8 bg-[#3760CB] h-[98px] rounded-full px-14 shadow-2xl'>
                    <span className='text-center'>
                        <span className='font-bold text-[14px] text-white'>Our system has detected shared apps with Sugar. To use </span>
                        <span className='font-extrabold text-[18px] text-white'>VAI</span>
                        <span className='font-light text-[18px] text-white'>RIPAYⓒ </span>
                        <span className='font-bold text-[14px] text-white'>please click an icon above</span>
                    </span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='relative top-4'><img src={process.env.PUBLIC_URL + '/images/VAIRIPAYⓒ.png'} alt="Vairipay text"/></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/Vairipay1.png'} alt="Vairipay First"/></div>
                        <div className='relative bottom-6'><span className='text-[18px] font-bold'>P2P APPS</span></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='relative top-4'><img src={process.env.PUBLIC_URL + '/images/VAIRIPAYⓒ.png'} alt="Vairipay text"/></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/Vairipay2.png'} alt="Vairipay Second"/></div>
                        <div className='relative bottom-6'><span className='text-[18px] font-bold'>Golden Rose Tokens</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}