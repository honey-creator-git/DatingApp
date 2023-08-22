import React from 'react'
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;

export default function GetVaiForClientPage() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/business-get-vai')
  }
  return (
    <div className="main-container flex flex-col justify-start">
      
        <div className='relative flex flex-col justify-start items-center'>
          <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
          <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
        </div>

        <div className='flex-1 mb-12 py-8 mx-auto'>
          <img className='mx-auto' src={publicPath+'/images/V.A.I..png'} />
          <p className='text-xl my-9'>Verified Anonymous Identity</p>
        </div>

        <div className='pb-7'>
            <Button className="mx-auto font-extrabold text-[23px]" text={'Get V.A.I'} onClick={handleSubmit} />
        </div>
    </div>
  )
}
