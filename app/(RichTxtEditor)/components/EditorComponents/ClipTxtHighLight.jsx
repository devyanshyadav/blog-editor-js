"use client";
import React from "react";
import { LuHighlighter } from "react-icons/lu";
import DevDropDown from "../DevDropDown";
import DevButton from "../DevButton";
import DevColorPicker from "../DevColorPicker";

export default function ClipTxtHighLight({ highlightText, clipClass }) {
  const color = [null,"yellow", "green", "blue", "pink", "orange", "red"];
  return (
    <DevDropDown
      popButton={
        <DevButton ripple={true} size="lg" icon={true} variant="customForIcon">
          <LuHighlighter />
        </DevButton>
      }
    >
      <DevColorPicker color={color} setColor={highlightText}/>
    </DevDropDown>
  );
}
