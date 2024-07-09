import React, { useEffect } from "react";
import SponsorAds from "../main/suggestions/subComponents/SponsorAds";
import FriendRequest from "./subComponents/FriendRequest";
import Birthday from "./subComponents/Birthday";
import Contacts from "./subComponents/Contacts";
import GroupConversations from "./subComponents/GroupConversations";
import useProfileStore from "../../../store/ProfileStore";

const RightSidebar = () => {
  const { FetchSuggestionList } = useProfileStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await FetchSuggestionList();
      } catch (error) {
        console.error("Error fetching suggestion list:", error);
      }
    };

    fetchData();
  }, [FetchSuggestionList]);

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
