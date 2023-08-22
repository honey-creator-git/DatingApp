import React from "react";
import ProfileUserPhoto from "../../components/ProfileUserPhoto/ProfileUserPhoto";
const comments = [
  {
    photo: "/images/manual-selfie.png",
    name: "darekwilga",
    time: "14m",
    comment: "Wow!!! you are amazing",
    like: "1",
  },
  {
    photo: "/images/AdminNotificationUser.png",
    name: "darekwilga",
    time: "14m",
    comment: "When will you be in Dallas?",
    like: "1",
  },
  {
    photo: "/images/DetailAdComment1.png",
    name: "darekwilga",
    time: "14m",
    comment: "I was just thinking, I would love to be that couch",
    like: "1",
  },
  {
    photo: "/images/manual-selfie.png",
    name: "darekwilga",
    time: "14m",
    comment: "Wow!!! you are amazing",
    like: "1",
  },
];
const Comment = () => {
  return (
    <div>
      <ProfileUserPhoto />
      <p className="text-[#000] font-bold text-[24px] text-center font-roboto">Crystal</p>
      <h2 className="font-roboto text-black text-[21px] font-black py-3">
        Comments
      </h2>
      <div className="flex flex-col px-[36px] pb-10 gap-[37px]">
        {comments.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <img src={item.photo} className="w-[36px] h-[36px]" />
                <span className="text-[14px] font-roboto font-bold text-black">
                  {item.name}
                </span>
                <span className="text-[14px] font-roboto font-bold text-[#000]/[33%]">
                  {item.time}
                </span>
              </div>
              <div className="min-h-[40px]">
                <span className="text-[14px] text-left block font-roboto font-bold text-black">
                  {item.comment}
                </span>
              </div>
              <div className="flex gap-[27px]">
                <span className="text-[14px] font-roboto font-bold text-[#000]/[33%]">
                  {item.like} like
                </span>
                <button className="text-[14px] font-roboto font-bold text-[#000]/[33%]">
                  Reply
                </button>
                <button className="text-[14px] font-roboto font-bold text-[#000]/[33%]">
                  See Translation
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
