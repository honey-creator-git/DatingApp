import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function ContactMember({imgURL, alt, name, chainID }) {
    return (
        <div className="w-full mx-auto flex flex-col justify-center items-center">
            <img className="w-[90px] h-[90px] rounded-full hover:border-blue-600 hover:border-[3px]" src={process.env.PUBLIC_URL + imgURL} alt={alt} />
            <div className="text-custom-26"><span>{name}</span></div>
            <div className="text-custom-35"><span>{chainID}</span></div>
            <div className="w-full mx-auto flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faStar} className="contacts-star-icon text-[#A0A0A0] hover:text-yellow-500 mr-custom-3" />
                <FontAwesomeIcon icon={faStar} className="contacts-star-icon text-[#A0A0A0] hover:text-yellow-500 mr-custom-3" />
                <FontAwesomeIcon icon={faStar} className="contacts-star-icon text-[#A0A0A0] hover:text-yellow-500 mr-custom-3" />
                <FontAwesomeIcon icon={faStar} className="contacts-star-icon text-[#A0A0A0] hover:text-yellow-500 mr-custom-3" />
                <FontAwesomeIcon icon={faStar} className="contacts-star-icon text-[#A0A0A0] hover:text-yellow-500 mr-custom-3" />
            </div>
        </div>
    );
}