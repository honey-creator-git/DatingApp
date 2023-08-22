import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function BusinessProfileQRCode() {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/my-vairipay-request')
    }
    const handleAddMore = () => {
        navigate('/my-vairipay-add')
    }
    return (
        <div className="main-container">
            <div className="pt-10 flex flex-col justify-between items-center w-full mx-auto">
                <div className='w-full mx-auto flex items-center justify-center'>
                    <img src={process.env.PUBLIC_URL + '/images/VairipayAddLogo.png'} alt="Vairipay Add Logo" />
                </div>
                <div className="w-full flex items-center justify-center flex-1">
                    <div className='flex items-center justify-center mt-5 w-[138px] h-[125px] bg-[#3760CB] border-2 border-white rounded-xl'><img src={process.env.PUBLIC_URL + "/images/CashApp.png"} alt="Cash App" /></div>
                </div>
                <div className="flex-1 mt-8 w-full">
                    <div className="text-custom-22 flex flex-col justify-center items-start">
                        <span>QR Code:</span>
                    </div>
                    <div className="mt-custom-10 flex flex-col justify-center items-center">
                        <img src={process.env.PUBLIC_URL + "/images/QR Code.png"} alt="QR Code" />
                    </div>
                    <div className="mt-custom-28 flex flex-col justify-center items-center">
                        <img src={process.env.PUBLIC_URL + "/images/CheckMark.png"} alt="Check Mark" />
                    </div>
                </div>
                <div className='w-full flex justify-center mt-4 gap-4'>
                    <Button onClick={handleAddMore} text={'Add More'} className={'text-[21.38px] font-extrabold rounded-full border-2 border-black max-w-[130px]'} size="36px" />
                    <Button onClick={handleNext} text={'Next'} className={'text-[21.38px] font-extrabold rounded-full border-2 border-black max-w-[130px]'} size="36px" />
                </div>
            </div>
        </div>
    );
}