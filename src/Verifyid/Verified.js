import React from 'react'
import { Link } from 'react-router-dom'

const Verified = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto my-6">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="mt-5">
    <div className="bg-white items-center rounded p-5 mb-6 rounded-[50px]">
      <div className="flex flex-col">
        <img src="images/verification 1.svg" className="w-[30%] mx-auto" alt />
        <h2 className="text-[20px] text-center text-[#00A769] font-bold p-2">
          Verified
        </h2>
        <img src="images/image 3.svg" className="w-[70%] mx-auto py-5" alt />
        <img src="images/image 2.svg" className="w-[70%] mx-auto py-5" alt />
      </div>
      <div className="my-6 mx-auto">
        <Link to="/Newmaxico" className="bg-[#05B7FD] text-center inline-block min-w-[280px] w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center" type="button">
          Submit
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

export default Verified
