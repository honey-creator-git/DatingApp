import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function FacialRecognitionConfirm() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/set-rate-services')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    {/* <div><img src={process.env.PUBLIC_URL + '/images/FacialRecognition(small).png'} alt="Facial Recognition Small Logo" /></div> */}
                    <div><span className='font-extrabold text-[23.4px]'>Facial Recognition</span></div>
                </div>

                <div className='w-full mx-auto flex justify-center items-center'>
                    <div><img src={process.env.PUBLIC_URL + '/images/faceRecognition.png'} alt="Face Recognition with Camera" /></div>
                </div>

                <div className='w-full mx-auto flex justify-center items-center mt-4'>
                    <div className='relative left-4'><img src={process.env.PUBLIC_URL + '/images/check-mark 2.png'} alt="Check Mark" /></div>
                </div>

                <div className='w-full mx-auto flex flex-col justify-center items-center relative mt-8'>
                    <Button onClick={() => handleSubmit()} text="Submit>>" className={'font-bold text-[23.4px]'} />
                </div>
            </div>
        </div>
    );
}