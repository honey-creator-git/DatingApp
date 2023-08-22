import React from 'react'
import Button from '../../components/Button'
import { useLocation, useNavigate } from 'react-router-dom';

export default function ClientPaymentDiscount() {
  const navigate = useNavigate()
  const location = useLocation()
  const isBusiness = location.state?.business
  const handleSubmit = () => {
    navigate('/client-go-to-vai')
  }
  return (
    <div className="main-container flex flex-col justify-start">
      
        <div className='grid grid-cols-1 grid-flow-col gap-4'>
            <div className='relative flex flex-col justify-start items-center'>
                <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
                <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
                <div className='relative'><span className='font-black text-[21.6px] text-[#4E4B95]'>Migration Special</span></div>
            </div>
        </div>

        <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
            <span className='font-medium text-[22.5px]'>Would you are now eligable to take advantage of our</span>
        </div>

        <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
            <span className='text-[28.8px] text-[#0261FF] font-bold max-w-[170px]'>50% off TRUREVUⓒ</span>
        </div>

        <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
            <span className='text-[18px] font-normal'>We will assign an agent to gather your reviews on the web and assign them to your TRUREVUⓒ. This grand opening special will only be available 60 days from our opening</span>
        </div>

        <div className='w-full mx-auto flex flex-col justify-center items-center'>
            <span className='text-[18px] font-normal'>“Its your reputation TRUREVUⓒ will help you take control of it”</span>
        </div>

        <div className="flex items-center justify-center mb-4">
            <input type="checkbox" className="form-checkbox text-indigo-600 h-[30px] w-[30px]" />
            <label className="ml-4 block text-gray-700 font-medium text-sm text-left">
                <div className='flex flex-row justify-center items-center'>
                    <div className='w-[70px] h-[60px] p-0 m-0 relative flex items-center justify-center'>
                        <span className='font-bold text-[18px]'>$50.00</span>
                        <div className='w-[70px] h-[42px] discounted-value absolute' style={{borderBottom: '1px solid black'}}></div>
                    </div>
                    <div className='w-[90px] h-[50px] p-0 m-0 flex items-center justify-center'>
                        <span className='font-bold text-[18px]'>$25.00</span>
                    </div>
                </div>                
            </label>
        </div>

        <div className='w-full mx-auto flex flex-row justify-around items-center'>
            <Button onClick={()=>handleSubmit()} text='Yes' className='font-black text-[23.4px] text-[#01195C] max-w-[120px]' />
            <Button onClick={()=>handleSubmit()} text='No' className='font-black text-[23.4px] text-[#01195C] max-w-[120px]' />
        </div>
    </div>
  )
}
