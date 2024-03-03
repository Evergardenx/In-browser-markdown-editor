import React, { useContext } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { ThemeContext } from "../../themes/themeContext";
import { DocumentContext } from "../../documents/documentContext";

const StyleModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.background.main};
`;
const Header = styled.div`
  width: 295px;
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.htmlheaders};
`;
const Text = styled.div`
  width: 295px;
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.previewbody};
`;
const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 40px;
  margin: 0px;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: #e46643;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  &:hover {
    background-color: #f39765;
  }
`;

const CustomModal = ({ modalOpen, setModalOpen }) => {
  const { theme } = useContext(ThemeContext);
  const { deleteDocument } = useContext(DocumentContext);
  return (
    <StyleModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      theme={theme}
      style={{
        overlay: {
          backgroundColor: "rgba(124, 129, 135, .5)",
        },
      }}
    >
      <Header theme={theme}>Delete this document?</Header>
      <Text theme={theme}>
        Are you sure you want to delete the ‘welcome.md’ document and its
        contents? This action cannot be reversed.
      </Text>
      <Button
        onClick={() => {
          setModalOpen(false);
          deleteDocument();
        }}
      >
        Confirm & Delete
      </Button>
    </StyleModal>
  );
};

export default CustomModal;
