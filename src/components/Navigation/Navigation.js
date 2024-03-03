import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const StyledNavigation = styled.div``;

const Navigation = ({
  showSidebar,
  handleSidebar,
  handleEnter,
  setModalOpen,
}) => {
  return (
    <StyledNavigation>
      <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar} />
      <Navbar
        showSidebar={showSidebar}
        handleSidebar={handleSidebar}
        handleEnter={handleEnter}
        setModalOpen={setModalOpen}
      />
    </StyledNavigation>
  );
};

export default Navigation;
