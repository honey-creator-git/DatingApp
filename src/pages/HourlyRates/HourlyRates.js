import React, { useState } from 'react'
import InputText from '../../components/InputText';
import { Link, useNavigate } from 'react-router-dom';
import Selecter from '../../components/Selecter/Selecter';

const HourlyRates = () => {
    const navigate = useNavigate()
    const currencyOptions = ["Currency", "USD", "EUR", "INR", "FDP"]
    const [currency, setCurrency] = useState("USD");
    const changeCurrency = (e) => {
        setCurrency(e.target.value);
    }
    const handleSubmit = () => {
        navigate('/set-profile-calendar')
    }
    return (
        <div className="main-container-other">
            <div className="flex flex-col justify-center items-center max-[319px]:px-2 px-5">
                <div className="text-[27px] text-[#000] font-bold pt-4">
                    <span>Hourly Rates</span>
                </div>
                <div className="w-full flex flex-row justify-between items-center mt-4">
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[13px] font-bold text-[#026EFF]">Time</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[13px] font-bold text-[#026EFF]">Incall</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[13px] font-bold text-[#026EFF]">Outcall</span></div>
                    <div className="w-[120px] flex flex-col justify-center items-center"><Selecter options={currencyOptions} value={currency} onChange={(e) => changeCurrency(e)} className="text-[13px] font-bold text-[#026EFF] shadow-none focus-visible:border-0 focus-visible:border-white" size="35px" textSize="13px" textColor="#026EFF" /></div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">0.5 Hour</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">1 Hour</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">2 Hours</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">3 Hours</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">6 Hours</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">12 Hours</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">24 Hours</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">48 Hours</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5 text-[13px] text-[#02227E] font-bold">
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">Another 24th</span></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[63px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-full text-[12px] font-bold" size="30px" /></div>
                        <div className="w-[60px] sm:w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                </div>
                <div className='flex justify-center items-center py-5 w-full'>
                    <Link to="/services-offered" className='text-[23.5px] text-[#01195C] font-bold font-roboto text-center bg-[#05B7FD] shadow-xl rounded-2xl py-px w-full max-w-[350px] h-[49px] flex items-center justify-center'>
                        <p>Next</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HourlyRates
