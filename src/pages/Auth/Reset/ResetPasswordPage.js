import React from 'react'
import Button from '../../../components/Button';
import InputText from '../../../components/InputText'
import { useNavigate } from 'react-router-dom'

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const handleOTP = () => {
    navigate("/reset-password-otp");
  }
  return (
    <div className="main-container flex flex-col justify-start">
        <div className='relative flex flex-col justify-start items-center'>
            <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
            <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
            <div className='relative'><span className='font-bold text-[28.8px] text-black'>Reset password</span></div>
        </div>

        <div className='flex-1 flex flex-col justify-center mt-10 mb-5'>
          <div>
            <div className='mb-8' >
              <InputText border={`#3760CB`} className={'text-[20px] font-bold'} placeholder={'Enter Email'}/>
              <label className='text-red-500'></label>
            </div>

            <div  className='mt-8 mb-4' >
              <InputText border={`#3760CB`} className={'text-[20px] font-bold'} placeholder={'Enter Phone'} />
              <label className='text-red-500'></label>
            </div>
          </div>
          <Button className={'from-inherit to-inherit bg-[#05B7FD] text-[#01195C] text-[23.4px] font-bold mt-16'} text={'Send OTP'} onClick={() => handleOTP()} />
        </div>
       
    </div>
  )
}
