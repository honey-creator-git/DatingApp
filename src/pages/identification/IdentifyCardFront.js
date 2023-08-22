import React from 'react'
import ImageButton from '../../components/ImageButton'
import IconButton from '../../components/IconButton'
import EllipseButton from '../../components/EllipseButton';
const publicPath = process.env.PUBLIC_URL;

export default function IdentifyCardFront() {
  return (
    <div className="main-container flex flex-col justify-start">
      
        <div className='py-6  mt-10'>
            <div className='flex items-center justify-center'>
            <div className='mr-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
            </div>
            <h1 className='text-2xl'><strong>Identity Card</strong> “Front”</h1>
            </div>
            <p className=' text-md text-gray-500'>Please open the camera of your device and scan front page of your document</p>
        </div>

        <div className='mt-10'>
            <div className='mx-auto flex items-center justify-between max-w-lg'>
            <EllipseButton text={'1'} active={true} size={50} fontSize={16} p={6} />
            <hr className="border-gray-500 w-16 inline-block align-middle mx-1" />
            <EllipseButton text={'2'} active={false} size={50} fontSize={16} p={6} />
            <hr className="border-gray-500 w-16 inline-block align-middle mx-1" />
            <EllipseButton text={'3'} active={false } size={50} fontSize={16} p={6} />
            </div>
        </div>

        <div className='mx-auto flex-1 my-10 py-6'>
            <img src={`${publicPath}/images/id-card-front.png`} />
        </div>

        <div className='pb-5'>
            <IconButton icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
            } className={'bg-blue-500 mx-auto'} />
        </div>
    </div>
  )
}
