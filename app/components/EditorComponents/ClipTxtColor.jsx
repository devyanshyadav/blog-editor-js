"use client";

import React from "react";

import { RiCircleFill, RiFontSize } from "react-icons/ri";
import { MdFormatColorText } from "react-icons/md";
import DevDropDown from "../DevDropDown";
import DevButton from "../DevButton";

export default function ClipTxtColor({ changeColor, clipClass }) {
  let color = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Cyan",
  ];

  return (
    <DevDropDown
      popButton={
        <DevButton ripple={true} size="lg" icon={true} variant="customForIcon">
         <MdFormatColorText />
        </DevButton>
      }
    >
      <div className="h-full flex gap-1 w-32 flex-wrap bg-primary items-center justify-center  p-1 rounded-xl border border-accent ">
        {color.map((e, i) => (
          <button
            key={i}
            className="bg-white cursor-pointer p-1 rounded-md"
            onClick={() => changeColor(e)}
          >
            <RiCircleFill
              size={18}
              style={{ color: e }}
              className="border rounded-full"
            />
          </button>
        ))}
      </div>
    </DevDropDown>
  );
}
