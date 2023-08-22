import React from 'react'
import ProfileRequestsPhoto from '../../components/ProfileRequestsPhoto/ProfileRequestsPhoto'
import { Link } from 'react-router-dom'

const ladypastAppointment = () => {
    return (
        <div>
            <ProfileRequestsPhoto />
            <h1 className="bg-[#797e9e] text-[#050b47] text-[24px] font-bold text-center capitalize py-2 mt-14 md:mt-14">
                Past Appointments
            </h1>
            <p className="text-[#000] text-[16px] font-bold text-center pt-5">
                Upcoming Booking Details
            </p>
            <div className="max-[300px]:px-3 max-[320px]:px-5 px-10 md:px-20">
                <div className="flex gap-2 items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#0247FF] font-bold text-[14px]">Date/Time</p>
                    <p className="text-[#000] text-[14px]">1/28/23 4:00pm</p>
                </div>
                <div className="flex justify-between border-b-2 border-b-[#fff] py-2">
                    <div className="flex gap-2 items-center ">
                        <p className="text-[#0247FF] font-bold text-[14px]">Service</p>
                        <p className="text-[#000] text-[14px] font-bold">Escort</p>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <p className="text-[#0247FF] font-bold text-[14px]">Duration</p>
                        <p className="text-[#000] text-[14px] font-bold">1hr</p>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <p className="text-[#0247FF] font-bold text-[14px]">Rate</p>
                        <p className="text-[#000] text-[14px] font-bold">$500</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#0247FF] font-bold text-[14px]">Extra's</p>
                    <p className="text-[#000] text-[14px] font-bold">
                        MSOG $50, BBBJ $50
                    </p>
                </div>
                <div className="flex gap-2 items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#0247FF] font-bold text-[14px]">Octcall</p>
                    <p className="text-[#000] text-[14px] font-bold">
                        1439 Inverness Miami FI 34598
                    </p>
                </div>
            </div>
            <div className="max-[300px]:px-3 max-[320px]:px-5 px-10 md:px-20 pt-5">
                <p className="text-[#000] text-[14px] font-bold text-left">Hot Rod details</p>
                <div className="flex justify-between items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#0247FF] font-bold text-[16px]">Gender</p>
                    <p className="text-[#000] text-[16px] font-bold">Male</p>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#0247FF] font-bold text-[16px] uppercase">
                        varify Id
                    </p>
                    <p className="text-[#0247FF] text-[16px] font-bold upparcase">
                        ID# 658H39P
                    </p>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#0247FF] font-bold text-[16px] uppercase">
                        Vairidate#
                    </p>
                    <p className="text-[#0247FF] text-[16px] font-bold upparcase">
                        0046893490
                    </p>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-[#fff] py-2">
                    <p className="text-[#000] font-bold text-[12.36px]">
                        Agreed Rate for this  Appointment
                    </p>
                    <p className="text-[#000] text-[16px] font-bold">$600</p>
                </div>
                <div className="flex justify-center pt-12 pb-2">
                    <Link to="/dancer-entertainer" className="bg-[#040C50] rounded-full py-2 px-10 text-[#fff] text-[16px] font-bold text-center">
                        Add To Contacts
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ladypastAppointment
