import React from "react";
import avatar1 from "../../../../assets/image/user.png";
import avatar2 from "../../../../assets/image/user4.png";
import avatar3 from "../../../../assets/image/user2.png";
import SearchIcon from "./../../../../assets/icons/navbar/SearchIcon";

const Contacts = () => {
  const contacts = [
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
      img: avatar3,
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

  return (
    <div className="bg-white p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-raleway font-semibold text-[16px]">Contacts</h3>
        <SearchIcon width="15" height="15" className="text-gray-500" />
      </div>
      <ul className="flex flex-col gap-3 mt-2">
        {contacts.map((item, key) => (
          <li key={key}>
            <div className="flex items-center gap-2">
              <img
                src={item.img}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />

              <p className="font-raleway font-semibold text-[13px]">
                {item.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
