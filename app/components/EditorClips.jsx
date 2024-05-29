"use client";

import React, { useEffect, useState } from "react";
import {
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiBold,
  RiCodeFill,
  RiEmotionLine,
  RiFontSansSerif,
  RiItalic,
  RiLinkM,
  RiListOrdered2,
  RiStrikethrough,
  RiSubscript,
  RiSuperscript,
  RiUnderline,
} from "react-icons/ri";
import ClipTxtColor from "./EditorComponents/ClipTxtColor";
import ClipFontSize from "./EditorComponents/ClipFontSize";
import ClipEmoji from "./EditorComponents/ClipEmoji";
import ClipTxtHighLight from "./EditorComponents/ClipTxtHighLight";
import ClipFontFamily from "./EditorComponents/ClipFontFamily";
import { IoImageOutline } from "react-icons/io5";
import { PiVideo, PiVideoBold } from "react-icons/pi";
import { LiaRedoAltSolid, LiaUndoAltSolid } from "react-icons/lia";
import { BiRedo, BiUndo } from "react-icons/bi";
import DevButton from "./DevButton";
import DevTooltip from "./DevTooltip";
import DevStore from "../libs/utils/zuststore";
import { BsBlockquoteLeft } from "react-icons/bs";
import { GoCodeSquare } from "react-icons/go";
import { ImPageBreak } from "react-icons/im";
import { RiSpace } from "react-icons/ri";

const EditorClips = () => {
  const [selectedTxtNode, setSelectedTxtNode] = useState("");
  const { undo, redo } = DevStore.temporal.getState();

  const makeBold = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("bold", false, null);
  };
  function makeItalic() {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("italic");
  }
  // Add the rest of the functions here

  const changeColor = (colorValue) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand(
      "insertHTML",
      false,
      `<span style="color: ${colorValue}">${selectedTxtNode}</span> ‎`
    );
  };

  const changeTxtToCode = () => {
    document.execCommand("styleWithCSS", false, null);
    if (selectedTxtNode) {
      document.execCommand(
        "insertHTML",
        false,
        `<code class="bg-slate-200 rounded-md px-2">${selectedTxtNode}</code> ‎`
      );
    }
    setSelectedTxtNode("");
  };

  const insertImage = () => {
    const url = prompt("Enter the Image URL:");
    if (url) {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand(
        "insertHTML",
        false,
        `<figure>
   <img src=${url} alt="image" class="h-full max-h-72 w-full object-cover object-center rounded-md border" />
  <figcaption class="text-sm font-light">Image title</figcaption>
</figure><br/> `
      );
    }
  };

  const insertCodeBlock = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand(
      "insertHTML",
      false,
      `<pre contenteditable="false" class="relative rounded-md border bg-slate-100 p-2 text-sm overflow-hidden">
    <code contenteditable="true" class="focus:outline-none">
  const functionName=()=>{
    console.log('Hello world')
  }
   </code>
   <span class="absolute top-0 right-0 bg-slate-600 text-white px-2  rounded-bl-md">Javascript</span>
</pre><br/> `
    );
  };
  const insertVideo = () => {
    const url = prompt("Enter the Video URL:");
    if (url) {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand(
        "insertHTML",
        false,
        `<div style="display: flex; justify-content: center; width: 100%;">
        <video controls volume="0.5" style="border-radius: 6px; margin: 5px; aspect-ratio: 16/9;">
  <source src=${url} type="video/mp4">
  <source src=${url} type="video/ogg">
  Your browser does not support HTML video.
  </video>
      </div><br/>`
      );
    }
  };
  const insertBlockquote = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand(
      "insertHTML",
      false,
      `<blockquote class="my-1 rounded-r-md border-l-4 border-slate-500 bg-slate-100 p-2 text-slate-700">
       <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re      pierced.</p>
       <br>
       <footer class="text-sm"><cite>—Aldous Huxley, Brave New World</cite></footer>
      </blockquote>
      <br/>`
    );
  };
  const insertLineBreak = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertHTML", false, `<hr class="my-1" /><br/>`);
  };

  const insertWhiteLine = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertHTML", false, `<br/><br/>`);
  };

  const highlightText = (colorValue) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand(
      "insertHTML",
      false,
      `<span style="background-color: ${colorValue}">${selectedTxtNode}</span> ‎`
    );
  };

  const insertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand("createLink", false, url);
      document.execCommand("underline");
    }
  };

  const alignLeft = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("justifyLeft");
  };

  const alignCenter = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("justifyCenter");
  };

  const alignRight = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("justifyRight");
  };

  const underlineText = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("underline");
  };

  const strikeThroughText = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("strikeThrough");
  };
  const subScriptTxt = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("subscript");
  };

  const OrderedList = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertOrderedList");
  };
  const UnOrderedList = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertUnorderedList");
  };

  const emojiTxt = (value) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertText", false, value);
  };

  const changeFontFamily = (value) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("fontName", false, value);
  };

  const superScriptTxt = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("superscript");
  };

  const changeFontSize = (size, textType) => {
    let htmlToInsert = "";
    if (
      textType === "Heading 1" ||
      textType === "Heading 2" ||
      textType === "Heading 3" ||
      textType === "Heading 4" ||
      textType === "Heading 5"
    ) {
      const headingLevel = textType.split(" ")[1]; // Extract the heading level from the textType
      htmlToInsert = `<h${headingLevel} style="font-size: ${size}rem;">${selectedTxtNode}</h${headingLevel}>`;
    } else if (textType === "Paragraph") {
      htmlToInsert = `<p style="font-size: ${size}rem;">${selectedTxtNode}</p>`;
    }
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertHTML", false, htmlToInsert);
    setSelectedTxtNode("");
  };

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        setSelectedTxtNode(selectedText);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div className="flex gap-1 p-1 rounded-xl flex-wrap bg-slate-50 border border-cyan-400/50 shadow items-center w-full sticky top-0">
      <DevButton
        className="active:transform-none"
        rounded={"lg"}
        size="sm"
        variant="flat"
      >
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
      </DevButton>

      <DevTooltip tipData="Bold">
        <DevButton
          ripple={true}
          onClick={makeBold}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiBold />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Italic">
        <DevButton
          ripple={true}
          onClick={makeItalic}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiItalic />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Text Color">
        <ClipTxtColor changeColor={changeColor} />
      </DevTooltip>
      <DevTooltip tipData="Highlight Text">
        <ClipTxtHighLight highlightText={highlightText} />
      </DevTooltip>
      <DevTooltip tipData="Insert Link">
        <DevButton
          ripple={true}
          onClick={insertLink}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiLinkM />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Font Size">
        <ClipFontSize changeFontSize={changeFontSize} />
      </DevTooltip>
      <DevTooltip tipData="Align Left">
        <DevButton
          ripple={true}
          onClick={alignLeft}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiAlignLeft />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Align Center">
        <DevButton
          ripple={true}
          onClick={alignCenter}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiAlignCenter />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Align Right">
        <DevButton
          ripple={true}
          onClick={alignRight}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiAlignRight />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Underline">
        <DevButton
          ripple={true}
          onClick={underlineText}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiUnderline />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Strike Through">
        <DevButton
          ripple={true}
          onClick={strikeThroughText}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiStrikethrough />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Ordered List">
        <DevButton
          ripple={true}
          onClick={OrderedList}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiListOrdered2 />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Unrdered List">
        <DevButton
          ripple={true}
          onClick={UnOrderedList}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiListOrdered2 />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Font Family">
        <ClipFontFamily changeFontFamily={changeFontFamily} />
      </DevTooltip>
      <DevTooltip tipData="Code Format">
        <DevButton
          ripple={true}
          onClick={changeTxtToCode}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiCodeFill />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Code Block">
        <DevButton
          ripple={true}
          onClick={insertCodeBlock}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <GoCodeSquare />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Subscript">
        <DevButton
          ripple={true}
          onClick={subScriptTxt}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiSubscript />
        </DevButton>
      </DevTooltip>

      <DevTooltip tipData="Superscript">
        <DevButton
          ripple={true}
          onClick={superScriptTxt}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiSuperscript />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Insert Image">
        <DevButton
          ripple={true}
          onClick={insertImage}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <IoImageOutline />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Insert Video">
        <DevButton
          ripple={true}
          onClick={insertVideo}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <PiVideoBold />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Line Break">
        <DevButton
          ripple={true}
          onClick={insertLineBreak}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <ImPageBreak />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="White Line">
        <DevButton
          ripple={true}
          onClick={insertWhiteLine}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <RiSpace />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Block Quote">
        <DevButton
          ripple={true}
          onClick={insertBlockquote}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <BsBlockquoteLeft />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Insert Video">
        <DevButton
          ripple={true}
          onClick={insertVideo}
          size="lg"
          icon={true}
          variant="customForIcon"
        >
          <PiVideoBold />
        </DevButton>
      </DevTooltip>
      <DevTooltip tipData="Emoji">
        <ClipEmoji emojiTxt={emojiTxt} />
      </DevTooltip>

      {/* <button onClick={insertUnorderedList}>Unordered List</button> <button onClick={insertOrderedList}>Ordered List</button> */}
    </div>
  );
};

export default EditorClips;
