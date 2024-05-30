"use client";
import { create } from "zustand";
import { temporal } from "zundo";
import isDeepEqual from "fast-deep-equal";
import { persist } from "zustand/middleware";

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
