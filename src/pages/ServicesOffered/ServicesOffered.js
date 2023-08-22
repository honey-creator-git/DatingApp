import React from 'react'
import AdditionalServices from '../../components/AdditionalServices/AdditionalServices'
import { Link } from 'react-router-dom'

const ServicesOffered = () => {
    return (
        <div className='main-container-other '>
            <p className='text-[26px] md:text-[30px] text-center text-[#02227E] font-roboto font-bold'>Services Offered</p>
            <p className='text-[20px] md:text-[22px] text-center text-[#02227E] font-roboto font-bold mt-[-7px]'>Extras indicated on the next page</p>
            <AdditionalServices />
            <div className='flex justify-center items-center pb-5'>
                <Link to="/service-rates" className='text-[23.5px] text-[#01195C] font-bold font-roboto text-center bg-[#05B7FD] shadow-xl rounded-2xl py-px w-[80%] max-w-[350px] h-[49px] flex items-center justify-center'>
                    <p>Next</p>
                </Link>
            </div>
        </div>
    )
}

export default ServicesOffered
