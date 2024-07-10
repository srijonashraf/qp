import { create } from "zustand";

const useStateStore = create((set) => ({
  backgroundColor: "#334BC6",
  textContent: "Start Typing",
  privacy: "Public",
  selectedImage: null,
  imageScale: 100, // Add image scale to store
  createStoryFlag: false,
  textColor: "#000000",
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTextContent: (text) => set({ textContent: text }),
  setTextColor: (color) => set({ textColor: color }),
  setPrivacy: (privacy) => set({ privacy: privacy }),
  setSelectedImage: (image) => set({ selectedImage: image }),
  setImageScale: (scale) => set({ imageScale: scale }),
  setCreateStory: (flag) => set({ createStoryFlag: flag }),
}));

export default useStateStore;
