import React, { useState } from "react";
import useProfileStore from "../../../../store/ProfileStore";
import { formatDistanceToNow } from "date-fns";
import avatar1 from "../../../../assets/image/user4.png";
import avatar2 from "../../../../assets/image/user2.png";
import avatar3 from "../../../../assets/image/user.png";

const FriendRequest = () => {
  const { SuggestionList } = useProfileStore();
  const [showAll, setShowAll] = useState(false);

  // Slice the SuggestionList to show only first 5 items initially
  const initialRequests = SuggestionList.slice(0, 5);

  // Toggle to show all items
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col bg-white p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium font-poppins text-[14px] text-left">
          Friend Request
        </h3>
        <p
          className="text-brand-primary font-poppins font-normal text-[15px] cursor-pointer"
          onClick={handleShowAll}
        >
          {showAll ? "Collapse" : "See all"}
        </p>
      </div>
      <ul className="flex flex-col py-2 gap-4">
        {/* Map over initialRequests instead of SuggestionList */}
        {initialRequests.map((item, key) => (
          <li key={key}>
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={`https://quantumpossibilities.eu:82/uploads/${item?.profile_pic}`}
                alt={`${item.first_name}'s avatar`}
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-poppins cursor-pointer font-medium text-[14px]">
                    {item.first_name} {item.last_name}
                  </p>
                  {/* Uncomment this section if you want to display date */}
                  {/* <p className="font-poppins font-normal text-[10px] text-brand-primary ms-3">
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                    })}{" "}
                    ·
                  </p> */}
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 rounded bg-brand-primary font-poppins text-white font-normal text-xs">
                    Confirm
                  </button>
                  <button className="px-5 py-1.5 rounded bg-black text-white font-normal font-poppins text-xs">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
        {/* Conditionally render remaining items if showAll is true */}
        {showAll &&
          SuggestionList.slice(5).map((item, key) => (
            <li key={key}>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={`https://quantumpossibilities.eu:82/uploads/${item?.profile_pic}`}
                  alt={`${item.first_name}'s avatar`}
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="font-poppins cursor-pointer font-medium text-[14px]">
                      {item.first_name} {item.last_name}
                    </p>
                    {/* Uncomment this section if you want to display date */}
                    {/* <p className="font-poppins font-normal text-[10px] text-brand-primary ms-3">
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}{" "}
                      ·
                    </p> */}
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-1.5 rounded bg-brand-primary font-poppins text-white font-normal text-xs">
                      Confirm
                    </button>
                    <button className="px-5 py-1.5 rounded bg-black text-white font-normal font-poppins text-xs">
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
