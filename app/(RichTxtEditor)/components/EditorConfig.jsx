import React from "react";
import ContentEditable from "react-contenteditable";
import styled from "styled-components";

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
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 500;

  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
`;
const EditorConfig = ({ textData, setTextData }) => {
  return (
    <EditorConfigStyle>
      <ContentEditable
        contentEditable
        className="md:w-[96%] border-x  mt-2  mx-auto flex-1  focus:outline-none p-5"
        onChange={(e) => setTextData(e.target.value)}
        html={textData}
      />
    </EditorConfigStyle>
  );
};

export default EditorConfig;
