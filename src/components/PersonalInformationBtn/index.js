import React from 'react';

export default function PersonalInformationBtn({imgURL, alt, text, className, onClick}) {
    return (
        <div className={`w-full relative ${className ? className : ''}`}>
            <button onClick={onClick} className="w-full flex flex-row justify-between items-center personal-information-btn custom-padding-3">
                <img className="mr-custom-20 w-min-20 relative right-10" src={process.env.PUBLIC_URL + imgURL} alt={alt} />
                <div className="text-custom f-custom-white absolute" style={{left: '38%'}}>
                    <span>{text}</span>
                </div>
            </button>
        </div>
    );
}