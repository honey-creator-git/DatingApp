import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function QRScan() {
    const navigate = useNavigate();
    const navigateToVairifyIdInput = () => {
        navigate("/vairify-id-input");
    }

    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-4'>
                <div className='w-[101px] h-[101px]'><img src={process.env.PUBLIC_URL + '/images/QRScanSearch.png'} alt="QR Scan Search Icon" /></div>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[27px]'>QR Code</span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <div className='flex-1'><img src={process.env.PUBLIC_URL + '/images/QRCodeScan.png'} alt="QR Code Scan" /></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-12 mb-7'>
                    <Button onClick={() => navigateToVairifyIdInput()} text="Scan" className={'bg-[#05B7FD] rounded-[25px] font-bold text-[23.4px] text-[#01195C] shadow-2xl'} />
                </div>
            </div>
        </div>
    );
}