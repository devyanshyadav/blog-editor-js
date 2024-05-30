'use client'
import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import DevDynamicStore from '../../libs/utils/BlogDynamicStore';

const HTMLAceEditor = () => {
  const { textData, setTextData } = DevDynamicStore();

  return (
    <AceEditor
    mode="html"
    theme="github"
    value={textData}
    onChange={(e) => setTextData(e)}
    name="code-editor"
    height="100%"
    width="100%"
    fontSize="15px"
    wrapEnabled
    style={{
      fontFamily: "Source Code Pro, monospace;",
      borderRadius: "0 0 12px 12px",
      marginTop: "10px",
    }}
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      showLineNumbers: true,
      tabSize: 2,
    }}
  />
  )
}

export default HTMLAceEditor