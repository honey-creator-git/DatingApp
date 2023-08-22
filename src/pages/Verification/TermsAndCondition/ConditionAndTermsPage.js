import React from 'react'
import Button from '../../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom'

export default function ConditionAndTermsPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const isBusiness = location.state.business
   const handleNext = () => {
    if(isBusiness)
        navigate('/business-vai-addition')
    else
        navigate('/client-subscription')
   }
  return (
    <div className="main-container flex flex-col justify-start">
      
        <div className='w-full flex items-center justify-center py-6'>
            <h2 className='text-xl text-blue-700 font-black max-w-[229px]'>TERMS AND CONDITIONS</h2>
        </div>
        {/* <div className='flex'>
            <p className='text-md font-bold'>Effective Date: May 1st 2023</p>
        </div> */}
        <div className='flex-1 py-2 mb-12 mx-auto'>
            <p className='h-96 overflow-y-auto px-2' style={{fontSize: 10.8, textAlign: 'justify'}}>
            Welcome to Vairify.Date<br/>
            <br/>
These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Vairify.Date ("Company", “we”, “us”, or “our”), concerning your access to and use of the Vairify.Date website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions.<br/> 
<br/>
Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted. 
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Vairify.Date ("Company", “we”, “us”, or “our”), concerning your access to and use of the Vairify.Date website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions. Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted. The information provided on the Site is not intended for distribution to or use by any person or entity in any y jurisdiction
            </p>
        </div>
        <div className='pb-7 mx-auto'>
            <div className="flex items-center justify-center mb-4">
                <input type="checkbox" className="form-checkbox text-indigo-600 h-[30px] w-[30px]" />
                <label className="ml-4 block text-gray-700 font-medium text-sm text-left">
                I have read the terms and conditions, cookie, and privacy policies
                </label>
            </div>
            <Button className="mx-auto font-black text-[23.4px] text-[#01195C] mt-8" text={'Next >'} onClick={handleNext}/>
        </div>
    </div>
  )
}
