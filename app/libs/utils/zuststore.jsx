"use client";
import { create } from "zustand";
import { temporal } from "zundo";

const DevStore = create(
  temporal((set, get) => ({
    textData: "Hello world",
    toggleClip:false,
    switchTab:true,




    // Set States
    setToggleClip:()=>set((state)=>({toggleClip:!state.toggleClip})),
    setSwitchTab:()=>set((state)=>({switchTab:!state.switchTab})),
    setTextData: (e) =>
      set(() => ({
        textData: e,
      })),
  }))
);

export default DevStore;
