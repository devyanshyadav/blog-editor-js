"use client";

import React from "react";
import { RiCircleFill, RiFontSize2 } from "react-icons/ri";
import DevDropDown from "../DevDropDown";
import DevButton from "../DevButton";

export default function ClipFontSize({ changeFontSize, clipClass }) {
  const Font = [
    {
      txtType: "Paragraph",
      fontSize: 1,
    },
    {
      txtType: "Heading 1",
      fontSize: 2.5,
    },
    {
      txtType: "Heading 2",
      fontSize: 2,
    },
    {
      txtType: "Heading 3",
      fontSize: 1.75,
    },
    {
      txtType: "Heading 4",
      fontSize: 1.5,
    },
    {
      txtType: "Heading 5",
      fontSize: 1.25,
    },
  ];

  return (
    <DevDropDown
      popButton={
        <DevButton ripple={true} size="lg" icon={true} variant="customForIcon">
          <RiFontSize2 />
        </DevButton>
      }
    >
      <div className="h-full grid grid-cols-1 gap-1 w-fit text-secondary flex-wrap bg-primary items-center justify-center  p-1 rounded-xl bg-white border shadow-md">
        {Font.map((e, i) => (
          <DevButton
            key={i}
            size="sm"
            className="bg-slate-200 border-none !text-black hover:bg-accent rounded-md cursor-pointer border !p-0 !px-2"
            onClick={() => changeFontSize(e.fontSize, e.txtType)}
          >
            <span style={{ fontSize: `${e.fontSize}rem` }}>{e.txtType}</span>
          </DevButton>
        ))}
      </div>
    </DevDropDown>
  );
}
