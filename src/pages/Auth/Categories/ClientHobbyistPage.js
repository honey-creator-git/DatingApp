import React, { useState } from 'react'
import Button from '../../../components/Button';
import InputText from '../../../components/InputText'
import InputPassword from '../../../components/InputPassword'
import { useNavigate } from 'react-router-dom'
import SelectBox from '../../../components/SelectBox';

export default function ClientHobbyistPage() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("password")
    const [confirmPassword, setConfirmPassword] = useState("password")
    const [genderOptions, setGenderOptions] = useState([
        'Please Select Gender',
        'Male',
        'Female',
        'Trans Male Pre-Op',
        'Trans Female Pre-Op',
        'Trans Male Post-Op',
        'Trans Female Post-Op',
    ])
    const [error, setError] = useState({})

    const handleShowPassword = (type) => {
        if (type == "password") {
            if (password == "password") {
                setPassword("text")
            } else if (password == "text") {
                setPassword("password")
            }
        } else if (type == "confirmPassword") {
            if (confirmPassword == "password") {
                setConfirmPassword("text")
            } else if (confirmPassword == "text") {
                setConfirmPassword("password")
            }
        }
    }
    const handleRegister = () => {
        navigate('/otp-verification')
    }
    return (
        <div className="main-container flex flex-col justify-between px-0">
            {/* <div className="w-full mt-6 mb-6 bg-gradient-to-b from-[#02227E] to-[#0247FF] border-2 border-white rounded-2xl h-[47px] flex items-center justify-center">
                <span style={{ fontFamily: 'Roboto Serif' }} className="text-[25px] text-center font-bold text-white">Client/Hobbyist</span>
            </div> */}
                        <div className="w-full mt-6 mb-6 bg-gradient-to-b from-[#040B473D] to-[#040B473D] h-[47px] flex items-center justify-center">
                <span style={{ fontFamily: 'Roboto Serif' }} className="text-[25px] text-center font-extrabold text-[#040C50]">Client/Hobbyist</span>
            </div>
            <div className='py-2 flex-1 px-5'>
                <div className='mb-5'>
                    <InputText className='text-[18px] font-bold focus-visible:border-2 focus-visible:border-[#3760CB]' placeholder={'Username'} size='47px' />
                    {error && (<label className='text-red-500 text-lg'></label>)}
                </div>
                <div className='mb-5'>
                    <InputText className='text-[18px] font-bold' placeholder={'Phone number'} size='47px' />
                    {error && (<label className='text-red-500 text-lg'></label>)}
                </div>
                <div className='mb-5'>
                    <InputText className='text-[18px] font-bold' placeholder={'Email'} size='47px' />
                    {error && (<label className='text-red-500 text-lg'></label>)}
                </div>
                <div className='mb-5'>
                    <SelectBox placeholder="Please select gender" options={genderOptions} className='h-[50px] text-[20px] font-bold text-gray' size={50} />
                    {error && (<label className='text-red-500 text-lg'></label>)}
                </div>
                <div className='mb-5'>
                    <InputPassword className='text-[20px] font-bold' textSize={20} placeholder={'Password'} type={password} showPassword={() => handleShowPassword("password")} />
                    {error && (<label className='text-red-500 text-lg'></label>)}
                </div>
                <div className='mb-5'>
                    <InputPassword className='text-[20px] font-bold' textSize={20} placeholder={'Confirm Password'} type={confirmPassword} showPassword={() => handleShowPassword("confirmPassword")} />
                    {error && (<label className='text-red-500 text-lg'></label>)}
                </div>
                <div className='mb-5 flex'>
                    <input type='checkbox' className='mr-1' />
                    <label className='text-[12px] font-bold'>Terms and conditions</label>
                </div>
            </div>
            <div className='mt-6 px-5'>
                <Button className={'from-inherit to-inherit bg-[#05B7FD] text-[#01195C] text-[23px] shadow-2xl'} text={'Register'} onClick={handleRegister} />
            </div>
        </div>
    )
}
