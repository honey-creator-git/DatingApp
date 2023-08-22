import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function Vairidate() {
    const navigate = useNavigate();
    const navigateToVairidateVerification = () => {
        navigate("/vairidate-verification");
    }

    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-[100vw] flex flex-col justify-center items-center mt-9 bg-[#797E9E] py-2'><span className='font-bold text-[30px] text-[#02227E]'>VAI<span className='font-normal'>RIDATE</span></span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-6 bg-[#ADAEB8] rounded-[25px] py-4'>
                    <div className='flex items-center justify-center'><span className='font-bold text-[18px] text-center'>HOT ROD</span></div>
                    <div className='flex items-center justify-center'><span className='font-normal text-[18px] text-center'>HAS REQUESTED A DATE ON 05/02 AT 1 PM FOR 1 HOUR</span></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap mt-6'>
                    <div className='flex items-center justify-center flex-1 mr-4 mb-2'><img src={process.env.PUBLIC_URL + '/images/Vairidate1.png'} alt="Vairidate Item" /></div>
                    <div className='flex items-center justify-center flex-1 mb-2'><img src={process.env.PUBLIC_URL + '/images/Vairidate2.png'} alt="Vairidate Item" /></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-9 mb-9'>
                    <div className='w-full'><Button onClick={() => navigateToVairidateVerification()} text="View TRUREVUⓒ" className={'font-bold text-[20px] text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px]'} /></div>
                    <div className='w-full mt-7'><Button onClick={() => navigateToVairidateVerification()} text="View Date Request" className={'font-bold text-[20px] text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px]'} /></div>
                </div>
            </div>
        </div>
    );
}