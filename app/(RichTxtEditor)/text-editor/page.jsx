"use client";
import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { BiRedo, BiUndo } from "react-icons/bi";
import DevButton from "../components/DevButton";
import DevTooltip from "../components/DevTooltip";
import { IoCodeSlash } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import DevStore from "../libs/utils/BlogStore";
import EditorClips from "../components/EditorClips";
import styled from "styled-components";

const EditorConfig = styled.div`  

ol {
  list-style-position: inside !important;
  list-style: decimal;
  accent-color: #bde968;
}
ul {
  list-style-position: inside !important;
  list-style: disc;
  accent-color: #bde968;
}

`
const page = () => {
  const { textData, setTextData, switchTab, setSwitchTab } = DevStore();
  const { undo, redo } = DevStore.temporal.getState();


  useEffect(() => {
    console.log(textData);
  }, [textData]);

  return (
    <main className="flex relative flex-col max-w-4xl h-screen mx-auto text-slate-800 bg-white overflow-hidden overflow-y-scroll p-2 m-4 rounded-2xl ">
      <div className="flex divide-y-2 gap-1 divide-cyan-400/50 p-1 rounded-xl flex-wrap bg-slate-50 border border-cyan-400/50 shadow items-center w-full sticky top-0">
        <div className="flex items-center justify-between w-full">
          <DevButton
            className="active:transform-none"
            rounded={"lg"}
            size="sm"
            variant="flat"
          >
            <DevTooltip tipData="Undo">
              <DevButton
                ripple={true}
                onClick={() => undo()}
                size="sm"
                icon={true}
                variant="customForIcon"
                rounded="full"
              >
                <BiUndo className="text-xl" />
              </DevButton>
            </DevTooltip>
            <DevTooltip tipData="Redo">
              <DevButton
                ripple={true}
                onClick={() => redo()}
                size="sm"
                icon={true}
                variant="customForIcon"
                rounded="full"
              >
                <BiRedo className="text-xl" />
              </DevButton>
            </DevTooltip>
          </DevButton>
          <DevTooltip tipData="Preview Code">
            <DevButton icon={true} onClick={setSwitchTab}>
              {switchTab ? (
                <IoCodeSlash className="text-xl" />
              ) : (
                <IoMdArrowRoundBack className="text-xl" />
              )}
            </DevButton>
          </DevTooltip>
        </div>

        <EditorClips />
      </div>
      {switchTab ? (
        <EditorConfig>
          <ContentEditable
          ContentEditable
          className="md:w-[96%] flex-grow mx-auto flex-1 border-none focus:outline-none p-5"
          onChange={(e) => setTextData(e.target.value)}
          html={textData}
        />
        </EditorConfig>
      ) : (
        <textarea
          spellCheck={false}
          value={textData}
          onChange={(e) => setTextData(e.target.value)}
          className="md:w-[96%] shadow-md rounded-b-lg flex-grow mx-auto flex-1 border-none focus:outline-none p-5 bg-slate-100"
        />
      )}
    </main>
  );
};

export default page;
