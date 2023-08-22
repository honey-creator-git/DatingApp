import React from 'react';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import { useNavigate } from 'react-router-dom';

export default function MyVairipay() {
    const vairipayOptions = ['/images/VairipayPaypal.png', '/images/VairipayApplePay.png', '/images/VairipayVenmo.png', '/images/VairipayPaypal.png', '/images/VairipayApplePay.png', '/images/VairipayVenmo.png']
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/my-vairipay-add')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <div className='mr-2 relative bottom-2'><span className='text-[55px] text-[#040B47] font-bold'>My</span></div>
                    <div><img src={process.env.PUBLIC_URL + '/images/Vairipay.png'} alt="Vairipay Logo" /></div>
                </div>
                <div style={{width: '100vw'}} className='flex flex-col justsify-center items-center mt-5 bg-[#040C50] px-4 shadow-2xl'>
                    <Carousel images={vairipayOptions} vairipay={'true'} />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-14'>
                    <Button onClick={() => handleSubmit()} text="Add" className='flex items-center justify-center border-[1px] border-black rounded-full max-w-[118px] text-extrabold text-[21.38px] py-2 h-[34px]' size='34' />
                </div>
                <div className='mx-auto flex flex-row justify-around items-center mt-3'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='relative top-4 mb-1'><img src={process.env.PUBLIC_URL + '/images/VAIRIPAYⓒ.png'} alt="Vairipay text"/></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/Vairipay1.png'} alt="Vairipay First" width={160} height={160} style={{maxWidth: 'none'}}/></div>
                        <div className='relative bottom-6'><span className='text-[18px] font-bold'>P2P APPS</span></div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <div className='relative top-4 mb-1'><img src={process.env.PUBLIC_URL + '/images/VAIRIPAYⓒ.png'} alt="Vairipay text"/></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/Vairipay2.png'} alt="Vairipay Second" width={160} height={160} style={{maxWidth: 'none'}}/></div>
                        <div className='relative bottom-6'><span className='text-[18px] font-bold'>Golden Rose Tokens</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}