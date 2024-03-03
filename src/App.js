import React, { useContext, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./themes/themeContext";
// import Modal from "react-modal";

import CustomModal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Commissioner', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }
  h2 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 37px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }
  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;            
    color: ${({ theme }) => theme.color.htmlheaders};
  }
  h4 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }
  h5 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.htmlheaders};
  }
  h6 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.color.h6};

  }
  p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.previewbody};
  }
  ol li {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding-left: 9px;
  }
  ul li {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding-left: 9px;

    &::marker {
      color: #E46643;
      font-size: 6px;
    }
  }
  blockquote {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    border-left: 4px solid #E46643;
    background-color: ${({ theme }) => theme.background.blockquote};
  }
  blockquote p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.blockquote};
  }
  blockquote p a {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.blockquote};
  }
  p code {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.code};
  }
  pre {
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.background.blockquote};
  }
  pre code {
    white-space: pre-wrap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.code};
  }
`;

const StyledApp = styled.div``;

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSidebar = () => {
    setShowSidebar(showSidebar ? false : true);
  };

  const handleEnter = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      <StyledApp appElement={StyledApp}>
        <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Navigation
          showSidebar={showSidebar}
          handleSidebar={handleSidebar}
          handleEnter={handleEnter}
          setModalOpen={setModalOpen}
        />
        <Home inputRef={inputRef} showSidebar={showSidebar} />
      </StyledApp>
    </>
  );
};

export default App;
