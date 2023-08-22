import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Analysis() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 154.png'} alt="Hot Rod" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Hot Rod</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-7'>
                    <div><span className='font-bold text-[14.4px] text-[#0247FF]'>Reviewer</span></div>
                    <div><span className='font-bold text-[14.4px] text-[#0247FF]'>Classification</span></div>
                    <div><span className='font-bold text-[14.4px] text-[#0247FF]'>Vairify ID</span></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-5'>
                    <div><span className='font-extrabold text-[18px] text-[#0247FF]'>Sugar</span></div>
                    <div><span className='font-extrabold text-[18px] text-[#0247FF]'>Companion</span></div>
                    <div><span className='font-extrabold text-[18px] text-[#0247FF]'>89U76J</span></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-7'>
                    <div><span className='font-bold text-[14.4px]'>Puncutality</span></div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-5'>
                    <div><span className='font-bold text-[14.4px]'>Etequette</span></div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-5'>
                    <div><span className='font-bold text-[14.4px]'>Attitude</span></div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                        <FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[18px] margin-right-5' />
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-5'>
                    <div><span className='font-bold text-[14.4px]'>Paid as agreed</span></div>
                    <div className='flex flex-row justify-center items-center'>
                        <div class="flex items-center mr-7">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center mt-5'>
                    <div><span className='font-bold text-[14.4px]'>Overall</span></div>
                    <div><span className='font-bold text-[14.4px]'>5.0</span></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-7'>
                    <div className='w-full mx-auto flex flex-row justify-start items-center'><span className='font-bold text-[14.4px]'>Companion Notes</span></div>
                    <div className='w-full mx-auto flex flex-row justify-center items-center'>
                        <textarea rows="3"
                            className="block p-2.5 w-full text-[15px] text-gray-900 rounded-md border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-[#E2E2E2] focus-visible:border-0 mt-2"
                            placeholder="">
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}