import React from 'react'
import InputText from '../../../components/InputText'
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom'

export default function ResetPasswordotpPage() {
    const navigate = useNavigate();
    const handleOTP = () => {
        navigate("/reset-password-confirm");
    }
    return (
        <div className="main-container flex flex-col justify-start">
            <div className='relative flex flex-col justify-start items-center'>
                <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
                <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
                <div className='relative'><span className='font-bold text-[28.8px] text-black'>Reset password</span></div>
            </div>
            <div className='flex-1 flex flex-col justify-between max-h-[500px]'>
                <div className='mt-10 mb-20'>
                    <InputText placeholder={'Enter OTP'} className='mb-[11px] text-[20px] font-bold' />
                    {/* <level className='text-red-500'></level> */}
                </div>
                <div className='mt-8'>
                    <Button className={'from-inherit to-inherit bg-[#05B7FD] text-[#01195C] text-[23.4px] font-bold mt-16'} text={'Send OTP'} onClick={() => handleOTP()} />
                    <div className='w-[80%] mx-auto mt-5'>
                        <a className='text-blue-700 text-[15px] font-extrabold' href='#'>If you do not receive your code in 60 seconds click this link to resend</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
