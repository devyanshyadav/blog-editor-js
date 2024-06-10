"use client";

import React, { useEffect, useId, useState } from "react";
import {
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiBold,
  RiCodeFill,
  RiItalic,
  RiLinkM,
  RiListOrdered2,
  RiListUnordered,
  RiStrikethrough,
  RiSubscript,
  RiSuperscript,
  RiUnderline,
} from "react-icons/ri";
import ClipTxtColor from "../components/EditorComponents/ClipTxtColor";
import { FiMoreVertical } from "react-icons/fi";
import ClipFontSize from "../components/EditorComponents/ClipFontSize";
import ClipEmoji from "../components/EditorComponents/ClipEmoji";
import ClipTxtHighLight from "../components/EditorComponents/ClipTxtHighLight";
import ClipFontFamily from "../components/EditorComponents/ClipFontFamily";
import { IoImageOutline } from "react-icons/io5";
import { PiVideoBold } from "react-icons/pi";
import DevButton from "./DevButton";
import DevTooltip from "./DevTooltip";
import { BsBlockquoteLeft } from "react-icons/bs";
import { GoCodeSquare } from "react-icons/go";
import { ImPageBreak } from "react-icons/im";
import { RiSpace } from "react-icons/ri";
import DevStore from "../libs/utils/BlogStore";
import CLipTable from "./EditorComponents/CLipTable";
import { ImTable2 } from "react-icons/im";
import ReactDOMServer from "react-dom/server";
import DevPopover from "./DevPopover";
import { RxCross2 } from "react-icons/rx";

const EditorClips = () => {
  const [selectedTxtNode, setSelectedTxtNode] = useState("");
  const { toggleClip, setToggleClip } = DevStore();
  const uniqueID = useId();

  const formatText = (command, value = null) => {
    if (value === "unset") {
      document.execCommand("styleWithCSS", false, null);
    }
    document.execCommand(command, false, value);
    setSelectedTxtNode("");
  };

  const makeBold = () => {
    formatText("bold");
  };

  const makeItalic = () => {
    formatText("italic");
  };

  const changeColor = (colorValue) => {
    if (selectedTxtNode) {
      formatText("foreColor", colorValue);
    }
  };

  const changeTxtToCode = () => {
    if (selectedTxtNode) {
      formatText(
        "insertHTML",
        `<code class="bg-slate-200 rounded-md px-2">${selectedTxtNode}</code> ‎`
      );
    }
  };

  const insertImage = () => {
    const url = prompt("Enter the Image URL:");
    if (url) {
      formatText(
        "insertHTML",
        `<figure>
   <img src=${url} alt="image" class="h-full max-h-72 w-full object-cover object-center rounded-md border" />
  <figcaption class="text-sm font-light">Image title</figcaption>
</figure><br/> `
      );
    }
  };

  const insertCodeBlock = () => {
    formatText(
      "insertHTML",
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
      formatText(
        "insertHTML",
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
    formatText(
      "insertHTML",
      `<blockquote class="my-1 rounded-r-md border-l-4 border-slate-500 bg-slate-100 p-2 text-slate-700">
       <p>Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're      pierced.</p>
       <br>
       <footer class="text-sm"><cite>—Aldous Huxley, Brave New World</cite></footer>
      </blockquote>
      <br/>`
    );
  };

  const insertLineBreak = () => {
    formatText("insertHTML", `<hr class="my-1" /><br/>`);
  };

  const insertWhiteLine = () => {
    formatText("insertHTML", `<br/><br/>`);
  };

  const highlightText = (colorValue) => {
    if (selectedTxtNode) {
      formatText("hiliteColor", colorValue);
    }
  };

  const insertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      formatText("createLink", url);
      formatText("underline");
    }
  };

  const alignLeft = () => {
    formatText("justifyLeft");
  };

  const alignCenter = () => {
    formatText("justifyCenter");
  };

  const alignRight = () => {
    formatText("justifyRight");
  };

  const underlineText = () => {
    formatText("underline");
  };

  const strikeThroughText = () => {
    formatText("strikeThrough");
  };

  const subScriptTxt = () => {
    formatText("subscript");
  };

  const OrderedList = () => {
    formatText("insertOrderedList");
  };

  const UnOrderedList = () => {
    formatText("insertUnorderedList");
  };

  const emojiTxt = (value) => {
    formatText("insertText", value);
  };

  const changeFontFamily = (value) => {
    formatText("fontName", value);
  };

  const superScriptTxt = () => {
    formatText("superscript");
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
      const headingLevel = textType.split(" ")[1];
      htmlToInsert = `<h${headingLevel}>${selectedTxtNode}</h${headingLevel}>`;
    } else if (textType === "Paragraph") {
      htmlToInsert = `<p>${selectedTxtNode}</p>`;
    }
    formatText("insertHTML", htmlToInsert);
  };

  const insertTable = () => {
    const data = prompt("Enter number of rows and columns separated by comma");
    const [rows, columns] = data.split(",").map(Number);

    const htmlStringTable = ReactDOMServer.renderToString(
      <CLipTable rows={rows} columns={columns} key={uniqueID} />
    );

    formatText("insertHTML", `${htmlStringTable} <br/> `);
    restoreCaretPosition();
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
    <div
      className="flex gap-1 relative overflow-hidden pt-1"
      style={{ flexWrap: toggleClip && "wrap" }}
    >
      <span
        className="absolute right-0 top-0 bottom-0 bg-cyan-400 cursor-pointer  text-xl h-full rounded-l-md grid place-content-center"
        onClick={() => setToggleClip(!toggleClip)}
      >
        <DevTooltip tipData="More Tools" place="left">
          <FiMoreVertical />
        </DevTooltip>
      </span>

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
      <DevTooltip tipData="Highlight Text">
        <ClipTxtHighLight highlightText={highlightText} />
      </DevTooltip>
      <DevTooltip tipData="Font Family">
        <ClipFontFamily changeFontFamily={changeFontFamily} />
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
          <RiListUnordered />
        </DevButton>
      </DevTooltip>

      <DevTooltip tipData="Table">
        {/* <DevPopover
          popButton={
            <DevButton
              ripple={true}
              size="lg"
              icon={true}
              variant="customForIcon"
            >
              <ImTable2 />
            </DevButton>
          }
        >
          <div className="w-32 space-y-1 border shadow-md rounded-md bg-white p-1">
            <span className="w-full text-cyan-700 flex select-none items-center justify-between gap-2 text-sm">
              <label htmlFor="rows" className="text-sm">Rows</label>
              <RxCross2 />
              <label htmlFor="columns" className="text-sm">Columns</label>
            </span>
            <span className="w-full text-cyan-700 grid grid-cols-2 gap-1  rounded-md">
              <input value={tableData.rows} onChange={(e) => setTableData((prev)=>({...prev,rows:e.target.value}))} id="rows" type="number" className="border rounded-md pl-2"  />
              <input value={tableData.columns} onChange={(e) => setTableData((prev)=>({...prev,columns:e.target.value}))} id="columns" type="number" className="border rounded-md pl-2" />
            </span>
            <DevButton
              className="w-full  text-xs"
              size="sm"
              ripple={true}
              onClick={insertTable}
            >
              Create Table
            </DevButton>
          </div>
        </DevPopover> */}
        <DevButton
          ripple={true}
          size="lg"
          icon={true}
          variant="customForIcon"
          onClick={insertTable}
        >
          <ImTable2 />
        </DevButton>
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
