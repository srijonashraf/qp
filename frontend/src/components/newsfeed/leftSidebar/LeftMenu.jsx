import React from "react";
import leftMenuItems from "../../../data/leftMenuItems.js";
const LeftMenu = () => {
  return (
    <div className="p-4">
      <ul className="flex flex-col gap-5">
        <div className="flex items-center gap-2 font-poppins">
          <div
            className="profile w-[30px] h-[30px] bg-slate-300 rounded-full border
           border-gray-400"
          ></div>
          <p>Demo Name</p>
        </div>
        <hr />
        {leftMenuItems.map((item, id) => {
          // Create the Icon element dynamically
          const IconComponent = item.icon;
          return (
            <li
              key={id}
              className="flex items-center gap-2 font-normal font-poppins hover:bg-gray-100 transition-all ease-linear"
            >
              <IconComponent
                width="30"
                height="30"
                className="text-brand-primary"
              />{" "}
              <p> {item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftMenu;
