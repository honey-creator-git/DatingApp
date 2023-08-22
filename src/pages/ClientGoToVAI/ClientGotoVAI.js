import React from 'react';
import TextContainer from '../../components/TextContainer';
import Button from '../../components/Button';
import InputText2 from '../../components/InputText2';
import { useNavigate } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;

export default function ClientGotoVAI() {
    const navigate = useNavigate()
    
    const handleSubmit = () => {
        navigate('/business-congratulation-second')
    }
    return (
        <div className="main-container">
            <div className="flex flex-col justify-center items-center w-max-370 mx-auto">
                <div className='grid grid-cols-1 grid-flow-col gap-4'>
                    <div className='relative flex flex-col justify-start items-center'>
                        <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
                        <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
                        <div className='relative top-2'><img src={process.env.PUBLIC_URL + '/images/V.A.I.(small).png'} alt="VAI Small" /></div>
                        <div className='relative top-4'><span className='font-semibold text-[16.2px]'>Your payment was successful. <br /> Please use the V.A.I. codes to verify your employees</span></div>
                    </div>
                </div>
                <div className="flex-1 mt-8 mb-6">
                    <div className="flex items-center justify-center text-black font-extrabold text-[16.2px]">
                        <span>V.A.I. Codes</span>
                    </div>
                </div>
                <div className="flex-1 w-full mb-6">
                    <TextContainer text="890FHIA87#SL8" />
                </div>
                <div className="flex-1 w-full mt-4 mb-6">
                    <TextContainer text="7HEFO68AN09S" />
                </div>
                <div className="flex-1 w-full mt-4 mb-6">
                    <TextContainer text="48HTG89SHHLAN" />
                </div>
                <div className="flex-1 w-full mt-6 mb-2">
                    <Button onClick={handleSubmit} text="Go to V.A.I.>" className="font-extrabold text-[21.6px] text-[#01195C]" />
                </div>
            </div>
        </div>
    );
}