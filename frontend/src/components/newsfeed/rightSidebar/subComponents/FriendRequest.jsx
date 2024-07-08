import React from "react";
import avatar1 from "../../../../assets/image/user4.png";
import avatar2 from "../../../../assets/image/user2.png";
import avatar3 from "../../../../assets/image/user.png";

const FriendRequest = () => {
  const requests = [
    {
      name: "Harmain Shakeel",
      date: "2h",
      img: avatar2,
    },
    {
      name: "Wade Warren",
      date: "2 Day",
      img: avatar1,
    },
    {
      name: "Cameron Bae",
      date: "2h",
      img: avatar3,
    },
  ];

  return (
    <div className="flex flex-col bg-white p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium font-poppins text-[14px] text-left">
          Friend Request
        </h3>
        <p className="text-brand-primary font-poppins font-normal text-[15px] cursor-pointer">
          See all
        </p>
      </div>
      <ul className="flex flex-col py-2 gap-4">
        {requests.map((item, key) => (
          <li key={key}>
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={item.img}
                alt={`${item.name}'s avatar`}
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-poppins cursor-pointer font-medium text-[14px]">
                    {item.name}
                  </p>
                  <p className="font-poppins font-normal text-[10px] text-brand-primary">
                    {item.date} ·
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-1.5 rounded bg-brand-primary font-poppins
             text-white font-normal text-xs"
                  >
                    Confirm
                  </button>
                  <button
                    className="px-5 py-1.5 rounded bg-black
             text-white font-normal font-poppins text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequest;
