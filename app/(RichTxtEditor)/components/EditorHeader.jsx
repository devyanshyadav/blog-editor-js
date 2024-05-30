"use client";

import React from "react";
import DevTooltip from "./DevTooltip";
import DevButton from "./DevButton";
import { BiRedo, BiUndo } from "react-icons/bi";
import EditorClips from "./EditorClips";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

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
    <div className="flex divide-y-2 gap-1 divide-cyan-400/50 p-1 rounded-xl flex-wrap bg-slate-50 border border-cyan-400/50 shadow items-center w-full sticky top-0">
      <div className="flex items-center justify-between w-full">
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
            <DevButton
              ripple={true}
              size="sm"
              variant="customForIcon"
              rounded="none"
              className="text-sm"
            >
              {pastStates && pastStates.length}
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
        </span>
        <span className="flex items-center gap-2">
          <DevTooltip tipData="Track Changes">
            <DevButton
              ripple={true}
              onClick={() => setSwitchTab(3)}
              icon={true}
            >
              <VscGitPullRequestGoToChanges className="text-xl" />
            </DevButton>
          </DevTooltip>
          <DevTooltip
            tipData={switchTab === 1 ? "Preview Code" : "Back to Editor"}
          >
            {switchTab === 1 ? (
              <DevButton icon={true} onClick={() => setSwitchTab(2)}>
                <IoCodeSlash className="text-xl" />
              </DevButton>
            ) : (
              <DevButton icon={true} onClick={() => setSwitchTab(1)}>
                <IoMdArrowRoundBack className="text-xl" />
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
