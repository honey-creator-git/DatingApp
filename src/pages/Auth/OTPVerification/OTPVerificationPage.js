import React, {useState} from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function OTPVerificationPage() {
    const [otpStatus, setOtpStatus] = useState(0);
    const navigate = useNavigate()
    const submitOtp = () => {
        setOtpStatus(otpStatus + 1);
        if(otpStatus+1==2){
            navigate('/otp-congratulations')
        }
    }

    return (
        <div className="main-container flex flex-col">
            <div className="mx-auto mt-20 py-2">
                <img src={process.env.PUBLIC_URL + "/images/loginAvatar.png"} alt="Login Image" />
            </div>
            <div className='flex-1 mx-auto'>
                {
                    otpStatus == 0 ? <div className="verification-result">
                                    <span className="text-[22px] font-light">"OTP has been sent to your register Email & Number"</span>
                                </div> :
                                <div className="flex flex-col justify-center items-center text-red-500 verification-bad-result">
                                    <span className="text-[22px] font-light">"The Code you have entered is</span>
                                    <span className="text-[22px] font-light">incorrect</span>
                                    <span className="text-[22px] font-light">please try again or click here to"</span>
                                    <a href='#' className='text-black text-[22px] font-bold'>resend</a>
                                </div>
                }
                <div className="flex flex-row justify-between items-center text-center px-2 mt-12">
                    <input className="flex-1 m-2 border-2 border-[#0247FF] h-16 w-10 text-center form-control otp_input bg-transparent" type="text" id="first" maxLength="1" /> 
                    <input className="flex-1 m-2 border-2 border-[#0247FF] h-16 w-10 text-center form-control otp_input bg-transparent" type="text" id="second" maxLength="1" /> 
                    <input className="flex-1 m-2 border-2 border-[#0247FF] h-16 w-10 text-center form-control otp_input bg-transparent" type="text" id="third" maxLength="1" /> 
                    <input className="flex-1 m-2 border-2 border-[#0247FF] h-16 w-10 text-center form-control otp_input bg-transparent" type="text" id="fourth" maxLength="1" />
                    <input className="flex-1 m-2 border-2 border-[#0247FF] h-16 w-10 text-center form-control otp_input bg-transparent" type="text" id="fifth" maxLength="1" /> 
                    <input className="flex-1 m-2 border-2 border-[#0247FF] h-16 w-10 text-center form-control otp_input bg-transparent" type="text" id="sixth" maxLength="1" />
                </div>
            </div>
            <div className="mt-16 mb-4">
                <Button className={'from-inherit to-inherit bg-[#05B7FD] text-[#01195C] font-extrabold text-[23px] py-2'} text="Submit" size='45px' onClick={submitOtp} />
            </div>
        </div>
    );
}