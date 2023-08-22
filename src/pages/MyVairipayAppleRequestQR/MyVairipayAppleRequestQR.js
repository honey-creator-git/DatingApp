import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyVairipayAppleRequestQR() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/my-vairipay-request-confirm')
    }
    return (
        <div className="main-container">
            <div className="w-full mx-auto flex flex-col justify-center items-center pt-10">
                <div className='w-full mx-auto flex items-center justify-center'>
                    <img src={process.env.PUBLIC_URL + '/images/VairipayAddLogo.png'} alt="Vairipay Add Logo" />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-8 bg-[#3760CB] rounded-full px-10 py-2 shadow-2xl border-2 border-black'>
                    <span className='text-center'>
                        <span className='font-black text-[18px] text-white'>You have selected Apple Pay Touch the QR code to Open the app to Sugars account.</span>
                    </span>
                </div>
                <button className='w-full mx-auto' onClick={() => handleSubmit()}>
                    <div className='w-full mx-auto flex flex-col justify-center items-center py-4 bg-[#3760CB] rounded-[30px] mt-10'>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayQRApple.png'} alt="Vairipay QR Apple Logo"/></div>
                        <div><span className='text-white text-[27px] font-bold'>Sugar</span></div>
                        <div><span className='text-white text-[18px] font-extrabold'>VAI</span><span className='text-white text-[18px] font-medium'>RIFY ID</span><span className='text-white text-[18px] font-bold ml-2'>658H39</span></div>
                        <div><img src={process.env.PUBLIC_URL + '/images/VairipayRequestQR.png'} alt="Vairipay Request QR Logo" /></div>
                        <div><span className='text-white text-[32px] font-bold'>$25.00</span></div>
                    </div>
                </button>
            </div>
        </div>
    );
}