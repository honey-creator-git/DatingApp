import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function VairidateVerification() {
    const navigate = useNavigate();
    const navigateToDateGuardCode = () => {
        navigate("/date-guard/set-code");
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-[100vw] flex flex-col justify-center items-center mt-7 bg-[#797E9E] py-2'><span className='font-bold text-[30px] text-[#02227E]'>VAI<span className='font-normal'>RIDATE</span></span></div>
                <div className='w-[100vw] flex flex-col justify-center items-center mt-9 bg-[#587EE7] py-4'>
                    <img src={process.env.PUBLIC_URL + '/images/Ellipse 154.png'} alt="Vairidate Verification Member" />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'><img src={process.env.PUBLIC_URL + '/images/VairidateVerificationMark.png'} alt="Vairidate Verification Mark Icon" /></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <div className='flex items-center justify-center'><span className='font-bold text-[28px]'>HOT ROD has been</span></div>
                    <div className='flex items-center justify-center'><span className='font-bold text-[40px] text-[#13A307]'>"verified"</span></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-9 mb-9'>
                    <div className='w-full'><Button onClick={() => navigateToDateGuardCode()} text="View TRUREVUⓒ" className={'font-bold text-[20px] text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px]'} /></div>
                    <div className='w-full mt-7'><Button onClick={() => navigateToDateGuardCode()} text="View Date Request" className={'font-bold text-[20px] text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px]'} /></div>
                </div>
            </div>
        </div>
    );
}