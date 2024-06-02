"use client";

import React from "react";

import { RiCircleFill, RiFontSize } from "react-icons/ri";
import { MdFormatColorText } from "react-icons/md";
import DevDropDown from "../DevPopover";
import DevButton from "../DevButton";
import DevColorPicker from "../DevColorPicker";

export default function ClipTxtColor({ changeColor }) {
  let color = [
    null,
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
     <DevColorPicker color={color} setColor={changeColor}/>
    </DevDropDown>
  );
}
