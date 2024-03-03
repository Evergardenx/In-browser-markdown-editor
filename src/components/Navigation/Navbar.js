import React, { useContext } from "react";
import styled from "styled-components";
import iconMenu from "../../assets/icon-menu.svg";
import iconClose from "../../assets/icon-close.svg";
import iconDocument from "../../assets/icon-document.svg";

import SaveButton from "./SaveButton";
import DeleteButton from "./DeleteButton";
import { DocumentContext } from "../../documents/documentContext";

const StyledNavbar = styled.div`
  width: 100vw;
  height: 72px;
  color: #ffffff;
  background-color: #2b2d31;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? "250px" : "0px")}
  );
  transition: 0.3s;

  @media screen and (max-width: 768px) {
    height: 56px;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const MenuButton = styled.div`
  height: 72px;
  width: 72px;
  background-color: #35393f;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e46643;
  }

  @media screen and (max-width: 768px) {
    height: 56px;
    width: 56px;
  }
`;
const MenuIcon = styled.img``;
const Title = styled.div`
  height: 100%;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Commissioner", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 5px;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;
const Divider = styled.div`
  height: 40px;
  margin-right: 24px;
  border-left: 1px solid #5a6069;
  align-self: center;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;
const DocumentContainer = styled.div`
  height: 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 1020px) {
    margin-left: 24px;
  }

  @media screen and (max-width: 768px) {
    height: 18px;
  }
`;
const DocumentIcon = styled.img`
  height: 16px;
  align-self: center;
`;
const DocumentNameContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #c1c4cb;
  margin-left: 16px;
  display: flex;
  flex-flow: column nowrap;
`;
const DocumentName = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const DocumentNameEditor = styled.input`
  width: 400px;
  color: #ffffff;
  background-color: #2b2d31;
  border: none;
  margin-bottom: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 0px;
  caret-color: #e46643;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #ffffff;
  }
  @media screen and (max-width: 767px) {
    width: calc(100vw - 216px);
    max-width: 400px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Navbar = ({ showSidebar, handleSidebar, handleEnter, setModalOpen }) => {
  const { activeDocument, onDocumentNameChange } = useContext(DocumentContext);

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
      handleEnter();
    }
  };

  return (
    <StyledNavbar showSidebar={showSidebar}>
      <LeftContainer>
        <MenuButton onClick={handleSidebar}>
          <MenuIcon src={showSidebar ? iconClose : iconMenu} />
        </MenuButton>
        <Title>MARKDOWN</Title>
        <Divider />
        <DocumentContainer>
          <DocumentIcon src={iconDocument} />
          <DocumentNameContainer>
            <DocumentName>Document Name</DocumentName>
            <DocumentNameEditor
              value={
                activeDocument ? activeDocument.name : "no available document"
              }
              disabled={!activeDocument}
              type="text"
              onChange={onDocumentNameChange}
              onKeyUp={handleKeyUp}
            />
          </DocumentNameContainer>
        </DocumentContainer>
      </LeftContainer>
      <RightContainer>
        <DeleteButton setModalOpen={setModalOpen} />
        <SaveButton />
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
