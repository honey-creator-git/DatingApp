import React, { useState } from 'react';
import Button from '../../components/Button';

export default function DancerEntertainerAdvanced() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);
    const [six, setSix] = useState(false);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    const [nine, setNine] = useState(false);
    const [ten, setTen] = useState(false);
    const [eleven, setEleven] = useState(false);
    const [twelve, setTwelve] = useState(false);
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[24px]'>Dancer/Entertainer</span></div>
                <div className='w-[100vw] flex items-center justify-center bg-gradient-to-b from-[#02227E] to-[#0247FF] mt-3'><span className='font-bold text-[24px] text-white'>Advanced Search</span></div>
                <div className='w-full mx-auto flex items-center justify-center mt-2'><span className='font-bold text-[24px] text-[#040C50]'>Type of Event</span></div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${first == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setFirst(!first)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Bachelor Party</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${second == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setSecond(!second)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Bachelorette Party</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${third == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setThird(!third)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Bottle Services</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${fourth == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setFourth(!fourth)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Police Strippers</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${fifth == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setFifth(!fifth)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Sexy Bartender</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${six == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setSix(!six)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Erotic Golf Caddies</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${seven == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setSeven(!seven)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Pool Party</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${eight == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setEight(!eight)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Football Parties</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${nine == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setNine(!nine)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Boat Party</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${ten == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setTen(!ten)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Sexy Pizza Delivery</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${eleven == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setEleven(!eleven)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Lap Dance</span></div></div>
                    <div className='bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[20px] flex flex-row items-center justify-center px-6 pl-8 py-2 h-[38px] relative'><div className='flex items-center justify-center absolute left-1'><button className={`w-[20px] h-[20px] rounded-[100%] border-2 border-[#0CA36C] ${twelve == true ? 'bg-[#08FA5A]' : 'bg-[#D9D9D9]'}`} onClick={() => setTwelve(!twelve)}></button></div><div className='flex items-center justify-center w-[100px] leading-4'><span className='font-bold text-[14px] text-white'>Extreme Lapdance</span></div></div>
                </div>
                <div className='w-full mx-auto flex flex-col items-center justify-center mt-8'>
                    <div className='w-full shadow-2xl'><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E]'} text="Send invitation & Save To Favorites" size="35px" /></div>
                    <div className='w-full shadow-2xl mt-4'><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E]'} text="Search & Save To Favorites" size="35px" /></div>
                    <div className='w-full flex flex-row justify-between items-center mt-6'><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E] mr-6 shadow-2xl'} text="Search" size="35px" /><Button className={'flex items-center justify-center border-2 border-[#02227E] rounded-[10px] bg-[#05B7FD] font-bold text-[16px] text-[#02227E] shadow-2xl'} text="Send invitation" size="35px" /></div>
                    <div className='w-full shadow-2xl mt-6'><Button className={'flex items-center justify-center border-[1px] border-[#05B7FD] rounded-[10px] bg-gradient-to-b from-[#02227E] to-[#0247FF] font-bold text-[26px] text-white'} text="Advanced Search" size="45px" /></div>
                </div>
            </div>
        </div>
    );
}