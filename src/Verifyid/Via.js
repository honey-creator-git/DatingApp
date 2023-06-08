import React from 'react'
import { Link } from 'react-router-dom'

const Via = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto my-6">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="mt-5">
    <div className="bg-white items-center rounded p-5 mb-6 rounded-[50px]">
      <div className="flex flex-col">
        <img src="images/encrypted 1.svg" className="w-24 mx-auto mt-6" alt />
        <p className="text-center text-[20px] py-4">
          With verified Anonymous Identity
        </p>
        <h2 className="text-[50px] font-bold text-center">V. A. I</h2>
        <p className="text-center text-[20px] py-4">Set how it works $49.99</p>
        <div className="my-2 mx-auto w-full">
          <Link to="/Idfront" className="bg-gradient-to-b from-[#0198FE] to-[#0247FF] min-w-[250px] flex inline-block items-center justify-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2" type="button">
            <span className="pr-3"><img src="images/verifiedB 1.svg" alt /></span>
            Get Verified
          </Link>
        </div>
        <p className="text-center text-[16px] text-[#838282] py-8">
          Xpress + Xtreme hand off vouched API
        </p>
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

export default Via
