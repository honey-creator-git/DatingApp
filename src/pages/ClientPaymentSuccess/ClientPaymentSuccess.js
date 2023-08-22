import React from 'react';
import TextContainer from '../../components/TextContainer';
import Button from '../../components/Button';
import InputText2 from '../../components/InputText2';
import { useNavigate, useLocation } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;

export default function ClientPaymentSuccess() {
    const navigate = useNavigate()
    const location = useLocation()
    const isBusiness = location.state?.business
    
    const handleSubmit = () => {
        if(isBusiness == true) {
            navigate('/business-congratulation')
        }
    }
    return (
        <div className="main-container">
            <div className="flex flex-col justify-center items-center w-max-370 mx-auto">
                <div className='grid grid-cols-1 grid-flow-col gap-4'>
                    <div className='relative flex flex-col justify-start items-center'>
                        <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
                        <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
                        <div className='relative top-2'><img src={process.env.PUBLIC_URL + '/images/V.A.I.(medium).png'} alt="VAI Small" /></div>
                        <div className='relative top-6'><span className='font-semibold text-[16.2px]'>Your payment was successful.</span></div>
                    </div>
                </div>
                <div className='relative top-10'><img src={process.env.PUBLIC_URL + '/images/PaymentSuccess.png'} alt="Payment Success" /></div>
                <div className="flex-1 w-full mt-6 mb-2">
                    <Button onClick={handleSubmit} text="Go to V.A.I.>" className="font-extrabold text-[21.6px] text-[#01195C]" />
                </div>
            </div>
        </div>
    );
}