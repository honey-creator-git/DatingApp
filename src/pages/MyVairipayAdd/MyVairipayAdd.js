import React from 'react';
import InputText from '../../components/InputText';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function MyVairipayAdd() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/my-vairipay-qr')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                <div className='w-full mx-auto flex items-center justify-center'>
                    <img src={process.env.PUBLIC_URL + '/images/VairipayAddLogo.png'} alt="Vairipay Add Logo" />
                </div>
                <div className="w-full flex items-center justify-center flex-1">
                    <div className='flex items-center justify-center mt-5 w-[199px] h-[180px] bg-[#3760CB] border-2 border-white rounded-xl'><img src={process.env.PUBLIC_URL + "/images/CashApp.png"} alt="Cash App" /></div>
                </div>
                <div className="flex-1 mt-10 w-full flex flex-col justify-center items-start">
                    <div className="w-full text-left text-[18px] font-extrabold">
                        <span>Enter your Payment ID</span>
                    </div>
                    <div className="mt-custom-14 w-full">
                        <InputText className='text-[20px]' />
                    </div>
                    <div className="mt-custom-25 w-full text-left text-[18px] font-extrabold">
                        <span>Upload Your QR Code</span>
                    </div>
                    <div className="mt-custom-14 w-full">
                        <ImageUpload type="text" buttonName="Upload" />
                    </div>
                </div>
                <div className="flex-1 mt-16 w-full">
                    <Button onClick={handleSubmit} text="Submit" className="custom-btn-bg text-[#01195C] font-extrrabold text-[23px]" />
                </div>
            </div>
        </div>
    );
}