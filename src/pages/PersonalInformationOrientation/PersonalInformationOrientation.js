import React, { useState } from 'react'

const PersonalInformationOrientation = () => {
    const [genderOptions, setGenderOptions] = useState([
        'Please Select Gender',
        'Male',
        'Female',
        'Trans Male Pre-Op',
        'Trans Female Pre-Op',
        'Trans Male Post-Op',
        'Trans Female Post-Op',
    ])
    const data = [
        {
            'id': '1',
            'option': ['Age', '18', '20',],
        },
        {
            'id': '2',
            'option': ['City', 'City2', 'City2',],
        },
        {
            'id': '3',
            'option': ['Country', 'Country2', 'Country2',],
        },
        {
            'id': '3',
            'option': ['Height', 'Height2', 'Height2',],
        },
        {
            'id': '3',
            'option': ['Weight', 'Weight2', 'Weight2',],
        },
        {
            'id': '3',
            'option': ['Ethinicity', 'Ethinicity2', 'Ethinicity2',],
        },
        {
            'id': '3',
            'option': ['Travel', 'Travel2', 'Travel2',],
        },
        {
            'id': '3',
            'option': ['Nationality', 'Nationality2', 'Nationality2',],
        },
        {
            'id': '3',
            'option': ['Languages', 'Languages2', 'Languages2',],
        },
        {
            'id': '3',
            'option': ['Hair color', 'Hair color2', 'Hair color2',],
        },
        {
            'id': '3',
            'option': ['Hair length', 'Hair length2', 'Hair length2',],
        },
        {
            'id': '3',
            'option': ['Breast size', 'Breast size2', 'Breast size2',],
        },
        {
            'id': '3',
            'option': ['Breast type', 'Breast type2', 'Breast type2',],
        },
        {
            'id': '3',
            'option': ['Available for', 'Available for2', 'Available for2',],
        },
        {
            'id': '3',
            'option': ['Tattoo', 'Tattoo2', 'Tattoo2',],
        },
        {
            'id': '3',
            'option': ['Eye Color', 'Eye Color2', 'Eye Color2',],
        },
        {
            'id': '3',
            'option': ['Age', 'Age2', 'Age2',],
        },
        {
            'id': '3',
            'option': ['Orientation', 'Orientation2', 'Orientation2',],
        },
        {
            'id': '3',
            'option': ['Pubic hair', 'Pubic hair2', 'Pubic hair2',],
        },
        {
            'id': '3',
            'option': ['Meeting with', 'Meeting with2', 'Meeting with2',],
        },
        {
            'id': '3',
            'option': ['Pornstar', 'Pornstar2', 'Pornstar2',],
        },
        {
            'id': '3',
            'option': ['Piercing', 'Piercing2', 'Piercing2',],
        },
        {
            'id': '3',
            'option': ['Smoker', 'Smoker2', 'Smoker2',],
        },
    ];
    return (
        <div>
            <h1 className='text-[27px] text-[#000] text-center font-bold font-robotot pt-7'>Personal information</h1>
            <p className='text-[14.4px] text-[#000] text-center font-bold font-robotot pt-2'>Orientation</p>
            <div className='flex flex-col items-center justify-center px-5'>
                <div className="flex justify-between items-center w-full max-w-[420px] mt-5">
                    <div className="flex flex-col items-start w-[45%]">
                        <p className="text-[16px] text-[#000] text-start font-bold font-roboto-serif w-full">
                            Gender
                        </p>
                        <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                            <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-full h-[35px]">
                                {
                                    genderOptions.map((gender) => <option value={gender}>{gender}</option>)
                                }
                                
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-[45%]">
                        <p className="text-[16px] text-[#000] text-start font-bold font-roboto-serif w-full">
                            Orientation
                        </p>
                        <div className="flex flex-wrap items-center justify-between w-full gap-2 sm:gap-5">
                            <select className="px-2 py-1.5 bg-[#02227E] bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl text-[20px] text-[#fff] font-bold font-inter min-w-[fit] w-full h-[35px]">
                                <option value="Country" selecterd>
                                    Country
                                </option>
                                <option value="Country 1">Country 1</option>
                                <option value="Country 2">Country 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-x-5 gap-y-2.5 mt-5'>
                    <div className='border-2 border-[#767882] rounded-3xl flex justify-center items-center px-2 w-[100%] h-[36px]'>
                        <p className='text-[14.4px] text-[#000] font-bold font-roboto'>Site ID (Automatic)</p>
                    </div>
                    {data.map((service, index) => (
                        <div data-index={index} className='border-2 border-[#767882] rounded-3xl flex justify-center items-center max-w-[319px]:px-2 max-[560px]:px-[7px] sm:px-5 w-[100%] h-[36px]'>
                            <select className='bg-transparent px-3 py-1.5 w-full font-bold focus:outline-none'>
                                {service.option.map(option => (
                                    <option value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-7 max-w-[420px]">
                    <div className="text-[14.4px] text-roboto text-[#000] text-start font-bold">
                        <span>Description</span>
                    </div>
                    <textarea id="profile_information_description" rows="3"
                        className="block p-2.5 w-full text-[18px] text-[#A0A0A0] bg-transparent rounded-lg border-2  border-[#D9D9D9] focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Share something that describes you">
                    </textarea>
                </div>
                <div className='flex items-center justify-between w-full max-w-[420px] my-5'>
                    <div className='text-[26px] text-[#01195C] font-bold font-roboto w-[45%]'>Skip</div>
                    <div className='text-[26px] text-[#01195C] font-bold font-roboto bg-[#05B7FD] rounded-2xl px-3  w-[45%]'>Submit</div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformationOrientation
