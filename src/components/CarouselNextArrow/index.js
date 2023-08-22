import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function CarouselNextArrow(props) {
    const { className, style, onClick, admin } = props

    return (
        <div>
            {
                admin == 'true' ?
                <div
                    className={`${className} bg-gray-300 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    style={{ ...style, right: "-50px", display: "flex", justifyContent: "center", alignItems: "center"}}
                    onClick={onClick}
                >
                    {/* <FontAwesomeIcon icon={faAngleRight} className="carousel-arrow-btn" /> */}
                    <img src={process.env.PUBLIC_URL + '/images/RightVectorIcon.png'} alt="Right Navigation" />
                </div>
                :
                <div
                    className={`${className} bg-gray-300 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    style={{ ...style, right: "-20px", display: "flex", justifyContent: "center", alignItems: "center"}}
                    onClick={onClick}
                >
                    {/* <FontAwesomeIcon icon={faAngleRight} className="carousel-arrow-btn" /> */}
                    <img src={process.env.PUBLIC_URL + '/images/RightVectorIcon.png'} alt="Right Vector Icon" />
                </div>
            }
        </div>
    )
}