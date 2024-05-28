"use client";
import { create } from "zustand";
import { temporal } from "zundo";

const DevStore = create(
  temporal((set, get) => ({
    textData: "Hello world",
    setTextData: (e) =>
      set((state) => ({
        textData: e,
      })),
  }))
);

export default DevStore;
