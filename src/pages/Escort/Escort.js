import React from 'react'
import { Link } from 'react-router-dom'

const Escort = () => {
    return (
        <div className="main-container-other flex flex-col justify-start">
            <p className='text-[28px] md:text-[36px] text-center text-[#02227E] font-roboto-serif font-bold'>Escort</p>
            <div className='bg-linear-gradient h-[27px]'></div>
            <div className='flex justify-center items-center gap-5 md:gap-7 py-2'>
                <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                    <input
                        className="w-[20px] h-[20px]"
                        type="radio"
                        name="escortagency"
                        id="escortagency1"
                        value="Escort" />
                    <label
                        className="ml-2 inline-block text-[#02227E] text-[24px] font-bold font-roboto-serif hover:cursor-pointer"
                        htmlFor="escortagency1"
                    >Escort</label>
                </div>
                <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                    <input
                        className="w-[20px] h-[20px]"
                        type="radio"
                        name="escortagency"
                        id="escortagency2"
                        value="Agency" />
                    <label
                        className="ml-2 inline-block text-[#02227E] text-[24px] font-bold font-roboto-serif hover:cursor-pointer"
                        htmlFor="escortagency2"
                    >Agency</label>
                </div>
            </div>
            <div className='bg-linear-gradient h-[27px]'></div>
            <div className='flex justify-center px-5'>
                <div className='w-full max-w-[480px]'>
                    <p className='text-center text-[#02227E] text-[24px] font-bold font-roboto-serif'>Gender and Orientation</p>
                    <div className='pt-2'>
                        <p className='text-[#02227E] text-[20px] font-bold text-start'>Female</p>
                        <div className='flex justify-around'>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="female"
                                    id="female1"
                                    value="W4M" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="female1"
                                >W4M</label>
                            </div>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="female"
                                    id="female2"
                                    value="W4M" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="female2"
                                >W4M</label>
                            </div>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="female"
                                    id="female3"
                                    value="Bisexual" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="female3"
                                >Bisexual</label>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <p className='text-[#02227E] text-[20px] font-bold text-start'>Male</p>
                        <div className='flex justify-around'>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="male"
                                    id="male1"
                                    value="M4W" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="male1"
                                >M4W</label>
                            </div>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="male"
                                    id="male2"
                                    value="M4W" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="male2"
                                >M4W</label>
                            </div>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="male"
                                    id="male3"
                                    value="Bisexual" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="male3"
                                >Bisexual</label>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <p className='text-[#02227E] text-[20px] font-bold text-start'>Trans</p>
                        <div className='flex justify-around'>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="trans"
                                    id="trans1"
                                    value="T4M" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="trans1"
                                >T4M</label>
                            </div>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="trans"
                                    id="trans2"
                                    value="T4M" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="trans2"
                                >T4M</label>
                            </div>
                            <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="trans"
                                    id="trans3"
                                    value="Bisexual" />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[20px] font-bold font-roboto hover:cursor-pointer"
                                    htmlFor="trans3"
                                >Bisexual</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pt-20 pb-5'>
                        <Link to="/massage" className='bg-[#02227E] text-[20px] text-[#fff] font-bold font-roboto py-1 px-3 rounded-xl w-fit'>Additional Services>></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Escort
