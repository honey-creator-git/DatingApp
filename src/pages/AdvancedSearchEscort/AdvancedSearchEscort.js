import React from 'react'
import AdditionalServices from '../../components/AdditionalServices/AdditionalServices'
import { Link } from 'react-router-dom'

const AdvancedSearchEscort = () => {
    return (
        <div className="main-container-other flex flex-col justify-start">
            <p className='text-[26px] md:text-[30px] text-center text-[#040B47] font-inter font-bold'>Advanced Search</p>
            <p className='text-[24px] md:text-[28px] text-center text-[#000] font-roboto-serif font-bold'>Escort</p>
            <div className='bg-linear-gradient h-[27px]'></div>

            <AdditionalServices />

            <div className='flex justify-center pt-5'>
                <Link to="/hourly-rates" className='text-[#02227E] text-[20px] font-bold font-roboto px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search and Save To Favorites</Link>
            </div>
            <div className='flex justify-center pt-5 pb-5'>
                <Link to="" className='text-[#02227E] text-[20px] font-bold font-roboto px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search</Link>
            </div>
        </div>
    )
}

export default AdvancedSearchEscort
