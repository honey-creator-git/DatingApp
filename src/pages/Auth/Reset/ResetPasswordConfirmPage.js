import React, { useState } from 'react'
import InputText from '../../../components/InputText'
import Button from '../../../components/Button';
import InputPassword from '../../../components/InputPassword'
import { useNavigate } from 'react-router-dom'

export default function ResetPasswordConfirmPage() {
    const [password, setPassword] = useState("password")
    const [confirmPassword, setConfirmPassword] = useState("password")
    const navigate = useNavigate();

    const handleShowPassword = (type) => {
        if(type == "password") {
            if(password == "password") {
                setPassword("text")
            } else if(password == "text") {
                setPassword("password")
            }
        } else if(type == "confirmPassword") {
            if(confirmPassword == "password") {
                setConfirmPassword("text")
            } else if(confirmPassword == "text") {
                setConfirmPassword("password")
            }
        }
    }

    const handleChangePassword = () => {
        navigate("/client-get-vai");
    }

    return (
        <div className="main-container flex flex-col justify-start">
            <div className='relative flex flex-col justify-start items-center'>
                <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
                <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
                <div className='relative'><span className='font-bold text-[28.8px] text-black'>Reset password</span></div>
            </div>
            <div className='flex-1 flex flex-col justify-between mt-8'>
                <div>
                    <div className='mb-12'>
                        <InputText placeholder={'Enter Old Password'} border={`#3760CB`} className='text-[20px] font-bold' size={'45px'} />
                        {/* <level className='text-red-500'></level> */}
                    </div>
                    
                    <div className='mb-6'>
                        <InputPassword placeholder={'New password'} border={`#3760CB`} className="font-bold" size={'45px'} textSize="20" type={password} showPassword={() => handleShowPassword("password")} />
                        {/* <level className='text-red-500'></level> */}
                    </div>

                    <div className='mb-9'>
                        <InputPassword placeholder={'Confirm password'} border={`#3760CB`} className="font-bold" size={'45px'} textSize="20" type={confirmPassword} showPassword={() => handleShowPassword("confirmPassword")} />
                        {/* <level className='text-red-500'></level> */}
                    </div>
                </div>
                <div className='mt-4'>
                    <Button className={'from-inherit to-inherit bg-[#05B7FD] text-[#01195C] text-[23.4px] font-bold'} text={'Change Password'} onClick={() => handleChangePassword()} />
                    <div className='w-[80%] mx-auto mt-4'>
                        <a className='text-blue-700 text-[15px] font-extrabold' href='#'>If you do not receive your code in 60 seconds click this link to resend</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
