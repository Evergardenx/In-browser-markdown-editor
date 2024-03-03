import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

import MarkdownEditorWindow from "./MarkdownEditorWindow";
import PreviewWindow from "./PreviewWindow";

const StyledHome = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.color.markdownbody};
  background-color: ${(props) => props.theme.background.main};
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? "250px" : "0px")}
  );
  transition: 0.3s;
`;
const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.divider};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CreateDocumentMessage = styled.div`
  margin-top: 12px;
  margin-left: 16px;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.color.markdownbody};
`;

const Home = ({ inputRef, showSidebar }) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument } = useContext(DocumentContext);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = () => {
    showPreview ? setShowPreview(false) : setShowPreview(true);
  };

  return (
    <StyledHome showSidebar={showSidebar} theme={theme}>
      {activeDocument ? (
        <>
          <MarkdownEditorWindow
            ref={inputRef}
            showPreview={showPreview}
            handlePreview={handlePreview}
          />
          <Divider theme={theme} />
          <PreviewWindow
            showPreview={showPreview}
            handlePreview={handlePreview}
          />
        </>
      ) : (
        <CreateDocumentMessage theme={theme}>
          Looks like you deleted everything! Please create a new document in the
          sidebar :)
        </CreateDocumentMessage>
      )}
    </StyledHome>
  );
};

Home.displayName = "Home";
export default Home;
