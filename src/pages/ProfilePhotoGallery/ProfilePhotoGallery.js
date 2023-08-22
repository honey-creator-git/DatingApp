import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function ProfilePhotoGallery() {
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
    const handleClickVideo = () => {
        const input = document.getElementById("video-upload");

        input.click();
    }

    const handleSubmit = () => {
        navigate('/in-app-facial-recognition')
    }

    return (
        <div className="main-container">
            <div className="pt-6 w-full max-auto flex flex-col justify-center items-center">
                <div className="text-[27px] font-extrabold"><span>Photo Gallery</span></div>
                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <div className="w-[178px] h-[160px] flex flex-col justify-center items-center border-[#0247FF] border-2 rounded-lg">
                        <div className='w-[88px] h-[74px]'><img id="imagePreview" style={{overflow: 'hidden', width: '100%'}} className="w-full h-full" src={process.env.PUBLIC_URL + "/images/VectorCamera.png"} alt="Vector Camera" /></div>
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

                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <div className="w-[178px] h-[157px] flex flex-col justify-center items-center border-[#0247FF] border-2 rounded-lg">
                        <div className='w-[82px] h-[69px]'><img style={{overflow: 'hidden', width: '100%'}} className='w-full h-full' src={process.env.PUBLIC_URL + "/images/VectorVideo.png"} alt="Vector Camera" /></div>
                        <div className="mt-3"><span className="text-[16px] font-medium">Video</span></div>
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
                </div>

                <div className="w-full mt-5">
                        {/* <div className="text-[16px] font-bold txt-custom-align-left">
                            <span>Discription</span>
                        </div> */}
                    <textarea rows="3"
                        className="block p-2.5 w-full text-[15px] text-gray-900 rounded-sm border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-gray-200 focus-visible:border-0" 
                        placeholder="">
                    </textarea>
                </div>
            </div>
            <div className="mt-custom-34 w-full flex flex-row justify-between items-center">
                <Button onClick={handleSubmit} text="Skip>>" className="custom-btn-bg bg-transparent shadow-none text-[#01195C] text-[26px] focus:bg-transparent" />
                <Button onClick={handleSubmit} text="Upload>>" className="custom-btn-bg text-[#01195C] text-[26px]" />
            </div>
        </div>
    );
}