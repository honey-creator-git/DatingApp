import React from 'react'
import ImageButton from '../../components/ImageButton'
import IconButton from '../../components/IconButton'
import EllipseButton from '../../components/EllipseButton';
const publicPath = process.env.PUBLIC_URL;

export default function FaceVerified() {
  return (
    <div className="main-container flex flex-col justify-start">
      
      <div className='py-6 mt-8'>
          <img className='mx-auto' src={`${publicPath}/images/guard.png`} />
      </div>
      <div>
        <h1 className=' text-xl text-green-500 font-bold'>Verified</h1>
      </div>
      <div className='relative mx-auto'>
        <div className='absolute inset-0 flex items-center justify-start z-10'>
          <img className='' src={`${publicPath}/images/link.png`} />
        </div>
        <div className='ml-10'>
          <div className='py-7'>
              <img className='mx-auto' src={`${publicPath}/images/id-card-front.png`} />
          </div>
          <div className='pb-5'>
            <img className='mx-auto' src={`${publicPath}/images/id-card-back.png`} />
          </div>
        </div>
      </div>
    </div>
  )
}
