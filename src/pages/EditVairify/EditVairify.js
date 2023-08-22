import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputText from '../../components/InputText';

export default function EditVairify() {
    const navigate = useNavigate()
    const handleClickPhoto = () => {
        const input = document.getElementById("photo-upload");

        input.click();
    }
    const handleChange = (event) => {
        if(!!event.target.files[0]) {
            const previewImage = document.getElementById("imagePreview");
            previewImage.src = URL.createObjectURL(event.target.files[0]);
            previewImage.onload = function() {
                URL.revokeObjectURL(previewImage.src);
            }
        }
    }

    const navigateToStaffSettings = () => {
        navigate('/staff-settings')
    }

    const navigateToBusinessHours = () => {
        navigate('/business-hours')
    }

    const navigateToBusinessRateServices = () => {
        navigate('/business-rate-services');
    }

    return (
        <div className="main-container">
            <div className="pt-6 w-full max-auto flex flex-col justify-center items-center">
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <span className='font-bold text-[18px]'>Enter VAI<span className='font-normal text-[18px]'>RIFY </span>ID</span>
                    <div className='max-w-[122.4px] ml-5'><InputText size="27.9px" className="rounded-none bg-white opacity-60 border-2 border-black" placeholder={"VAIRIFY ID"} /></div>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <div className="w-[178px] h-[160px] flex flex-col justify-start items-center border-[#0247FF] border-2 rounded-lg">
                        <img id="imagePreview" style={{overflow: 'hidden', width: '100%'}} className="rounded-t-lg" src={process.env.PUBLIC_URL + "/images/PhotoBrowser.png"} alt="Vector Camera" />
                        <div className="mt-3"><span className="text-[16px] font-medium">Photos</span></div>
                    </div>
                </div>
                <div className="relative custom-select-border w-[120px] h-[34px] mt-5">
                    <button className="photo-upload-btn text-white text-[20px] font-extrabold" onClick={handleClickPhoto}>
                        Browse
                    </button>
                    <input 
                        type="file"
                        accept="image/png, image/jpeg, image/gif"
                        name="Choose Image"
                        className="image-file-input"
                        id="photo-upload"
                        onChange={handleChange}
                    />
                </div>

                {/* <div className="w-full flex flex-col justify-center items-center mt-5">
                    <div className="w-[178px] h-[157px] flex flex-col justify-center items-center border-[#0247FF] border-2 rounded-lg">
                        <img style={{overflow: 'hidden', width: '100%'}} src={process.env.PUBLIC_URL + "/images/VectorVideo.png"} alt="Vector Camera" />
                        <div className="mt-3"><span className="text-[16px] font-medium">Videos</span></div>
                    </div>
                </div>
                <div className="relative custom-select-border w-[120px] h-[34px] mt-5">
                    <button className="photo-upload-btn text-white text-[20px] font-extrabold" onClick={handleClickVideo}>
                        Browse
                    </button>
                    <input 
                        type="file"
                        accept="image/png, image/jpeg, image/gif"
                        name="Choose Image"
                        className="image-file-input"
                        id="video-upload"
                        onChange={handleChange}
                    />
                </div> */}

                <div className="w-full mt-5">
                    <div className="text-[16px] font-bold txt-custom-align-left pl-5 pb-2">
                        <span>Description</span>
                    </div>
                    <textarea rows="3"
                        className="block p-2.5 w-full text-[15px] text-gray-900 rounded-sm border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-gray-200 focus-visible:border-0" 
                        placeholder="">
                    </textarea>
                </div>

                <div className='w-full mx-auto flex flex-col justify-center items-center mt-7'>
                    <div className='w-[259px]'><Button onClick={() => navigateToStaffSettings()} text="Edit Staff Permissions" className={'bg-gradient-to-b from-[#02227E] to-[#0247FF] font-bold text-[21.6px] text-white rounded-[25px] border-2 border-white shadow-2xl'} /></div>
                    <div className='w-[136px] mt-5'><Button onClick={() => navigateToBusinessHours()} text="Add Staff" className={'bg-gradient-to-b from-[#02227E] to-[#0247FF] font-bold text-[21.6px] text-white'} /></div>
                </div>
            </div>
            <div className="mt-custom-34 w-full flex flex-row justify-between items-center">
                <Button text="Skip>>" className="custom-btn-bg bg-transparent shadow-none text-[#01195C] text-[26px] focus:bg-transparent" />
                <Button onClick={() => navigateToBusinessRateServices()} text="Finished" className="custom-btn-bg text-[#01195C] text-[26px]" />
            </div>
        </div>
    );
}