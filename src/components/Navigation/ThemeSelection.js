import React, { useContext, useState } from "react";
import styled from "styled-components";
import iconLightMode from "../../assets/icon-light-mode.svg";
import iconDarkMode from "../../assets/icon-dark-mode.svg";

import { ThemeContext } from "../../themes/themeContext";

const StyledThemeSelection = styled.div`
  width: 104px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const DarkIcon = styled.img`
  width: 16.5px;
  height: 16px;
`;
const Switch = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Slider = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: #5a6069;
  border-radius: 24px;
  transition: 0.3s all;

  &:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 6px;
    bottom: 6px;
    border-radius: 50%;
    background-color: white;
    transform: translateX(0);
    transition: 0.3s all;
  }
`;
const Checkbox = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${Slider} {
    &:before {
      transform: translateX(24px);
    }
  }
`;
const LightIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const ThemeSelection = () => {
  const { handleThemeChange } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
    handleThemeChange();
  };
  return (
    <StyledThemeSelection>
      <DarkIcon src={iconDarkMode} />
      <Switch>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={handleCheckedChange}
        />
        <Slider />
      </Switch>
      <LightIcon src={iconLightMode} />
    </StyledThemeSelection>
  );
};

export default ThemeSelection;
