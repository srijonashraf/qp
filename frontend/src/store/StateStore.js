import { create } from "zustand";

const useStateStore = create((set) => ({
  backgroundColor: "#334BC6",
  textContent: "",
  privacy: "Public",
  createStoryFlag: false,
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTextContent: (text) => set({ textContent: text }),
  setPrivacy: (privacy) => set({ privacy: privacy }),
  setCreateStory: (flag) => set({ createStoryFlag: flag }),
}));

export default useStateStore;
