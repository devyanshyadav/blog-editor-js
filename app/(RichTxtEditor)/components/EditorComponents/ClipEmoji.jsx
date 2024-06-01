import React from "react";
import DevEmojiPicker from "../DevEmojiPicker";
import DevButton from "../DevButton";
import DevDropDown from "../DevDropDown";
import { RiEmotionLine } from "react-icons/ri";

const ClipEmoji = ({ emojiTxt }) => {
  return (
    <DevDropDown
      popButton={
        <DevButton ripple={true} size="lg" icon={true} variant="customForIcon">
          <RiEmotionLine />
        </DevButton>
      }
    >
      <DevEmojiPicker emojiTxt={emojiTxt} />
    </DevDropDown>
  );
};

export default ClipEmoji;
