import { create } from "zustand";

const useStateStore = create((set) => ({
  update: null,
  backgroundColor: "#334BC6",
  textContent: null,
  setUpdate: () => set({ update: Date.now() }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTextContent: (text) => set({ textContent: text }),
}));

export default useStateStore;
