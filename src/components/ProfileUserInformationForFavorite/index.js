import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

export default function ProfileUserInformationForFavorite() {
    return (
        <div className="w-full flex flex-row justify-center items-center custom-position-right-20">
            <div className="custom-position-left-52 w-min-134">
                <img className="w-full" src={process.env.PUBLIC_URL + "/images/BusinessMassage.png"} alt="Hot Rod" />
            </div>
            <div className="w-max-316 flex flex-col justify-center items-center custom-padding-2 profile_user_bg">
                <div className="flex flex-col justify-between items-center">
                    <div className="w-full text-custom-45 f-custom-white flex flex-col justify-center items-start">
                        <span style={{textAlign: 'left'}}>Intimate Touch Massage</span>
                    </div>
                    <div className="w-full text-custom-26 f-custom-white flex flex-col justify-center items-start mt-custom-5">
                        <span>VAIRIFY ID 7DHF584</span>
                    </div>
                    <div className="w-full text-custom-26 flex flex-row justify-start items-center mt-custom-5">
                        <div className="flex flex-row justify-center items-center text-custom-26 f-custom-white mr-custom-36">
                            <FontAwesomeIcon icon={faHeart} className="mr-custom-3 f-custom-12" />
                            <span>Add to favourites</span>
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