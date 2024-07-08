import React from "react";
import avatar1 from "../../../../assets/image/user.png";
import avatar2 from "../../../../assets/image/user4.png";
import avatar3 from "../../../../assets/image/user2.png";
import SearchIcon from "./../../../../assets/icons/navbar/SearchIcon";
import RoundedPlusIcon from "../../../../assets/icons/rightmenu/RoundedPlusIcon";

const GroupConversations = () => {
  const conversations = [
    {
      name: "Deshi Meme",
      img: avatar3,
    },
    {
      name: "Tour De Bangladesh",
      img: avatar2,
    },
    {
      name: "Hashir Khorak",
      img: avatar3,
    },
    {
      name: "Bangladesh Protidin",
      img: avatar1,
    },
  ];

  return (
    <div className="bg-white p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-raleway font-semibold text-[16px]">
          Group conversations
        </h3>
        <SearchIcon
          width="15"
          height="15"
          className="cursor-pointer text-gray-500"
        />
      </div>
      <ul className="flex flex-col gap-3 mt-2">
        {conversations.map((item, key) => (
          <li key={key}>
            <div className="flex items-center gap-2">
              <img
                src={item.img}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />

              <p className="font-raleway font-semibold text-[13px] cursor-pointer">
                {item.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 items-center mt-2">
        <RoundedPlusIcon />
        <p className="font-semibold font-raleway text-base">Create New Group</p>
      </div>
    </div>
  );
};

export default GroupConversations;
