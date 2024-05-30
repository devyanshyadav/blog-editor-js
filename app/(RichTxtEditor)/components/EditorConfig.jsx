import React from 'react'
import ContentEditable from 'react-contenteditable'
import styled from 'styled-components';


const EditorConfigStyle = styled.div`
  ol {
    list-style-position: inside !important;
    list-style: decimal;
    accent-color: #bde968;
  }
  ul {
    list-style-position: inside !important;
    list-style: disc;
    accent-color: #bde968;
  }
`;
const EditorConfig = ({ textData, setTextData }) => {
  return (
    <EditorConfigStyle>
    <ContentEditable
      ContentEditable
      className="md:w-[96%] flex-grow mx-auto flex-1 border-none focus:outline-none p-5"
      onChange={(e) => setTextData(e.target.value)}
      html={textData}
    />
  </EditorConfigStyle>
  )
}

export default EditorConfig