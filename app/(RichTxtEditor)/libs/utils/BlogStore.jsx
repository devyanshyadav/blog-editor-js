"use client";
import { create } from "zustand";

const DevStore = create((set, get) => ({
  toggleClip: false,
  switchTab: 1,
  markedPastTabs: [],
  markedFutureTabs: [],

  // Set States
  setPastTabs: (e) => set((state) => ({ markedPastTabs: [...state.markedPastTabs, e] })),
  setFutureTabs: (e) => set((state) => ({ markedFutureTabs: [...state.markedFutureTabs, e] })),
  setToggleClip: () =>
  set((state) => ({ toggleClip: !state.toggleClip })),
  setSwitchTab: (e) => set((state) => ({ switchTab: e })),
 
}))

export default DevStore;
