import React from 'react';

export default function ImageUpload({ name, buttonName, type }) {
    const handleClick = () => {
        const input = document.getElementById("image-upload");

        input.click();
    }
    const handleChange = (event) => {
        const input = document.getElementById("business-profile-image-content");
        input.value = event.target.files[0] ? event.target.files[0].name : '';
    }
    return (
        <div className="w-full flex flex-row justify-start items-start h-[50px] border-gray-400 custom-border-width custom-border-radius">
            <div className="relative custom-select-border h-[50px]">
                <button className="image-upload-btn text-[14px] font-extrabold" onClick={handleClick}>
                    {buttonName}
                </button>
                <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    name="Choose Image"
                    className="image-file-input"
                    id="image-upload"
                    onChange={handleChange}
                />
            </div>
            <div className="custom-input-border">
                <input
                    className="w-full text-[20px] h-[50px] text-black custom-input "
                    id="business-profile-image-content"
                    name={name}
                    type={type}
                />
            </div>
        </div>
    );
}