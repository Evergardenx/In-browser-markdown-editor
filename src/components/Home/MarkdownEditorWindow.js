import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

import PreviewButton from "./PreviewButton";

const StyledEditorContainer = styled.div`
  display: ${({ showPreview }) => (showPreview ? "none" : "flex")};
  flex-flow: column nowrap;
  height: 100%;
  width: 50%;
  outline: none;
  border: none;

  @media screen and (max-width: 768px) {
    width: ${({ showPreview }) => (showPreview ? "0%" : "1000%")};
  }
`;
const TitleContainer = styled.div`
  height: 42px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.sectionheader};
  background-color: ${({ theme }) => theme.background.sectionheader};
`;
const ShowPreviewButton = styled(PreviewButton)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Editor = styled.textarea`
  height: calc(100% - 120px);
  padding-left: 16px;
  outline: none;
  border: none;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.markdownbody};
  background-color: ${({ theme }) => theme.background.main};
`;

const MarkdownEditorWindow = forwardRef((props, inputRef) => {
  const { theme } = useContext(ThemeContext);
  const { activeDocument, onDocumentContentChange } =
    useContext(DocumentContext);

  return (
    <StyledEditorContainer showPreview={props.showPreview}>
      <TitleContainer theme={theme}>
        MARKDOWN
        <ShowPreviewButton
          showPreview={props.showPreview}
          handlePreview={props.handlePreview}
          isPreviewWindow={false}
        />
      </TitleContainer>
      <Editor
        type="text"
        value={activeDocument.content}
        onChange={onDocumentContentChange}
        ref={inputRef}
        theme={theme}
        {...props}
      />
    </StyledEditorContainer>
  );
});

MarkdownEditorWindow.displayName = "MarkdownEditor";
export default MarkdownEditorWindow;
