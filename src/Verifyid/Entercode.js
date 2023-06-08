import React from 'react'
import { Link } from 'react-router-dom'

const Entercode = () => {
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
          <form action>
            <div className="mt-16">
              <label htmlFor> Enter Coupon Code</label>
              <input type="text" className="w-full bg-transparent  border text-[16px] border-2 border-black mt-2 rounded py-2 pl-2  " placeholder="......" />
            </div>
            <div className="mt-10 mx-auto mb-[100px]">
              <Link to="/Via" className="bg-gradient-to-b from-[#000C3E] to-[#02227E] text-center min-w-[280px] w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center" type="button">
                Submit
              </Link>
            </div>
          </form>
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

export default Entercode
