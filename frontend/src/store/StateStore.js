import { create } from "zustand";

const useStateStore = create((set) => ({
  update: null,
  setUpdate: () => set({ update: Date.now() }),
}));

export default useStateStore;
