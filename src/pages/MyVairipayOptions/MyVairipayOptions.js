import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function MyVairipayRequestSecond() {
    const vairipayOptions = ['/images/VairipayPaypal.png', '/images/VairipayApplePay.png', '/images/VairipayVenmo.png', '/images/VairipayPaypal.png', '/images/VairipayApplePay.png', '/images/VairipayVenmo.png']
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/my-vairipay-search')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                <div className='w-full mx-auto flex items-center justify-center'>
                    <img src={process.env.PUBLIC_URL + '/images/VairipayRequestSecond.png'} alt="Vairipay Request Second Logo" />
                </div>
                <div className='w-full h-[500px] mx-auto flex flex-col justify-start items-center mb-10 overflow-scroll mt-10'>
                    <div className='w-full bg-[#3760CB] border-2 border-[#01195C] rounded-[30px] px-4 pt-4 pb-0 flex flex-row justify-between items-center mt-6'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayOptionVenmo.png'} alt="Vairipay Option Venmo"/></div>
                        <div className='w-[165px]'><Button onClick={() => handleSubmit()} text="Download" bgColor={'transparent'} className={'text-white text-[23.4px] font-extrabold rounded-full shadow-none'}/></div>
                    </div>
                    <div className='w-full bg-[#3760CB] border-2 border-[#01195C] rounded-[30px] px-4 pt-4 pb-0 flex flex-row justify-between items-center mt-6'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayOptionZ.png'} alt="Vairipay Option Z"/></div>
                        <div className='w-[165px]'><Button onClick={() => handleSubmit()} text="Download" bgColor={'transparent'} className={'text-white text-[23.4px] font-extrabold rounded-full shadow-none'}/></div>
                    </div>
                    <div className='w-full bg-[#3760CB] border-2 border-[#01195C] rounded-[30px] px-4 pt-4 pb-0 flex flex-row justify-between items-center mt-6'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayOptionPaypal.png'} alt="Vairipay Option Paypal"/></div>
                        <div className='w-[165px]'><Button onClick={() => handleSubmit()} text="Download" bgColor={'transparent'} className={'text-white text-[23.4px] font-extrabold rounded-full shadow-none'}/></div>
                    </div>
                    <div className='w-full bg-[#3760CB] border-2 border-[#01195C] rounded-[30px] px-4 pt-4 pb-0 flex flex-row justify-between items-center mt-6'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayOptionVenmo.png'} alt="Vairipay Option Venmo"/></div>
                        <div className='w-[165px]'><Button onClick={() => handleSubmit()} text="Download" bgColor={'transparent'} className={'text-white text-[23.4px] font-extrabold rounded-full shadow-none'}/></div>
                    </div>
                    <div className='w-full bg-[#3760CB] border-2 border-[#01195C] rounded-[30px] px-4 pt-4 pb-0 flex flex-row justify-between items-center mt-6'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayOptionZ.png'} alt="Vairipay Option Z"/></div>
                        <div className='w-[165px]'><Button onClick={() => handleSubmit()} text="Download" bgColor={'transparent'} className={'text-white text-[23.4px] font-extrabold rounded-full shadow-none'}/></div>
                    </div>
                    <div className='w-full bg-[#3760CB] border-2 border-[#01195C] rounded-[30px] px-4 pt-4 pb-0 flex flex-row justify-between items-center mt-6'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayOptionPaypal.png'} alt="Vairipay Option Paypal"/></div>
                        <div className='w-[165px]'><Button onClick={() => handleSubmit()} text="Download" bgColor={'transparent'} className={'text-white text-[23.4px] font-extrabold rounded-full shadow-none'}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}