import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function SelectTime() {
    const navigate = useNavigate();
    const [staff, setStaff] = useState("");
    const handleClick = (props) => {
        setStaff(props);
    }
    const navigateToServicesRates = () => {
        navigate("/user/services-rates");
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
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                    <span className='font-bold text-[20px]'>Thursday 07/04/23</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                    <span className='font-bold text-[16px]'>Pacific time 09:00pm - 11:30pm</span>
                </div>
                {
                    staff != "" &&
                    <div className='w-full'>
                        <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                            <span className='font-bold text-[16px]'>Escort Outcall</span>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                            <textarea rows="3"
                                className="block p-2.5 w-full text-[15px] text-gray-900 rounded-sm border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-white focus-visible:border-0 mt-2"
                                placeholder="Outcall Address">
                            </textarea>
                        </div>
                    </div>
                }
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-20'>
                    <div className='w-full '>
                        {
                            staff == "First" ?
                            <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap'>
                                <div className='w-[160px] mr-2 mb-2'><Button onClick={() => handleClick("")} text="8:00am" bgColor='[#01195C]' className={'bg-[#01195C] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-white'} /></div>
                                <div className='w-[168px] mb-2'><Button onClick={() => navigateToServicesRates()} text="VAIRIDATE>>" className={'bg-[#05B7FD] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C] px-2'} /></div>
                            </div>
                            :
                            <Button onClick={() => handleClick("First")} text="8:00am" className={'bg-[#9099BB] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C]'} />
                        }
                    </div>
                    <div className='w-full mt-4'>
                        {
                            staff == "Second" ?
                            <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap'>
                                <div className='w-[160px] mr-2 mb-2'><Button onClick={() => handleClick("")} text="10:00am" bgColor='[#01195C]' className={'bg-[#01195C] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-white'} /></div>
                                <div className='w-[168px] mb-2'><Button onClick={() => navigateToServicesRates()} text="VAIRIDATE>>" className={'bg-[#05B7FD] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C] px-2'} /></div>
                            </div>
                            :
                            <Button onClick={() => handleClick("Second")} text="10:00am" className={'bg-[#9099BB] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C]'} />
                        }
                    </div>
                    <div className='w-full mt-4'>
                        {
                            staff == "Three" ?
                            <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap'>
                                <div className='w-[160px] mr-2 mb-2'><Button onClick={() => handleClick("")} text="10:30am" bgColor='[#01195C]' className={'bg-[#01195C] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-white'} /></div>
                                <div className='w-[168px] mb-2'><Button onClick={() => navigateToServicesRates()} text="VAIRIDATE>>" className={'bg-[#05B7FD] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C] px-2'} /></div>
                            </div>
                            :
                            <Button onClick={() => handleClick("Three")} text="10:30am" className={'bg-[#9099BB] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C]'} />
                        }
                    </div>
                    <div className='w-full mt-4'>
                        {
                            staff == "Four" ?
                            <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap'>
                                <div className='w-[160px] mr-2 mb-2'><Button onClick={() => handleClick("")} text="11:30am" bgColor='[#01195C]' className={'bg-[#01195C] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-white'} /></div>
                                <div className='w-[168px] mb-2'><Button onClick={() => navigateToServicesRates()} text="VAIRIDATE>>" className={'bg-[#05B7FD] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C] px-2'} /></div>
                            </div>
                            :
                            <Button onClick={() => handleClick("Four")} text="11:30am" className={'bg-[#9099BB] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C]'} />
                        }
                    </div>
                    <div className='w-full mt-4'>
                        {
                            staff == "Fifth" ?
                            <div className='w-full mx-auto flex flex-row justify-center items-center flex-wrap'>
                                <div className='w-[160px] mr-2 mb-2'><Button onClick={() => handleClick("")} text="1:30am" bgColor='[#01195C]' className={'bg-[#01195C] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-white'} /></div>
                                <div className='w-[168px] mb-2'><Button onClick={() => navigateToServicesRates()} text="VAIRIDATE>>" className={'bg-[#05B7FD] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C] px-2'} /></div>
                            </div>
                            :
                            <Button onClick={() => handleClick("Fifth")} text="1:30am" className={'bg-[#9099BB] border-2 border-[#02227E] rounded-md font-bold text-[24px] text-[#01195C]'} />
                        }                        
                    </div>
                </div>
            </div>
        </div>
    );
}