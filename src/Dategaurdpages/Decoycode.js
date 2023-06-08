import React from 'react'
import { Link } from 'react-router-dom'
import Sidebarnav from '../Components/Sidebarnav'

const Decoycode = () => {
  return (
    <div>
      <div>
  <div className="max-w-[820px] mx-auto">
    <Sidebarnav/>
    <div>
      <img src="images/Group 131.svg" className="mx-auto my-8" alt />
    </div>
    <div>
      <img src="images/Group 1065.svg" className="mx-auto my-8" alt />
    </div>
    <p className="text-[20px] text-center text-white">Set 4 digit Decoy Code</p>
    <div className="w-[80%] mx-auto mt-6">
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
          <img src="images/padlockB.svg" alt />
        </span>
        <input className="w-full bg-transparent placeholder:font-italitc text-[16px] border border-2 border-white rounded py-2 pl-10 pr-4 text-white" placeholder="Enter Password" type="text" />
        <span className="absolute inset-y-0 right-5 flex items-center pl-3 ">
          <img src="images/hideB 1.svg" alt />
        </span>
      </label>
    </div>
    <div className="mt-6 w-[80%] mx-auto">
      <Link to="/Setalarm" className="bg-[#05B7FD] text-center bg-opacity-[20%] inline-block border border-[#05B7FD]  text-white w-full font-bold py-3  rounded focus:outline-none focus:shadow-outline" type="button">
        Done
      </Link>
    </div>
    <div className="w-[90%] mx-auto pt-6 pb-4">
    <img src="images/Group.svg" alt />
  </div>
  </div>
  
</div>

    </div>
  )
}

export default Decoycode
