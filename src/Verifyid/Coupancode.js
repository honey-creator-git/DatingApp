import React from 'react'
import { Link } from 'react-router-dom'

const Coupancode = () => {
  return (
    <div>
      <div className="max-w-[820px] mx-auto my-6">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className=" mt-5">
    <div className="bg-white items-center p-5 mb-6 rounded-[50px]">
      <div className="flex max-w-[30%] rounded mx-auto border border-[#000] py-4 flex justify-center">
        <p className="text-[20px] text-black">$49.99</p>
      </div>
      <div className="flex flex-col">
        <img src="images/encrypted 1.svg" className="w-28 mx-auto mt-6" alt />
        <p className="text-center text-[16px] text-[#838282] pt-5">
          April 29, 2023 <br />
          #1832-9912-7552
        </p>
        <img src="images/image 1.svg" className="w-[80%] mx-auto my-5" alt />
        <div className="my-6 mx-auto">
          <Link to="/Via" className="bg-gradient-to-b from-[#000C3E] to-[#02227E] text-center min-w-[280px] px-4 w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center" type="button">
            Coupon Code Business Verification
          </Link>
        </div>
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

export default Coupancode
