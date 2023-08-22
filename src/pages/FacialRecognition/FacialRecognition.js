import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function FacialRecognition() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/facial-recognition-confirm')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <div><img src={process.env.PUBLIC_URL + '/images/FacialRecognition(small).png'} alt="Facial Recognition Small Logo" /></div>
                    <div><span className='font-extrabold text-[23.4px]'>Facial Recognition</span></div>
                </div>

                <div className='w-full mx-auto flex justify-center items-center'>
                    <div><img src={process.env.PUBLIC_URL + '/images/faceRecognition.png'} alt="Face Recognition with Camera" /></div>
                </div>

                <div className='w-full mx-auto flex flex-col justify-center items-center relative top-7'>
                    <button onClick={() => handleSubmit()}>
                        <div><img src={process.env.PUBLIC_URL + '/images/faceRecognitionWithCamera.png'} alt="Face Recognition Camera" /></div>
                    </button>
                </div>
            </div>
        </div>
    );
}