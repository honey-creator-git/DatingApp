import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function VairifyIdInput() {
    const navigate = useNavigate()
    const navigateToESignAndSend = () => {
        navigate("/esign-send");
    };

    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-4'>
                <div className='w-[101px] h-[101px]'><img src={process.env.PUBLIC_URL + '/images/QRScanSearch.png'} alt="QR Scan Search Icon" /></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-16'><span className='font-bold text-[27px]'>Enter VAIRIFY ID</span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4 bg-[#A5AED2] border-2 border-[#01195C] rounded-[25px] px-4 py-4'>
                    <div className="flex flex-row justify-between items-center text-center">
                        <input className="focus:outline-none focus:shadow-none flex-1 m-2 border-t-0 border-l-0 border-r-0 border-2 border-black h-[34px] w-[28px] text-[25px] text-center form-control otp_input bg-transparent p-0" type="text" id="first" maxLength="1" /> 
                        <input className="focus:outline-none focus:shadow-none flex-1 m-2 border-t-0 border-l-0 border-r-0 border-2 border-black h-[34px] w-[28px] text-[25px] text-center form-control otp_input bg-transparent p-0" type="text" id="second" maxLength="1" /> 
                        <input className="focus:outline-none focus:shadow-none flex-1 m-2 border-t-0 border-l-0 border-r-0 border-2 border-black h-[34px] w-[28px] text-[25px] text-center form-control otp_input bg-transparent p-0" type="text" id="third" maxLength="1" /> 
                        <input className="focus:outline-none focus:shadow-none flex-1 m-2 border-t-0 border-l-0 border-r-0 border-2 border-black h-[34px] w-[28px] text-[25px] text-center form-control otp_input bg-transparent p-0" type="text" id="fourth" maxLength="1" />
                        <input className="focus:outline-none focus:shadow-none flex-1 m-2 border-t-0 border-l-0 border-r-0 border-2 border-black h-[34px] w-[28px] text-[25px] text-center form-control otp_input bg-transparent p-0" type="text" id="fifth" maxLength="1" /> 
                        <input className="focus:outline-none focus:shadow-none flex-1 m-2 border-t-0 border-l-0 border-r-0 border-2 border-black h-[34px] w-[28px] text-[25px] text-center form-control otp_input bg-transparent p-0" type="text" id="sixth" maxLength="1" />
                    </div>
                </div>
                <div style={{marginTop: '200px', marginBottom: '20px'}} className='w-full mx-auto flex flex-col justify-center items-center'>
                    <Button onClick={() => navigateToESignAndSend()} text="Scan" className={'bg-[#05B7FD] rounded-[25px] font-bold text-[23.4px] text-[#01195C] shadow-2xl'} />
                </div>
            </div>
        </div>
    );
}