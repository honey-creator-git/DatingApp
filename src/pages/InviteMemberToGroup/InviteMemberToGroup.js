import React from 'react';
import SearchBox from '../../components/SearchBox';

export default function InviteMemberToGroup() {
    const handleSearch = (e) => {
        console.log("Handle Search Event => ", e);
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex items-center justify-center'><span className='font-bold text-[20px] text-white'>Invite to Group Atlantaa</span></div>
                <div className='w-[100vw] flex items-center justify-center bg-[#aaa2c5] py-2 mt-4'><SearchBox onSearch={handleSearch} bgColor={'[#aaa2c5]'} classname={'border-none focus:outline-none focus:shadow-none font-medium text-[25px] py-0 px-0 pr-11'} placeholder="Search Contacts" /></div>
                <div className='w-[100vw] flex flex-col justify-start items-center max-h-[450px] overflow-scroll'>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem1.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Halley Smith</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem5.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Gloria</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem3.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Robert Fox</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem2.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Jane Cooper</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem4.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Jacob Jones</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem1.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Brandie Riley</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center mt-4 mb-4'>
                        <div className='w-[100vw] flex flex-row justify-between items-center py-4 px-4 h-[77px] hover:bg-[#aaa2c5]'>
                            <div className='flex items-center justify-center'>
                                <div className='mr-4'><img src={process.env.PUBLIC_URL + '/images/SearchItem5.png'} alt="Search Member" /></div>
                                <div className=''><span className='font-medium text-[18px] text-white'>Crystal Galley</span></div>
                            </div>
                            <div className=''><button><span className='font-black text-[14px] text-[#100333]'>Invite</span></button></div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    );
}