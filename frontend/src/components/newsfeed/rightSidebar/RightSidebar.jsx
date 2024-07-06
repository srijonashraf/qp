import React from "react";
import SponsorAds from "../main/suggestions/subComponents/SponsorAds";
import FriendRequest from "./subComponents/FriendRequest";
import Birthday from "./subComponents/Birthday";
import Contacts from "./subComponents/Contacts";
import GroupConversations from "./subComponents/GroupConversations";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <SponsorAds />
      <FriendRequest />
      <Birthday />
      <Contacts />
      <GroupConversations />
    </div>
  );
};

export default RightSidebar;
