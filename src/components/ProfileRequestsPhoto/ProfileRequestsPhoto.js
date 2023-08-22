import React from 'react'

const ProfileRequestsPhoto = () => {
    return (
        <div className="flex flex-col justify-between">
            <div className="flex justify-around">
                <div>
                    <span className="text-[#040C50] block text-center font-roboto-serif text-[18px]">
                        <span className="font-bold">VAI</span>RIFY ID
                    </span>
                    <span className="text-[#040C50] block text-center font-roboto font-bold text-[15px]">
                        4445Y64
                    </span>
                </div>
                <div className="-mt-[50px] relative ">
                    <img
                        src="images/EllipseSugar.png"
                        className="max-w-[125px] h-[125px] w-full rounded-full"
                    />
                    <button className="bg-black absolute bottom-0 right-0 flex items-center justify-center rounded-full block w-7 h-7">
                        <img src="/images/add-profile.png" className="" />
                    </button>
                </div>
                <div>
                    <span className="text-[#040C50] block text-center font-roboto-serif text-[18px]">
                        <span className="font-bold">TRU</span>REVU
                        <span className="text-[13px] font-bold">ⓒ</span>
                    </span>
                    <div className="flex gap-1 items-start">
                        <div className="flex gap-1 mt-1">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <img src="/images/Star.svg" className="w-[10px]  h-[10px]" />
                            ))}
                        </div>
                        <span className="text-[#040C50] block text-center font-roboto font-bold text-[15px]">
                            5.0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileRequestsPhoto
