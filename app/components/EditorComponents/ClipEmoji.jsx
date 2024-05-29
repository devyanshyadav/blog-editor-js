"use client";
import React, { useEffect, useRef, useState } from "react";
import { Picker } from "emoji-picker-element";
import { RiEmotionLine } from "react-icons/ri";
import DevButton from "../DevButton";
import { createPortal } from "react-dom";

export default function ClipEmoji({ emojiTxt }) {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  let pickerInstance = null;
  const [position, setPosition] = useState({ top: "", left: "" });
  const toggleRef = useRef(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        isPickerVisible
      ) {
        setIsPickerVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPickerVisible]);

  useEffect(() => {
    if (isPickerVisible && pickerRef.current) {
      pickerInstance = new Picker();
      pickerRef.current.appendChild(pickerInstance);
      pickerInstance.style =
        "position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; border-radius: 14px; overflow: hidden;";
      pickerInstance.addEventListener("emoji-click", (event) =>
        emojiTxt(event.detail.emoji.unicode)
      );
    } else if (pickerInstance && pickerRef.current) {
      pickerRef.current.removeChild(pickerInstance);
      pickerInstance = null;
    }
    return () => {
      if (pickerInstance && pickerRef.current) {
        pickerRef.current.removeChild(pickerInstance);
      }
    };
  }, [isPickerVisible, emojiTxt]);

  const togglePicker = () => setIsPickerVisible(!isPickerVisible);

  useEffect(() => {
    if (isPickerVisible && toggleRef.current) {
      const toggleRect = toggleRef.current.getBoundingClientRect();
      const pickerRect =
        pickerRef.current && pickerRef.current.getBoundingClientRect();
      const newPosition = {
        top: toggleRect.bottom,
        left: toggleRect.left + toggleRect.width / 2 - pickerRect.width / 2,
      };
      setPosition(newPosition);
    }
  }, [isPickerVisible]);

  return (
    <section className="w-fit">
      <div ref={toggleRef} className="cursor-pointer" contentEditable={false}>
        <DevButton
          ripple={true}
          onClick={togglePicker}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiEmotionLine />
        </DevButton>
      </div>
      {isPickerVisible &&
        createPortal(
          <div
            ref={pickerRef}
            style={{
              position: "fixed",
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
            className="fixed z-50"
          ></div>,
          document.body
        )}
    </section>
  );
}
