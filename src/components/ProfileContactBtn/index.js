import React from 'react';

export default function MessageBtn({imgUrl, alt}) {
    return (
        <div className="">
            <button className="profile-contact-btn custom-padding-17">
                <img src={process.env.PUBLIC_URL + imgUrl} alt={alt} />
            </button>
        </div>
    );
}