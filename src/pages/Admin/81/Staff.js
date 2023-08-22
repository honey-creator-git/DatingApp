import React from 'react'
import Button from '../../../components/Button';
import ReactStars from "react-rating-stars-component";
import SelectBox from '../../../components/SelectBox';

export default function Staff() {
    const options1 = ['Crystal']


  return (
    <div className='flex flex-col justify-center items-start'>
        <div className='w-full mb-8'>
            <h1 className='text-4xl text-white font-medium'>My Contacts</h1>
        </div>
        <div className='flex flex-row justify-start items-center gap-2'>
            <span className='text-white text-[24px] font-bold mr-5'>Filter:</span>
            <div>
                <SelectBox options={options1} className={'bg-transparent text-white'} size={20} />
            </div>
            
        </div>
        <div className='w-full grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-2 gap-2 lg:gap-12 px-2 py-8 overflow-hidden overflow-y-auto max-h-[calc(100vh-200px)]'>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center bg-gradient-to-br from-[#0247FF] to-[#D9D9D9] p-4 lg:p-8 rounded-xl gap-2 lg:gap-8'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-20 sm:h-20' />
                <div className='flex flex-col justify-start items-center gap-2'>
                    <div className='flex flex-col items-start'>
                        <span className='lg:text-[20px] text-[16px] leading-none'>Camila</span>
                        <span className='lg:text-[20px] text-[16px] leading-none'>1HJ6Y56</span>
                        <span className='lg:text-[20px] text-[16px] leading-none font-bold'>TRUREVU<span className='text-xs font-medium'>ⓒ</span></span>
                        <div className='flex items-center gap-2'>
                            <ReactStars count={5} value={4.7} size={22} classNames={'leading-none'}/>
                            <label className='text-lg font-medium'>4.7</label>
                        </div>
                    </div>
                    <div className='lg:w-[100px] sm:w-[80px]'>
                        <Button className={'text-white from-[#0198FE] to-[#0247FF] lg:text-xl text-sm font-medium'} size={35} text={'View'}/>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}
