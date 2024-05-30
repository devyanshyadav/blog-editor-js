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
}) => {
  const { setPastTabs, setFutureTabs, markedPastTabs, markedFutureTabs } =
    DevStore(); //In Progress

  return (
    <section className="w-full grid grid-cols-2 gap-2 divide-x">
      <div className="space-y-3">
        <h1 className="text-cyan-800 font-semibold pl-2">Past States</h1>
        <div className="w-full flex flex-wrap gap-1">
          {pastStates.map((e, i) => (
            <DevButton
              key={i}
              onClick={() => {
                setTextData(e?.textData);
                setSwitchTab(1);
              }}
              ripple={true}
              rounded="none"
              className="bg-slate-200 border-none !text-cyan-800"
              size="lg"
              icon={true}
            >
              {i + 1}
            </DevButton>
          ))}
        </div>
      </div>
      <div className="space-y-3 pl-3">
        <h1 className="text-cyan-800 font-semibold pl-2">Future States</h1>
        <div className="w-full flex flex-wrap gap-1">
          {futureStates.map((e, i) => (
            <DevButton
              key={i}
              onClick={() => {
                setTextData(e?.textData);
                setSwitchTab(1);
              }}
              ripple={true}
              size="lg"
              icon={true}
              rounded="none"
              className="bg-slate-200 border-none !text-cyan-800"
            >
              {i + 1}
            </DevButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateManager;
