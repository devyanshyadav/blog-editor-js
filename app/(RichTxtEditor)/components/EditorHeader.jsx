"use client";

import React from "react";
import DevTooltip from "./DevTooltip";
import DevButton from "./DevButton";
import { BiRedo, BiUndo } from "react-icons/bi";
import EditorClips from "./EditorClips";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { RiHistoryLine } from "react-icons/ri";

const EditorHeader = ({
  undo,
  redo,
  pastStates,
  futureStates,
  setTextData,
  switchTab,
  setSwitchTab,
}) => {
  return (
    <div className="flex z-30 divide-y-2 gap-1 divide-cyan-400/50 p-1 rounded-xl flex-wrap bg-slate-50 border border-cyan-400/50 shadow items-center w-full sticky top-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 items-center">
          <span className=" bg-cyan-400/50 rounded-full p-[2px] px-2 divide-x divide-cyan-400 flex items-center justify-center">
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
            <DevTooltip tipData="Past States">
              <button className="text-sm p-1 px-2">
                {pastStates && pastStates.length}
              </button>
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
          </span>
          <DevTooltip tipData="Track Changes">
            <DevButton
              ripple={true}
              onClick={() => setSwitchTab(3)}
              icon={true}
              variant="flat"
              className="text-cyan-700"
              rounded={"full"}
            >
              <RiHistoryLine className="text-xl" />
            </DevButton>
          </DevTooltip>
        </div>
        <span className="flex items-center gap-2">
          <DevTooltip
            tipData={switchTab === 1 ? "Preview Code" : "Back to Editor"}
          >
            {switchTab === 1 ? (
              <DevButton icon={true} onClick={() => setSwitchTab(2)}>
                <IoCodeSlash className="text-xl" />
              </DevButton>
            ) : (
              <DevButton size="sm" className="text-sm" onClick={() => setSwitchTab(1)}>
                <IoMdArrowRoundBack/> Editor
              </DevButton>
            )}
          </DevTooltip>
        </span>
      </div>

      <EditorClips />
    </div>
  );
};

export default EditorHeader;
