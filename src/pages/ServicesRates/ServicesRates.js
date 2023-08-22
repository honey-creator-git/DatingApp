import React, {useState}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ServicesRates() {
    const [staff, setStaff] = useState("Services");
    const toggle = (props) => {
        setStaff(props);
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 121.png'} alt="Sugar" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/SugarIcon2.png'} alt="Sugar Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Sugar</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-7'>
                    {
                        staff == "Services" ?
                        <div onClick={() => toggle("Services")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Services</span></div>
                        :
                        <div onClick={() => toggle("Services")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Services</span></div>
                    }
                    {
                        staff == "Rates" ?
                        <div onClick={() => toggle("Rates")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Rates</span></div>
                        :
                        <div onClick={() => toggle("Rates")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Rates</span></div>
                    }                    
                </div>
                <div style={{border:'1px solid black'}} className='w-[100vw]'></div>
                {
                    staff == "Services" ?
                    <div className='w-full mx-auto'>
                        <div className='w-full mx-auto flex flex-col justify-center items-center mt-9'>
                            <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[17.1px]'>Description:</span></div>
                            <div className='w-full h-[120px]'></div>
                        </div>
                        <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                            <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[17.1px]'>Abbreviations: (members only)</span></div>
                            <div className='w-full mx-auto flex flex-row justify-start items-center mt-2 px-6'><span className='font-bold text-[17.1px] mr-4'>GFE</span><span className='font-bold text-[17.1px]'>MSOG</span></div>
                        </div>
                        <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                            <div className='w-full mx-auto h-[120px]'></div>
                        </div>
                    </div>
                    :
                    <div className='w-full mx-auto'>
                        <div className='w-full mx-auto flex flex-col justify-center items-cener mt-20'>
                            <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[17.1px] mr-2'>Rates: </span><span className='font-normal text-[17.1px]'>Companionship Rates (Select One)</span></div>
                            <div className='w-full mx-auto flex flex-row justify-between items-center mt-2 px-2'>
                                <div><span className='font-normal text-[16.2px]'>1.2hr</span></div>
                                <div><span className='font-normal text-[16.2px]'>$150</span></div>
                            </div>
                            <div style={{border: '1px solid white'}} className='w-full mx-auto mt-2'></div>
                            <div className='w-full mx-auto flex flex-row justify-between items-center mt-2 px-2'>
                                <div><span className='font-normal text-[16.2px]'>1 hr</span></div>
                                <div><span className='font-normal text-[16.2px]'>$200</span></div>
                            </div>
                            <div style={{border: '1px solid white'}} className='w-full mx-auto mt-2'></div>
                            <div className='w-full mx-auto flex flex-row justify-between items-center mt-2 px-2'>
                                <div><span className='font-normal text-[16.2px]'>2 hr</span></div>
                                <div><span className='font-normal text-[16.2px]'>$300</span></div>
                            </div>
                            <div style={{border: '1px solid white'}} className='w-full mx-auto mt-2'></div>
                            <div className='w-full mx-auto flex flex-row justify-between items-center mt-2 px-2'>
                                <div><span className='font-normal text-[16.2px]'>Overnight</span></div>
                                <div><span className='font-normal text-[16.2px]'>$1700</span></div>
                            </div>
                            <div className='w-full mx-auto h-[150px]'></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}