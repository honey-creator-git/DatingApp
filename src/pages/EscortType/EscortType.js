import React, { useState } from "react";
import { Link } from "react-router-dom";

const EscortType = () => {
    const [genderOptions, setGenderOptions] = useState([
        'Please Select Gender',
        'Male',
        'Female',
        'Trans Male Pre-Op',
        'Trans Female Pre-Op',
        'Trans Male Post-Op',
        'Trans Female Post-Op',
    ])
    return (
        <div className="main-container-other flex flex-col justify-start">
            <p className="text-[30px] md:text-[33px] text-center text-[#000] font-roboto-serif font-bold py-2">
                Escort
            </p>
            <div className="bg-linear-gradient h-[27px]"></div>
            <div className="">
                <p className="text-[20px] md:text-[22px] text-center text-[#000] font-roboto-serif font-bold">
                    Type
                </p>
                <select className="mb-4 mt-2 px-5 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[18px] text-[#fff] font-bold font-inter h-[35px]">
                    <option value="Independant" selecterd>
                        Independant
                    </option>
                    <option value="Independant">Independant 1</option>
                    <option value="Independant">Independant 2</option>
                </select>
            </div>
            <div className="bg-linear-gradient h-[27px]"></div>
            <div className="px-5 flex flex-col items-center">
                <p className="text-[24px] md:text-[26px] text-center text-[#000] font-roboto-serif font-bold py-3">
                    Location
                </p>
                <div className="flex flex-col items-start w-full max-w-[420px]">
                    <p className="text-[16px] text-[#000] text-start font-bold font-inter">
                        Favorite Locations
                    </p>
                    <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                        <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter h-[35px]">
                            <option value="Independant" selecterd>
                                Current Location
                            </option>
                            <option value="Current Location 1">Current Location 1</option>
                            <option value="Current Location 2">Current Location 2</option>
                        </select>
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
                <div className="flex justify-between items-center w-full max-w-[420px] mt-5">
                    <div className="flex flex-col items-start w-[45%]">
                        <p className="text-[16px] text-[#000] text-start font-bold font-roboto-serif w-full">
                            Gender
                        </p>
                        <div className="relative flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                            <select className="pl-7 sm:pl-10 pr-1.5 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-full h-[35px]">
                            {
                                    genderOptions.map((gender) => <option value={gender}>{gender}</option>)
                                }
                            </select>
                            <img src="images/Mask-group-icons.png" alt="" className="absolute top-[3px] z-10" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-[45%]">
                        <p className="text-[16px] text-[#000] text-start font-bold font-roboto-serif w-full">
                            Orientation
                        </p>
                        <div className="relative flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                            <select className="pl-7 sm:pl-10 pr-1.5 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-full h-[35px]">
                                <option value="W4M" selecterd>W4M</option>
                                <option value="W4M">W4M</option>
                            </select>
                            <img src="images/Mask-group-icons.png" alt="" className="absolute top-[3px] z-10" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full max-w-[420px] mt-5">
                    <div className="flex flex-col items-start w-[45%]">
                        <p className="text-[16px] text-[#000] text-start font-bold font-roboto-serif w-full">
                            Venue
                        </p>
                        <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                            <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-full h-[35px]">
                                <option value="Incall" selecterd>
                                    Incall
                                </option>
                                <option value="Incall 1">Incall 1</option>
                                <option value="Incall 2">Incall 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-5'>
                    <Link to="/lifestyle-clubs" className='text-[#02227E] text-[20px] font-bold font-inter px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search and Save To Favorites</Link>
                </div>
                <div className='flex justify-center pt-5 pb-5'>
                    <Link to="" className='text-[#02227E] text-[20px] font-bold font-inter px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search</Link>
                </div>
            </div>
            <div className="bg-linear-gradient h-[27px]"></div>
            <div className='flex justify-center py-5'>
                <Link to="" className='bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] text-[20px] text-[#fff] font-bold font-roboto py-1 px-3 rounded-xl w-fit'>Additional Services</Link>
            </div>
        </div>
    );
};

export default EscortType;
