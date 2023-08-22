import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function BusinessCongratulation() {
    const navigate = useNavigate()
    const handleLanguage = () => {
        navigate('/language')
    }
    const handlePersonal = () => {
        navigate('/personal-information')    
    }
    const handleMutual = () => {
        navigate('/mutual-contract-sign')
    }
    const handleVairipy = () => {
        navigate('/my-vairipay')
    }
    const handleGallery = () => {
        navigate('/business-profile-gallery')
    }
    const handleInAppFacialRecognition = () => {
        navigate("/in-app-facial-recognition")
    }

    return (
        <div className="main-container pt-8">
            <div className="w-full mx-auto flex flex-col justify-center items-center">
                <div className="congratulation-title"><span className="text-[#0636C1] text-[45px] font-bold">Congratulations!</span></div>
                <div><span className="text-[#0636C1] text-[25px] font-bold">(Nickname)</span></div>
                <div><span className="text-black">Your Verification was successful</span></div>
            </div>
            <div className="w-full mx-auto flex flex-col justify-center items-start mb-14">
                <div className="w-full mx-auto flex flex-col justify-center items-center cong-time-setup mt-2"><span className="text-black text-[22px] font-bold">Time to set up your profile</span></div>
                <div className="w-full mt-8"><Button onClick={handleLanguage} text="Language" className="btn-res text-[20px] text-bold text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] flex flex-row justify-start items-center px-5 py-3 border-2 border-gray-300" /></div>
                <div className="w-full mt-4"><Button onClick={handlePersonal} text="Personal Profile" className="btn-res text-[20px] text-bold text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] flex flex-row justify-start items-center px-5 py-3 border-2 border-gray-300" /></div>
                <div className="w-full mt-4"><Button onClick={handleMutual} text="Mutual Consent Contract" className="btn-res text-[20px] text-bold text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] flex flex-row justify-start items-center px-5 py-3 border-2 border-gray-300" /></div>
                <div className="w-full mt-4"><Button onClick={handleVairipy} text="VAIRIPAYⓒ" className="btn-res text-[20px] text-bold text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] flex flex-row justify-start items-center px-5 py-3 border-2 border-gray-300" /></div>
                <div className="w-full mt-4"><Button onClick={handleGallery} text="Gallery Photo" className="btn-res text-[20px] text-bold text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] flex flex-row justify-start items-center px-5 py-3 border-2 border-gray-300" /></div>
                <div className="w-full mt-4"><Button onClick={handleInAppFacialRecognition} text="In-App Facial Recognition" className="btn-res text-[20px] text-bold text-white bg-gradient-to-b from-[#02227E] to-[#0247FF] flex flex-row justify-start items-center px-5 py-3 border-2 border-gray-300" /></div>
            </div>
        </div>
    )
}