"use client";
import React from "react";
import DevButton from "./DevButton";
import DevTooltip from "./DevTooltip";
import DevStore from "../libs/utils/BlogStore";

const StateManager = ({
  pastStates,
  futureStates,
  setTextData,
  setSwitchTab,
  clear,
}) => {
  const { setPastTabs, setFutureTabs, markedPastTabs, markedFutureTabs } =
    DevStore(); //In Progress

  const handleClearStates = () => {
    const response = confirm("Are you sure you want to clear all the states?");
    if (response) {
      clear();
      setSwitchTab(1);
    }
  };

  return (
    <section className="w-full h-full grid grid-cols-2 gap-2 divide-x mt-2 relative">
      <div className="space-y-3">
        <h1 className="text-cyan-800 font-semibold pl-2 sticky">Past States</h1>
        <div className="w-full grid grid-cols-7 gap-[2px] overflow-y-scroll max-h-80">
          {pastStates.map((e, i) => (
            <button
              key={i}
              onClick={() => {
                setTextData(e?.textData);
                setSwitchTab(1);
              }}
              className="bg-slate-100 border-none !text-cyan-800 hover:bg-slate-300 active:scale-90"
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3 pl-3">
        <h1 className="text-cyan-800 font-semibold pl-2">Future States</h1>
        <div className="w-full grid grid-cols-7 gap-[2px] overflow-y-scroll max-h-80">
          {futureStates.map((e, i) => (
            <button
              key={i}
              onClick={() => {
                setTextData(e?.textData);
                setSwitchTab(1);
              }}
              className="bg-slate-100 border-none !text-cyan-800 hover:bg-slate-300 active:scale-90"
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <DevButton
        size="sm"
        className="absolute bottom-4 right-2"
        onClick={handleClearStates}
      >
        Clear States
      </DevButton>
    </section>
  );
};

export default StateManager;
