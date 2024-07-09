// ProfileStore.js
import axios from "axios";
import { create } from "zustand";
import { axiosHeader } from "./../constants/axiosHeader";

const baseurl = `https://quantumpossibilities.eu:82/api`;

const useProfileStore = create((set) => ({
  ProfileDetails: null,
  ProfilePic: null,
  SuggestionList: null,
  ProfileDetailsRequest: async (credential) => {
    try {
      const res = await axios.post(
        `${baseurl}/user-login`,
        credential,
        axiosHeader()
      );
      if (res.status === 200) {
        set({
          ProfileDetails: res.data,
          ProfilePic: `https://quantumpossibilities.eu:82/uploads/${res.data.user.profile_pic}`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
  FetchSuggestionList: async () => {
    try {
      const res = await axios.get(`${baseurl}/suggestion-list`, axiosHeader());
      if (res.status === 200) {
        set({
          SuggestionList: res.data.userlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useProfileStore;
