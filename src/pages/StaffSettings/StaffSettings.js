import React, {useState} from 'react';

export default function StaffSettings() {
    const [staff, setStaff] = useState("Business")

    const toggle = (props) => {
        setStaff(props);
    }
    return (
        <div className='main-container flex flex-col justify-between'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-5'>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <span className='font-extrabold text-[30px]'>Staff Settings</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-7'>
                    {
                        staff == "Business" ?
                        <div onClick={() => toggle("Business")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Business</span></div>
                        :
                        <div onClick={() => toggle("Business")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Business</span></div>
                    }
                    {
                        staff == "Individual" ?
                        <div onClick={() => toggle("Individual")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Individual</span></div>
                        :
                        <div onClick={() => toggle("Individual")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Individual</span></div>
                    }                    
                </div>
                <div style={{border:'1px solid black'}} className='w-[100vw]'></div>
                {
                    staff == "Business" ?
                    <div className='w-full mx-auto flex flex-col justify-center items-center'>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Calendar</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Chat/Voice</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">VAI<span className='font-light'>RIPAYⓒ</span></span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Gallery Photo</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">DateGuard</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Follow Me</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Calendar</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Rates/Services</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Virtual Market Place</span></div>
                            </label>
                        </div>
                    </div>
                    :
                    <div className='w-full mx-auto flex flex-col justify-center items-center'>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Chat/Voice</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Gallery Photo</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">VAI<span className='font-light'>RIPAYⓒ</span></span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Gallery Photo</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Rates/Services</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">DateGuard</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">VAI<span className='font-light'>RDATE ⓒ</span></span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Virtual Market Place</span></div>
                            </label>
                        </div>
                        <div className='w-full mx-auto flex flex-row justify-around items-center flex-wrap mt-5'>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[4px] after:bg-white after:bg-opacity-70 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <div className='flex items-center justify-center w-[249px] border-2 border-white bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-[25px] ml-3 shadow-2xl'><span class="w-full flex items-center justify-start text-[20px] font-bold text-white h-[39px] px-4">Chat/Voice</span></div>
                            </label>
                        </div>
                    </div>   
                }
            </div>
        </div>
    )
}