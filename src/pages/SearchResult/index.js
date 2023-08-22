import React from 'react'

export default function SearchResult() {
  return (
    <div className='main-container p-0'>
    <div className='w-full pt-3 pb-3'>
        <h2 className='text-[28px] text-[#02227E]'>Search Result</h2>
    </div>
    <div className='from-[#0247FF99] to-[#0247FF] bg-gradient-to-b h-[40px] relative w-full'>
    </div>
    <div className='grid grid-cols-2 gap-3 pt-10 overflow-hidden overflow-y-auto h-[calc(100vh-290px)] rounded-2xl'>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/swank.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sex Workers Action</h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>New York</h4>
            
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/ops.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Organization for Prostitution </h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Survivors</h4>
               
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/ammar.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sex Workers</h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Argentina</h4>
           
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/sweet.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sex Workers </h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Education Texas</h4>
             
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/swopla.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sex Workers</h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>LA</h4>
            
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/swtc.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sex Workers </h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Coalition</h4>
              
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/awac.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Alliance of women</h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sugar / ID# 5SES168</h4>
                <div className='flex items-center gap-1'>
                    <p>4.7</p>
                </div>
            </div>
        </div>
        <div className='p-4 pb-1 bg-gradient-to-b from-[#0247FF] to-[#FFF] rounded-2xl flex flex-col justify-center items-center'>
            <img src={`${process.env.PUBLIC_URL}/images/swop.png`} alt='' />
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Sex Workers </h4>
                <h4 className='text-[12px] font-bold' style={{lineHeight: 1}}>Education Texas</h4>
                
            </div>
        </div>
    </div>
</div>
  )
}
