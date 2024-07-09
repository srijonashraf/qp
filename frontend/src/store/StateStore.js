import { create } from "zustand";

const useStateStore = create((set) => ({
  backgroundColor: "#334BC6",
  textContent: "",
  privacy: "Public",
  selectedImage: null,
  imageScale: 100, // Add image scale to store
  createStoryFlag: false,
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTextContent: (text) => set({ textContent: text }),
  setPrivacy: (privacy) => set({ privacy: privacy }),
  setSelectedImage: (image) => set({ selectedImage: image }),
  setImageScale: (scale) => set({ imageScale: scale }), // Add image scale setter
  setCreateStory: (flag) => set({ createStoryFlag: flag }),
}));

export default useStateStore;
