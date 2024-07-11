import React, { Fragment } from "react";
import avatar1 from "../../../../assets/image/user.png";
import avatar2 from "../../../../assets/image/user4.png";
import avatar3 from "../../../../assets/image/user2.png";
import LikeBlueIcon from "../../../../assets/icons/newsfeed/LikeBlueIcon";
import HeartIcon from "../../../../assets/icons/newsfeed/HeartIcon";
import HahaIcon from "../../../../assets/icons/newsfeed/HahaIcon";
import WowIcon from "../../../../assets/icons/newsfeed/WowIcon";
import SadIcon from "../../../../assets/icons/newsfeed/SadIcon";
import AngryIcon from "../../../../assets/icons/newsfeed/AngryIcon";

export default () => {
  const viewers = [
    {
      name: "Mubashra Ansari",
      img: avatar1,
      reactions: ["love", "love", "love"],
    },
    {
      name: "Mubashra Ansari",
      img: avatar2,
      reactions: ["love", "haha", "haha"],
    },
    {
      name: "Mubashra Ansari",
      img: avatar3,
      reactions: ["love", "haha"],
    },
    {
      name: "Mubashra Ansari",
      img: avatar3,
      reactions: ["haha"],
    },
    {
      name: "Mubashra Ansari",
      img: avatar1,
    },
    {
      name: "Mubashra Ansari",
      img: avatar2,
    },
    {
      name: "Mubashra Ansari",
      img: avatar3,
    },
    {
      name: "Mubashra Ansari",
      img: avatar1,
    },
  ];

  const getReactionEmoji = (reaction) => {
    switch (reaction) {
      case "like":
        return <LikeBlueIcon width="20" height="20" />;
      case "love":
        return <HeartIcon width="20" height="20" />;
      case "haha":
        return <HahaIcon width="20" height="20" />;
      case "wow":
        return <WowIcon width="20" height="20" />;
      case "sad":
        return <SadIcon width="20" height="20" />;
      case "angry":
        return <AngryIcon width="20" height="20" />;
      default:
        return "";
    }
  };

  return (
    <div className="p-5 bg-white flex flex-col shadow-md h-screen">
      <ul className="flex flex-col gap-3">
        {viewers.map((viewer, key) => (
          <li key={key} className="flex gap-4">
            <img
              src={viewer.img}
              alt=""
              className="w-12 h-12 object-cover border-2 border-brand-secondary 
              rounded-full"
            />
            <p className="flex flex-col">
              <span className="font-medium font-raleway text-lg">
                {viewer.name}
              </span>
              <span className="font-medium text-[14px] text-gray-300">18h</span>
            </p>
            <p className="flex">
              {viewer.reactions?.map((reaction, index) => (
                <Fragment key={index}>{getReactionEmoji(reaction)}</Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
