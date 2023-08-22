import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function PersonalUserInformation() {
    return (
        <div className="w-full flex flex-row justify-center items-center custom-position-right-20">
            <img className="custom-position-left-35" src={process.env.PUBLIC_URL + "/images/BusinessMassage.png"} alt="Hot Rod" />
            <div className="w-max-316 flex flex-col justify-center items-center custom-padding-2 profile_user_bg">
                <div className="flex flex-col justify-between items-center">
                    <div style={{textAlign: 'left'}}  className="w-full text-custom-45 f-custom-white personal-user-name">
                        <span>Intimate Touch Massage</span>
                    </div>
                    <div style={{textAlign: 'left'}}  className="w-full text-custom-46 f-custom-white mt-custom-5">
                        <span>VAIRIFY ID 7DHF584</span>
                    </div>
                    <div className="w-full text-custom-2 f-custom-white">
                        <div className="flex flex-row justify-left items-center">
                            <button className="">
                                <FontAwesomeIcon icon={faStar} className="f-custom-12 mr-custom-5" />
                            </button>
                            <button className="">
                                <FontAwesomeIcon icon={faStar} className="f-custom-12 mr-custom-5" />
                            </button>
                            <button className="">
                                <FontAwesomeIcon icon={faStar} className="f-custom-12 mr-custom-5" />
                            </button>
                            <button className="">
                                <FontAwesomeIcon icon={faStar} className="f-custom-12 mr-custom-5" />
                            </button>
                            <button className="">
                                <FontAwesomeIcon icon={faStar} className="f-custom-12 mr-custom-5" />
                            </button>
                            <span>4.7</span>
                        </div>
                    </div>
                    <div className="w-full text-custom-26 flex flex-row justify-left items-center mt-custom-5">
                        <div className="flex flex-row justify-center items-center text-custom-26 f-custom-white mr-custom-35">
                            <FontAwesomeIcon icon={faHeart} className="mr-custom-3 f-custom-12" />
                            <span>Follow</span>
                        </div>
                        <div className="flex flex-row justify-center items-center text-custom-26 f-custom-white">
                            <FontAwesomeIcon icon={faShare} className="mr-custom-3 f-custom-12" />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}