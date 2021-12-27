import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  outline: none;
  position: relative;
`;

const StyledIndicator = styled(animated.span)`
  font-size: 1.2rem;
  right: 0;
`;

const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <div>
      <StyledButton onClick={toggleTheme}>
        {theme === "light" ? (
          <StyledIndicator>🌙</StyledIndicator>
        ) : (
          <StyledIndicator>☀️</StyledIndicator>
        )}
      </StyledButton>
    </div>
  );
};

export default ThemeSwitch;
