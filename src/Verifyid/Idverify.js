import React from 'react'
import { Link } from 'react-router-dom'

const Idverify = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto my-6">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="mt-5">
    <div className="bg-white items-center rounded p-5 mb-6 rounded-[50px]">
      <div className="flex flex-col">
        <img src="images/verification 1.svg" className="w-[40%] mx-auto py-4" alt />
        <p className="text-center text-[20px]">Identity Card Verified</p>
        <img src="images/image 3.svg" className="w-[85%] mx-auto py-5" alt />
        <div className="flex justify-between w-[80%] mx-auto border-b-2 py-2">
          <h3 className="text-[16px]">Name</h3>
          <p className="text-[16px]">John Maac</p>
        </div>
        <div className="flex justify-between w-[80%] mx-auto border-b-2 py-2">
          <h3 className="text-[16px]">Address</h3>
          <p className="text-[16px]">945 East West LA</p>
        </div>
        <div className="flex justify-between w-[80%] mx-auto border-b-2 py-2">
          <h3 className="text-[16px]">Birth</h3>
          <p className="text-[16px]">15 April. 1920</p>
        </div>
        <div className="flex justify-between w-[80%] mx-auto border-b-2 py-2">
          <h3 className="text-[16px]">Document</h3>
          <p className="text-[16px]">#651561561</p>
        </div>
      </div>
      <div className="my-6 mx-auto">
        <Link to="/Face" className="bg-[#05B7FD] text-center min-w-[280px] inline-block w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center" type="button">
          Face Verify
        </Link>
      </div>
    </div>
    <div className="w-[90%] mx-auto pt-10 pb-4">
      <img src="images/Group.svg" alt />
    </div>
  </div>
</div>

    </div>
  )
}

export default Idverify
