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
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import StateManager from "../components/StateManager";
import EditorHeader from "../components/EditorHeader";
import EditorConfig from "../components/EditorConfig";

const page = () => {
  const { textData, setTextData, switchTab, setSwitchTab } = DevStore();
  const { undo, redo, pastStates, futureStates } = DevStore.temporal.getState();

  useEffect(() => {
    console.log(futureStates);
  }, [textData]);

  return (
    <main className="flex relative flex-col max-w-4xl h-screen mx-auto text-slate-800 bg-white overflow-hidden overflow-y-scroll p-2 m-4 rounded-2xl ">
      <EditorHeader
        undo={undo}
        redo={redo}
        pastStates={pastStates}
        futureStates={futureStates}
        setTextData={setTextData}
        switchTab={switchTab}
        setSwitchTab={setSwitchTab}
      />
      {switchTab === 1 ? (
        <EditorConfig textData={textData} setTextData={setTextData} />
      ) : switchTab === 2 ? (
        <StateManager
          pastStates={pastStates}
          futureStates={futureStates}
          setTextData={setTextData}
        />
      ) : (
        <StateManager
          pastStates={pastStates}
          futureStates={futureStates}
          setTextData={setTextData}
        />
      )}
    </main>
  );
};

export default page;
