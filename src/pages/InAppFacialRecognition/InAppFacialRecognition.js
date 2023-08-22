import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function InAppFacialrecognition() {
    
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/facial-recognition')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                
                <div className='w-full mx-auto flex flex-col items-center justify-center max-w-[259px]'>
                    <div><span className='font-extrabold text-[27px]'>In-App</span></div>
                    <div><span className='font-extrabold text-[27px]'>Facial Recognition</span></div>
                </div>

                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <div><span className='font-bold text-[21.6px]'>Set up</span></div>
                    <div><span className='font-bold text-[21.6px]'>Facial Recognition</span></div>
                    <div><span className='font-bold text-[21.6px]'>App Secure</span></div>
                </div>

                <div className='w-full mx-auto flex justify-center items-center mt-16'>
                    <div><img src={process.env.PUBLIC_URL + '/images/facialRecognitionLogo.png'} alt="Facial Recognition" /></div>
                </div>

                <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        {/* <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'></div> */}
                    </label>
                </div>
                
                <div className='w-full mx-auto flex justify-between items-center mt-12'>
                    <div className='w-[163.8px]'><Button onClick={() => handleSubmit()} text='Skip>>' className='font-bold text-[23.4px] text-[#01195C] bg-transparent shadow-none focus:bg-transparent'/></div>
                    <div className='w-[163.8px]'><Button onClick={() => handleSubmit()} text='Begin>>' className='font-bold text-[23.4px] text-[#01195C]' /></div>
                </div>

            </div>
        </div>
    );
}