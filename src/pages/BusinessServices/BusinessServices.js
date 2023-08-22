import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function BusinessServices() {
    const navigate = useNavigate();
    const navigateToHotRod = () => {
        navigate("/hot-rod");
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-7'>
                <span className='font-extrabold text-[27px]'>Business Services</span>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-9'>
                <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[18px]'>Service 1</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center mt-2'><span className='font-bold text-[9px]'>DESCRIPTION</span></div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                    <span className='text-[9px] text-[#838282] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4 text-[9px]'>
                    <div><span>Time Hr/Price 1</span></div>
                    <div><span>Time Hr/Price 2</span></div>
                    <div><span>Time Hr/Price 3</span></div>
                    <div><span>Time Hr/Price 4</span></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4 text-[9px]'>
                    <div><span>Time Hr/Price 5</span></div>
                    <div><span>Time Hr/Price 6</span></div>
                    <div><span>Time Hr/Price 7</span></div>
                    <div><span>Time Hr/Price 8</span></div>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-9'>
                <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[18px]'>Service 2</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center mt-2'><span className='font-bold text-[9px]'>DESCRIPTION</span></div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                    <span className='text-[9px] text-[#838282] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4 text-[9px]'>
                    <div><span>Time Hr/Price 1</span></div>
                    <div><span>Time Hr/Price 2</span></div>
                    <div><span>Time Hr/Price 3</span></div>
                    <div><span>Time Hr/Price 4</span></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4 text-[9px]'>
                    <div><span>Time Hr/Price 5</span></div>
                    <div><span>Time Hr/Price 6</span></div>
                    <div><span>Time Hr/Price 7</span></div>
                    <div><span>Time Hr/Price 8</span></div>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-9'>
                <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[18px]'>Service 3</span></div>
                <div className='w-full mx-auto flex flex-row justify-start items-center mt-2'><span className='font-bold text-[9px]'>DESCRIPTION</span></div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                    <span className='text-[9px] text-[#838282] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4 text-[9px]'>
                    <div><span>Time Hr/Price 1</span></div>
                    <div><span>Time Hr/Price 2</span></div>
                    <div><span>Time Hr/Price 3</span></div>
                    <div><span>Time Hr/Price 4</span></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-4 text-[9px]'>
                    <div><span>Time Hr/Price 5</span></div>
                    <div><span>Time Hr/Price 6</span></div>
                    <div><span>Time Hr/Price 7</span></div>
                    <div><span>Time Hr/Price 8</span></div>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-start items-center mt-9'>
                <div className='w-[250px]'><Button text="View Description of available services" className={'font-extrabold text-[12.6px] text-[#073FE1] bg-transparent shadow-none border-b-2 border-b-[#073FE1] rounded-none'} size='20px' /></div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-5'>
                <Button onClick={() => navigateToHotRod()} text="Edit Business Services" className={'text-[#040C50] text-[21.6px] font-extrabold bg-[#05B7FD]'} />
            </div>
        </div>
    );
}