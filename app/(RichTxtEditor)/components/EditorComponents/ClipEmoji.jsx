"use client";
import React, { useEffect, useRef, useState } from "react";
import { Picker } from "emoji-picker-element";
import { RiCircleFill, RiEmotionLine, RiFontSize2 } from "react-icons/ri";

export default function ClipEmoji({ emojiTxt }) {
  const pickerRef = useRef(null);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  let pickerInstance = null; // Store the Picker instance

  useEffect(() => {
    if (isDropDownVisible && pickerRef.current) {
      pickerInstance = new Picker();
      pickerRef.current.appendChild(pickerInstance);

      // Add event listener for emoji selection
      pickerInstance.addEventListener("emoji-click", (event) => {
        const emojiValue = event.detail.emoji.unicode;
        emojiTxt(emojiValue);
        // Here you can handle the selected emoji value, e.g., update state, call a function, etc.
      });
    } else if (pickerInstance && pickerRef.current) {
      // Cleanup: Remove the Picker when the dropdown is hidden
      pickerRef.current.removeChild(pickerInstance);
      pickerInstance = null; // Reset the Picker instance
    }

    // Cleanup function to remove the picker when the component unmounts
    return () => {
      if (pickerInstance && pickerRef.current) {
        pickerRef.current.removeChild(pickerInstance);
      }
    };
  }, [isDropDownVisible]); // Depend on the visibility state

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <>
    <p onClick={toggleDropDown}>Hello</p>
      <div
        togButton={
          <button onClick={toggleDropDown}>
            <RiEmotionLine />
          </button>
        }
        setExternal={setIsDropDownVisible}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="rounded-xl border border-accent overflow-hidden"
          ref={pickerRef}
        ></div>
      </div>
    </>
  );
}
