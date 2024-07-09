import axios from "axios";
import { create } from "zustand";
import { axiosHeader } from "./../constants/axiosHeader";

const baseurl = `https://quantumpossibilities.eu:82/api`;

const usePostStore = create((set) => ({
  Posts: null,
  FetchPostsRequest: async () => {
    try {
      const res = await axios.get(
        `${baseurl}/get-all-users-posts?pageNo=1&pageSize=20`,
        axiosHeader()
      );
      if (res.status === 200) {
        set({
          Posts: res.data.posts,
        });
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  },
}));

export default usePostStore;
