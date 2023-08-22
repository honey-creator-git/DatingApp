import React, { useState } from 'react';
import InputText from '../../components/InputText';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function ProfileHourlyRate() {
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
        <div className="main-container">
            <div className="flex flex-col justify-center items-center pt-custom-24 mx-auto">
                <div className="text-custom-13">
                    <span>Hourly Rates</span>
                </div>
                <div className="w-full flex flex-row justify-between items-center mt-10">
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-[#026EFF]">Time</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-[#026EFF]">Incall</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-[#026EFF]">Outcall</span></div>
                    <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={currencyOptions} value={currency} onChange={(e) => changeCurrency(e)} borderNone shadowNone className="text-[12px] font-bold txt-custom-color-4" size="35px" /></div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">0.5 Hour</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">1 Hour</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">2 Hours</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">3 Hours</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">6 Hours</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">12 Hours</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">24 Hours</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">48 Hours</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">Another 24th</span></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText placeholder="300" className="w-5/6 text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><span className="text-[14px] font-medium">{currency}</span></div>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <Button onClick={handleSubmit} text="Submit>>" className="font-bold text-[26px] text-[#01195C]"/>
                </div>
            </div>
        </div>
    );
}