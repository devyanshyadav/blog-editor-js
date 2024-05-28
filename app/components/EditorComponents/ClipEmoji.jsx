import React, { useEffect, useRef, useState } from "react";
import { Picker } from "emoji-picker-element";
import { RiEmotionLine } from "react-icons/ri";
import DevButton from "../DevButton";

export default function ClipEmoji({ emojiTxt, clipClass }) {
  const pickerRef = useRef(null);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  let pickerInstance = null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        isDropDownVisible
      ) {
        setIsDropDownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownVisible]);

  useEffect(() => {
    if (isDropDownVisible && pickerRef.current) {
      pickerInstance = new Picker();
      pickerRef.current.appendChild(pickerInstance);
      pickerInstance.style =
        "position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; border-radius: 8px; overflow: hidden;";

      pickerInstance.addEventListener("emoji-click", (event) => {
        const emojiValue = event.detail.emoji.unicode;
        emojiTxt(emojiValue);
      });
    } else if (pickerInstance && pickerRef.current) {
      pickerRef.current.removeChild(pickerInstance);
      pickerInstance = null;
    }

    return () => {
      if (pickerInstance && pickerRef.current) {
        pickerRef.current.removeChild(pickerInstance);
      }
    };
  }, [isDropDownVisible, emojiTxt]);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <div className="relative grid place-content-center" ref={pickerRef}>
      <DevButton
        ripple={true}
        onClick={toggleDropDown}
        size="lg"
        icon={true}
        variant="customForIcon"
      >
        <RiEmotionLine />
      </DevButton>
    </div>
  );
}
