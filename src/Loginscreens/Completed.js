import React from 'react'
import { Link } from 'react-router-dom'

const Completed = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
  <div>
    <img src="images/ChainPass-ID-AppIcon-Blue-512x 2.png" className="mx-auto my-8" alt />
  </div>
  <div className="mt-[45px]">
    <img src="images/Group 483.png" className="mx-auto" alt />
  </div>
  <div className="mx-auto text-center pb-6">
    <div className="flex flex-col">
      <p className="text-center text-[25px] font-bold text-white py-4">
        Congratulations!
      </p>
    
      <p className="text-center text-[14px] text-white py-4">
        Your registration was successful.
      </p>
      <div className="mt-6 mx-auto min-w-[260px]">
        <Link to="/Idtypes" className="bg-[#05B7FD] min-w-[260px] inline-block text-center px-2 bg-opacity-[20%] border border-[#05B7FD] text-white w-[85%] mx-auto font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="button">
          Click here to go to ChaiPass.ID
        </Link>
      </div>
      <p className="text-center text-[14px] text-white py-4">
        Choose a ChainPass verified <br />
        community.
      </p>
    </div>
  </div>
  <div className="w-[90%] mx-auto pt-10 pb-4">
    <img src="images/Group.svg" alt />
  </div>
</div>

    </div>
  )
}

export default Completed
