import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function CongratulationsPage() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/reset-password");
    }
    return (
        <div className="main-container flex flex-col justify-between">
                <div className="mt-7 mb-7 mx-auto">
                    <div className='w-[229px] h-[229px]'><img src={process.env.PUBLIC_URL + "/images/congratulations.png"} alt="Congratulations" /></div>
                </div>
                <div className="flex-1 mx-auto py-2">
                    <div className="flex flex-col justify-center items-center mb-custom-19">
                        <div className='flex flex-row justify-center items-center'>
                            <h2 className="text-3xl font-bold mr-2">Congratulations!</h2>
                            <h2 className="text-3xl font-bold">Sugar</h2>
                        </div>
                        <span className="text-[16px] font-bold mb-2">Your registration was successful.</span>
                        <span className="description-congratulated">
                            You are now a founding member of the most advanced sex work community in the world. Explore all the amazing features within this incredible app. Simply check the boxes below, and we will keep you informed
                        </span>
                    </div>
                    <div className="mt-8 mb-4">
                        <label className="flex justify-start items-center text-gray-500 font-bold">
                            <input className="w-[20px] h-[20px] mr-4 bg-gray-300" type="checkbox" />
                            <span className="text-[16px] text-black">Yes,want to be a Final stage Beta Tester</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="flex justify-start items-center text-gray-500 font-bold">
                            <input className="w-[20px] h-[20px] mr-4 bg-gray-300" type="checkbox" />
                            <span className="text-[16px] text-black">Notify me when the app is released</span>
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <Button className="font-extrabold from-inherit to-inherit bg-[#05B7FD] text-[#01195C] text-[23px] py-2" size="45px" text="Submit" onClick={() => handleSubmit()} />
                </div>
        </div>
    );
}