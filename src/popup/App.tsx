import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PauseBtn from "../Components/Atoms/PauseBtn";
import StopBtn from "../Components/Atoms/StopBtn";
import PlayBtn from "../Components/Atoms/PlayBtn";

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

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const stopIcon = <FontAwesomeIcon icon={faStop} />;

const App = () => {
  return (
    <GlobalWrapper>
      <BtnGroup>
        <PauseBtn>{pauseIcon}</PauseBtn>
        {/* <PlayBtn>{playIcon}</PlayBtn> */}
        <StopBtn>{stopIcon}</StopBtn>
      </BtnGroup>
    </GlobalWrapper>
  );
};

export default App;
