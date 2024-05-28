"use client";
import React, { useEffect, useRef, useState } from "react";
import DevStore from "./libs/utils/zuststore";
import EditorClips from "./components/EditorClips";
import ContentEditable from "react-contenteditable";

const page = () => {
  const { textData, setTextData } = DevStore();

  useEffect(() => {
    console.log(textData);
  }, [textData]);

  return (
    <main className="flex relative flex-col max-w-5xl h-screen mx-auto text-white bg-slate-800 p-0 overflow-hidden overflow-y-scroll ">
      <EditorClips />
      <ContentEditable
        ContentEditable
        className="md:w-[96%] flex-grow mx-auto flex-1 border-none focus:outline-none p-5"
        onChange={(e) => setTextData(e.target.value)}
        html={textData}
      />
    </main>
  );
};

export default page;
