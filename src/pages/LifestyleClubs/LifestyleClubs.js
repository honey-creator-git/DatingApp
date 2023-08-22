import React from 'react'
import { Link } from 'react-router-dom'

const LifestyleClubs = () => {
    return (
        <div className="main-container-other flex flex-col justify-start">
            <p className="text-[30px] md:text-[33px] text-center text-[#000] font-roboto-serif font-bold py-2">
                Lifestyle Clubs
            </p>
            <div className="bg-linear-gradient h-[27px]"></div>
            <div className="">
                <p className="text-[20px] md:text-[22px] text-center text-[#000] font-roboto-serif font-bold">
                    Type
                </p>
                <div className='flex justify-center'>
                    <div className='relative w-fit'>
                        <select className="mb-4 mt-2 pl-10 sm:pl-10 pr-1.5 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[18px] text-[#fff] font-bold font-inter h-[35px]">
                            <option value="Swingers Clubs" selecterd>
                                Swingers Clubs
                            </option>
                            <option value="Swingers Clubs">Swingers Clubs 1</option>
                            <option value="Swingers Clubs">Swingers Clubs 2</option>
                        </select>
                        <img src="images/Mask-group-img.png" alt="" className='absolute top-[0px] left-[5px]' />
                    </div>
                </div>
            </div>
            <div className="bg-linear-gradient h-[27px]"></div>
            <div className="px-5 flex flex-col items-center">
                <p className="text-[24px] md:text-[26px] text-center text-[#000] font-roboto-serif font-bold pb-2">
                    Location
                </p>
                <div className="flex flex-col items-start w-full max-w-[420px]">
                    <p className="text-[16px] text-[#000] text-start font-bold font-inter">
                        Favorite Locations
                    </p>
                    <div className="relative flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                        <select className="pl-7 sm:pl-10 pr-1.5 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter h-[35px]">
                            <option value="Independant" selecterd>
                                Current Location
                            </option>
                            <option value="Current Location 1">Current Location 1</option>
                            <option value="Current Location 2">Current Location 2</option>
                        </select>
                        <img src="images/Mask-group-icon.png" alt="" className='absolute top-[7px] left-[5px]' />
                        <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter h-[35px]">
                            <option value="Within" selecterd>
                                Within
                            </option>
                            <option value="Within 1">Within 1</option>
                            <option value="Within 2">Within 2</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center w-[60%] sm:w-[40%] md:w-[20%] pt-3">
                    <p className="w-[50%] border-[1px] border-[#000]"></p><span className="text-[16px] text-[#000] font-bold font-inter w-fit px-2">or</span><p className="w-[50%] border-[1px] border-[#000]"></p>
                </div>
                <div className="flex flex-col items-start w-full max-w-[420px]">
                    <p className="text-[16px] text-[#000] text-start font-bold font-inter">
                        Search
                    </p>
                    <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                        <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-[45%] h-[35px]">
                            <option value="Country" selecterd>
                                Country
                            </option>
                            <option value="Country 1">Country 1</option>
                            <option value="Country 2">Country 2</option>
                        </select>
                        <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-[45%] h-[35px]">
                            <option value="City" selecterd>
                                City
                            </option>
                            <option value="City 1">City 1</option>
                            <option value="City 2">City 2</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-center pt-5'>
                    <Link to="/advanced-search-escort" className='text-[#02227E] text-[20px] font-bold font-inter px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search and Save To Favorites</Link>
                </div>
                <div className='flex justify-center pt-5 pb-5'>
                    <Link to="" className='text-[#02227E] text-[20px] font-bold font-inter px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search</Link>
                </div>
            </div>
            <div className="bg-linear-gradient h-[27px] mb-20"></div>
        </div>
    )
}

export default LifestyleClubs
