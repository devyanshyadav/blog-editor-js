"use client";

import React from "react";
import { RiCircleFill, RiFontSize } from "react-icons/ri";
import { LuHighlighter } from "react-icons/lu";
import DevDropDown from "../DevDropDown";
import DevButton from "../DevButton";

export default function ClipTxtHighLight({ highlightText, clipClass }) {
  const color = ["yellow", "green", "blue", "pink", "orange", "red"];
  return (
    <DevDropDown
      popButton={
        <DevButton ripple={true} size="lg" icon={true} variant="customForIcon">
          <LuHighlighter />
        </DevButton>
      }
    >
      <div className="h-full flex gap-1 w-32 flex-wrap bg-primary items-center justify-center  p-1 rounded-xl border border-accent ">
        {color.map((e, i) => (
          <button
            key={i}
            className="bg-white cursor-pointer p-1 rounded-md"
            onClick={() => highlightText(e)}
          >
            <RiCircleFill
              size={18}
              style={{ color: e }}
              className="rounded-full border"
            />
          </button>
        ))}
      </div>
    </DevDropDown>
  );
}
