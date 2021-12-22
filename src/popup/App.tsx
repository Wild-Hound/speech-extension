import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

const playColor = "#2ecc71";
const pauseColor = "#3498db";
const stopColor = "#e74c3c";
const hoverColor = "#34495e";

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const stopIcon = <FontAwesomeIcon icon={faStop} />;

const GlobalWrapper = styled("div")`
  width: 200px;
  min-width: fit-content;
  background-color: #2c3e50;
  padding: 1rem;
`;
const BtnGroup = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayBtn = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 2.5rem;
  width: 2.5rem;
  color: ${playColor};
  border: 1px solid ${playColor};
  border-radius: 22px;
  padding-right: 0.25rem;
  transition: all 0.35s;
  margin: 0 1rem;
  &:hover {
    background-color: ${playColor};
    color: ${hoverColor};
  }
`;

const PauseBtn = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  color: ${pauseColor};
  border: 1px solid ${pauseColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${pauseColor};
    color: ${hoverColor};
  }
`;

const StopBtn = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  color: ${stopColor};
  border: 1px solid ${stopColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${stopColor};
    color: ${hoverColor};
  }
`;

const App = () => {
  return (
    <GlobalWrapper>
      <BtnGroup>
        <PauseBtn>{pauseIcon}</PauseBtn>
        <PlayBtn>{playIcon}</PlayBtn>
        <StopBtn>{stopIcon}</StopBtn>
      </BtnGroup>
    </GlobalWrapper>
  );
};

export default App;
