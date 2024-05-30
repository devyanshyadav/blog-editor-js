"use client";
import React, { useEffect, useRef, useState } from "react";
import DevStore from "../libs/utils/BlogStore";
import StateManager from "../components/StateManager";
import EditorHeader from "../components/EditorHeader";
import EditorConfig from "../components/EditorConfig";
import HTMLAceEditor from "../components/EditorComponents/HTMLAceEditor";
import DevDynamicStore from "../libs/utils/BlogDynamicStore";

const page = () => {
  const { textData, setTextData } = DevDynamicStore();
  const { switchTab, setSwitchTab } = DevStore();
  const demoData = {
    undo: function() {
      if (this.pastStates.length > 0) {
        const undoData = this.pastStates.pop();
        this.futureStates.push({ textData: this.textData });
        this.textData = undoData.textData;
      }
    },
    redo: function() {
      if (this.futureStates.length > 0) {
        const redoData = this.futureStates.pop();
        this.pastStates.push({ textData: this.textData });
        this.textData = redoData.textData;
      }
    },
    clear: function() {
      this.textData = '';
      this.pastStates = [];
      this.futureStates = [];
    },
    pastStates: [],
    futureStates: [],
    textData: 'Initial text'
  };
  const { undo, redo, clear, pastStates, futureStates } =
  demoData

  useEffect(() => {
    setSwitchTab(1);
  }, []);

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
        <HTMLAceEditor />
      ) : switchTab === 3 ? (
        <StateManager
          pastStates={pastStates}
          futureStates={futureStates}
          setTextData={setTextData}
          setSwitchTab={setSwitchTab}
          clear={clear}
        />
      ) : null}
    </main>
  );
};

export default page;
