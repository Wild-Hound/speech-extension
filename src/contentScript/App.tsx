import React from "react";
import styled from "styled-components";
import PlayBtn from "../Components/Atoms/PlayBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PauseBtn from "../Components/Atoms/PauseBtn";
import StopBtn from "../Components/Atoms/StopBtn";

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const stopIcon = <FontAwesomeIcon icon={faStop} />;

const Wrapper = styled("div")`
  min-width: fit-content;
  background-color: #2c3e50;
  padding: 1rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
`;
const BtnGroup = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  return (
    <Wrapper>
      <BtnGroup>
        <PauseBtn>{pauseIcon}</PauseBtn>
        <PlayBtn>{playIcon}</PlayBtn>
        <StopBtn>{stopIcon}</StopBtn>
      </BtnGroup>
    </Wrapper>
  );
};

export default App;
