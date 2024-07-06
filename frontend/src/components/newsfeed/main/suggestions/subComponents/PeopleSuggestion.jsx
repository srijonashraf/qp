import React from "react";
import userAvatar from "../../../../../assets/image/user.png";
import FriendRequestIcon from "../../../../../assets/icons/suggestion/FriendRequestIcon";

const PeopleSuggestion = () => {
  const peoples = [
    {
      name: "Angelina Super",
      matchedFriends: "6 Friends in common",
      img: userAvatar,
    },
    {
      name: "Angelina Super",
      matchedFriends: "6 Friends in common",
      img: userAvatar,
    },
    {
      name: "Angelina Super",
      matchedFriends: "6 Friends in common",
      img: userAvatar,
    },
  ];

  return (
    <div className="p-3 rounded bg-white">
      <div className="flex items-center justify-between">
        <h3 className="font-bold font-roboto text-base text-brand-secondary">
          People You May Know
        </h3>
        <p className="font-medium font-poppins text-xs text-brand-primary">
          See All
        </p>
      </div>
      <ul className="flex flex-col gap-4 py-3">
        {peoples.map((item, key) => (
          <li key={key} className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-400 object-cover"
                src={item.img}
                alt={`${item.name}'s avatar`}
              />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold text-[14px]">{item.name}</p>
                <p className="font-poppins font-normal text-[10px] text-brand-primary">
                  {item.matchedFriends}
                </p>
              </div>
            </div>
            <FriendRequestIcon className="text-brand-secondary" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleSuggestion;
