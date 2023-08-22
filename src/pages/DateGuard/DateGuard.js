import React from 'react'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const publicPath = process.env.PUBLIC_URL;

export default function DateGuard() {
    const navigate = useNavigate()
    const handleActivate = () =>{
        navigate("/edit-vairify");
    }
    return (
        <div className='main-container flex flex-col justify-between'>
            <div className='w-full mx-auto flex justify-center items-center mt-4'>
                <span className='font-bold text-[34px] text-[#05B7FD]'>Date Guard</span>
            </div>
            <div className='flex-1 w-full mx-auto flex items-center justify-center'>
                <div className='w-[257px] mt-4'>
                    <img className='w-full' src={`${publicPath}/images/SetupBusinessProfile.png`} />
                </div>
            </div>
            <div className='mt-10'>
                <Button text={'Activate'} onClick={() => handleActivate()} className='bg-gradient-to-b from-[#4200FF] to-[#4200FF] text-white border-2 border-white h-[62.1px] font-medium text-[36px]' />
            </div>
            <div className='mt-10'>
                <Button text={'Edit Groups'} className='bg-gradient-to-b from-[#4200FF] to-[#4200FF] text-white border-2 border-white h-[62.1px] font-medium text-[36px]' />
            </div>
            <div className='mt-10'>
                <Button text={'Edit Codes'} className='bg-gradient-to-b from-[#4200FF] to-[#4200FF] text-white border-2 border-white h-[62.1px] font-medium text-[36px]' />
            </div>
            {/* <div className='w-full mx-auto flex flex-row justify-between items-center mt-12'>
                <div className='w-[164px]'><Button text="Skip>>" className={'font-bold text-[23.4px] text-[#01195C] rounded-[25px] bg-transparent shadow-none'} /></div>
                <div className='w-[164px]'><Button text="Finished" className={'font-bold text-[23.4px] text-[#01195C] rounded-[25px]'} /></div>
            </div> */}
        </div>
    );
}