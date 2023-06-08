import React from 'react'
import { Link } from 'react-router-dom'

const Idverified = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto items-center">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="mt-5">
    <div className="bg-white items-center rounded p-5 my-6 rounded-[50px]">
      <div className="flex flex-col">
        <img src="images/verification 1.svg" className="w-[30%] mx-auto" alt />
        <h2 className="text-[20px] text-center text-[#00A769] font-bold p-2">
          Verified
        </h2>
        <div className="bg-gradient-to-b from-[#000C3E] to-[#02227E] py-3 w-[85%] mx-auto text-center">
          <p className="text-white py-2 text-[20px]">
            Your ChainPass ID <br />
            8FG2584
          </p>
        </div>
        <img src="images/image 6.svg" className="w-[85%] mx-auto py-10" alt />
        <a className="text-center text-[#05B7FD] font-bold" href="#">Click here to see your QR Code</a>
        <Link className="text-center text-[#05B7FD] font-bold mt-3" to="/Communityprofile">Go to verify. date</Link>
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

export default Idverified
