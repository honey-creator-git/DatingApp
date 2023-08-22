import React from 'react'
import { Link } from 'react-router-dom';

const ServiceRates = () => {
    const data = [
        {
            'id': 1,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 2,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 3,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 4,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 5,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 6,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 7,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 8,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
        {
            'id': 9,
            'service': '',
            'extra': '',
            'cur': 'EUR'
        },
    ];
    return (
        <div className='main-container-other '>
            <p className='text-[27px] md:text-[32px] text-center text-[#02227E] font-roboto font-bold'>Service Rates</p>
            <div className='flex justify-center px-2'>
                <table className="table table-bordered w-full max-w-[480px]">
                    <tr className='text-[#026EFF]'>
                        <th>Service</th>
                        <th>Included</th>
                        <th>Extra</th>
                        <th>Cur</th>
                    </tr>

                    {data.map((service, index) => (
                        <tr data-index={index} className='border-spacing-[7px]'>
                            <td className='border-b-[3px] border-[#02227E] w-[30%] mb-3'>
                                <input type="text" className='w-full bg-transparent focus:outline-none' />
                            </td>
                            <td className='w-[30%] text-[11px] text-[#000] font-bold mb-3'>
                                <button className='text-[18px] text-[#fff] font-roboto font-exterabold bg-gradient-to-b from-[#02227E] to-[#0247FF] rounded-xl px-3 h-[36px]'>
                                    Extra
                                </button>
                            </td>
                            <td className='bg-transparent w-[15%] mb-3'>
                                <input value={service.extra} type="text" className='bg-transparent border-2 border-[#02227E] rounded-xl h-[36px] w-full' />
                            </td>
                            <td className='text-[11px] text-[#000] font-bold w-[25%] mb-3'>{service.cur}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className='flex justify-center py-5'>
                <Link to="/massage" className='text-[23.5px] text-[#01195C] font-bold font-roboto text-center bg-[#05B7FD] shadow-xl rounded-2xl py-px w-[80%] max-w-[350px]'>
                Submit
                </Link>
            </div>
        </div>
    )
}

export default ServiceRates
