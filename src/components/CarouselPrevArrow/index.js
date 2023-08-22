import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function CarouselPrevArrow(props) {
    const { className, style, onClick, admin } = props

    return (
        <div>
            {
                admin == 'true' ?
                <div
                    className={`${className} bg-gray-300 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    style={{ ...style, left: "-50px", display: "flex", justifyContent: "center", alignItems: "center"}}
                    onClick={onClick}
                >
                    {/* <FontAwesomeIcon icon={faAngleLeft} className="carousel-arrow-btn" /> */}
                    <img src={process.env.PUBLIC_URL + '/images/LeftVectorIcon.png'} alt="Left Vector Icon" />
                </div>
                :
                <div
                    className={`${className} bg-gray-300 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    style={{ ...style, left: "-20px", display: "flex", justifyContent: "center", alignItems: "center"}}
                    onClick={onClick}
                >
                    <img src={process.env.PUBLIC_URL + '/images/LeftVectorIcon.png'} alt="Left Vector Icon" />
                </div>
            }
        </div>
    );
}