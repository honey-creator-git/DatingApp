import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function MutualContractSign() {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/my-vairipay')
    }
    return (
        <div className="main-container">
            <div className="pt-custom-81 flex flex-col justify-center items-center mx-auto w-full">
                <div className="">
                    <img src={process.env.PUBLIC_URL + "/images/MutualContent.png"} alt="Mutual Content" />
                </div>
                <div className="w-[390px] mx-auto flex items-center justify-center mt-4 mb-4 px-8">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-[30px] w-[30px]" />
                    <label className="ml-8 block text-black font-extrabold text-[13px] text-center">
                        I agree to sign this contract electrically with my Vairify #
                        <input className="max-w-[90px] ml-2 bg-transparent border-2 border-black border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none" />
                    </label>
                </div>
                <div className="mt-custom-18 w-full">
                    <Button onClick={() => handleNext()} text="E-Sign" className="font-bold text-[22px] text-[#01195C]" />
                </div>
            </div>
        </div>
    );
}