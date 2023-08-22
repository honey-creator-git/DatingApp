import React from 'react';

export default function PersonalInformationBtn_({imgURL, alt, text}) {
    return (
        <div className="w-full">
            <button className="w-full flex flex-row justify-start items-center rounded-full
             px-8 py-2 bg-gradient-to-b from-[#02227E] to-[#0247FF]">
                <img className="w-5 h-5" src={process.env.PUBLIC_URL + imgURL} alt={alt} />
                <div className="text-lg font-medium text-gray-100 w-full">
                    <span>{text}</span>
                </div>
            </button>
        </div>
    );
}