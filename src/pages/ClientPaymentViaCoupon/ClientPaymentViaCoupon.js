import React from 'react'
import Button from '../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;

export default function ClientPaymentViaCoupon() {
  const navigate = useNavigate()
  const location = useLocation()
  const isBusiness = location.state?.business
  const handleSubmit = () => {
    navigate('/client-payment-discount')
  }
  return (
    <div className="main-container flex flex-col justify-start">
      
      <div className='grid grid-cols-1 grid-flow-col gap-4'>
        <div className='relative flex flex-col justify-start items-center'>
            <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
            <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
        </div>
      </div>

      <div className='mb-2 py-2 mx-auto'>
        <img src={publicPath+'/images/V.A.I..png'} />
        <p className='text-xl my-2'>Verified Anonymous Identity</p>
      </div>
      
      <div className=''>
          <p className='font-black text-[16.2px]'>April 29, 2023</p>
          <p className='bg-[#CFCFCF] w-[80%] p-4 border-[2px] border-gray-600 mx-auto font-extrabold text-[21px] my-2'>#1832-9912-7552</p>
          <p className={'font-normal text-[16px] '}>$-50.00</p>
      </div>

      <div className='flex-1 py-4'>
          <h1 className='text-[28.8px] font-black'>$99.00</h1>
      </div>
      
      <div className='pb-7'>
          <Button onClick={handleSubmit} className="font-bold text-[23.4px] text-[#01195C] mx-auto max-w-md" text={'Submit Payment'} />
      </div>
    </div>
  )
}
