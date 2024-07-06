import React from "react";
import SponsorAds from "../main/suggestions/subComponents/SponsorAds";
import FriendRequest from "./subComponents/FriendRequest";
import Birthday from "./subComponents/Birthday";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <SponsorAds />
      <FriendRequest />
      <Birthday />
    </div>
  );
};

export default RightSidebar;
