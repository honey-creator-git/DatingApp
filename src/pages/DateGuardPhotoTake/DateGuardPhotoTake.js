import React from 'react';

export default function DateGuardPhotoTake() {
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
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <div className='mr-4'><span className='font-bold text-[30px] text-[#4200FF]'>Date Guard</span></div>
                    <div className='w-[28px] h-[33px]'><img src={process.env.PUBLIC_URL + '/images/Mask2.png'} alt="Mark Second Logo" /></div>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-9'><span className='font-bold text-[14.4px]'>Take a photo</span></div>
                <div className="w-full flex flex-col justify-center items-center mt-5">
                    <div className="w-[178px] h-[160px] flex flex-col justify-start items-center border-[#0247FF] border-2 rounded-lg">
                        <img id="imagePreview" style={{overflow: 'hidden', width: '100%'}} className="rounded-t-lg" src={process.env.PUBLIC_URL + "/images/DateGuardPhotoIcon.png"} alt="Date Guard Camera" />
                    </div>
                </div>
                <div className="relative custom-select-border w-[108px] h-[31px] mt-5">
                    <button className="w-full h-full bg-[#4200FF] rounded-md text-[#D9D9D9] text-[20px] font-bold" onClick={handleClickPhoto}>
                        Photos
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
                <div className='w-full mx-auto flex flex-col justify-center items-start mt-12 mb-20'>
                    <div className='px-2'><span className='font-bold text-[18px] text-[#D9D9D9]'>Message</span></div>
                    <div className='w-full mx-auto flex flex-row justify-center items-center'>
                        <textarea rows="3"
                            className="block p-2.5 w-full text-[15px] text-gray-900 rounded-md border-0 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white bg-[#E2E2E2] focus-visible:border-0 mt-2"
                            placeholder="">
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}