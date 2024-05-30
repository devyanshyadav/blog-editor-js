"use client";
import { create } from "zustand";
import { temporal } from "zundo";

const DevDynamicStore = create(
  temporal((set, get) => ({
    textData: "Hello world",
    switchTab: true,

    setSwitchTab: () => set((state) => ({ switchTab: !state.switchTab })),
    setTextData: (e) => {
      // Regular expression to check for <script> tags
      const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

      // Regular expression to check for <style> tags
      const styleRegex = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi;

      // Regular expression to check for <link> tags
      const linkRegex =
        /<link\b[^<]*(?:(?!<\/link>)<[^<]*)*<\/link>|<link[^>]+rel="stylesheet"[^>]*>/gi;

      // Check if the input string contains any <script> or <link> tags
      if (scriptRegex.test(e) || linkRegex.test(e) || styleRegex.test(e)) {
        // If the input contains <script> or <link> tags, log a warning or display an error message
        console.warn("Potential script or link injection detected.");
        alert("Potential script or link injection detected.");
        return;
      }

      // If no <script> or <link> tags are found, update the state with the input string
      set((prevState) => ({ ...prevState, textData: e }));
    },
  }))
);

export default DevDynamicStore;
