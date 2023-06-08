import React from 'react'
import { Link } from 'react-router-dom'

const Otpmobile = () => {
  
  return (
    <div>
      <div className="max-w-[820px] mx-auto">
  <div>
    <img src="images/ChainPass-ID-AppIcon-Blue-512x 2.png" className="mx-auto my-8" alt />
  </div>
  <div className="mt-[45px]">
    <img src="images/Group 483.png" className="mx-auto" alt />
  </div>
  <div className="mx-auto w-[70%] mt-10 pb-12">
    <p className="text-center text-[18px] text-white py-4">
      “OTP has been sent <br />
      to your <br />
      register number”
    </p>
    <form className>
   <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
  <input className="m-2 border-2 border-[#fff] h-10 w-10 bg-transparent text-white text-center form-control rounded" type="text" id="first" maxLength={1} /> 
  <input className="m-2 border-2 border-[#fff] h-10 w-10 bg-transparent text-white text-center form-control rounded" type="text" id="second" maxLength={1} /> 
  <input className="m-2 border-2 border-[#fff] h-10 w-10 bg-transparent text-white text-center form-control rounded" type="text" id="third" maxLength={1} /> 
  <input className="m-2 border-2 border-[#fff] h-10 w-10 bg-transparent text-white text-center form-control rounded" type="text" id="fourth" maxLength={1} />
  <input className="m-2 border-2 border-[#fff] h-10 w-10 bg-transparent text-white text-center form-control rounded" type="text" id="fifth" maxLength={1} /> 
  <input className="m-2 border-2 border-[#fff] h-10 w-10 bg-transparent text-white text-center form-control rounded" type="text" id="sixth" maxLength={1} />
</div>

      <div className="mt-6 mx-auto ">
        <Link to="/Email" className="bg-[#05B7FD] bg-opacity-[20%] inline-block text-center border border-[#05B7FD] text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="button">
          Verify
        </Link>
      </div>
    </form>
  </div>
  <div className="w-[90%] mx-auto pt-10 pb-4">
    <img src="images/Group.svg" alt />
  </div>
</div>

    </div>
  )
}

export default Otpmobile
