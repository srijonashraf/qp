import React from "react";
import userAvatar from "../../../../../assets/image/user.png";

const PageSuggestion = () => {
  const pages = [
    {
      name: "Angelina Super",
      category: "Fashion Brand",
      img: userAvatar,
    },
    {
      name: "Angelina Super",
      category: "Fashion Brand",
      img: userAvatar,
    },
    {
      name: "Angelina Super",
      category: "Fashion Brand",
      img: userAvatar,
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded p-3">
      <h3 className="font-bold font-roboto text-[16px] text-center text-brand-secondary">
        Pages You Might Like
      </h3>
      <ul className="flex flex-col py-3 gap-4">
        {pages.map((item, key) => (
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
                  {item.category}
                </p>
              </div>
            </div>
            <button
              className="px-3 py-1 rounded-md bg-brand-primary font-roboto
             text-white font-medium text-xs"
            >
              Follow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageSuggestion;
