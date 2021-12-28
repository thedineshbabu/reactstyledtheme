import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import ThemeSwitch from "./ThemeSwitch";
import { lightTheme, darkTheme } from "./theme";
import About from "./components/About";
import Arrow from "./components/arrow.svg";
import SkillsList from "./components/SkillsList";
import Timeline from "./components/Timeline";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    margin: 0;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
`;

const StyledHeader = styled.header`
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
`;

const StyledMain = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  min-height: 100vh;
`;

const StyledImg = styled.span`
  font-size: 3rem;
  cursor: pointer;
`;

const StyledTheme = styled.div`
  position: fixed;
  top: 10;
  right: 10;
`;

export default function App() {
  const [theme, setTheme] = React.useState("dark");
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme} setTheme={setTheme}>
      <GlobalStyle />
      <StyledApp>
        <StyledHeader>
          <span
            style={{
              fontSize: "1.5rem",
            }}
          >
            👨🏻‍💻
          </span>
          <div
            style={{
              position: "fixed",
              top: 10,
              right: 10,
            }}
          >
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: 10,
              right: 10,
            }}
          >
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
          </div>
        </StyledHeader>

        <StyledMain>
          <About />
        </StyledMain>
        <StyledMain>
          <SkillsList />
        </StyledMain>
        <StyledMain>
          <Timeline />
        </StyledMain>
        <StyledMain>
          {/* {isDark ? (
            <>
              <StyledImg role="img" arial-label="light">
                🌙
              </StyledImg>
              <p>Dark theme is even better</p>
            </>
          ) : (
            <>
              <StyledImg role="img" arial-label="dark">
                ☀️
              </StyledImg>
              <p>Light theme is nice</p>
            </>
          )} */}
          <h1>Contact</h1>
        </StyledMain>
      </StyledApp>
    </ThemeProvider>
  );
}
