import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayBtn from "../Components/Atoms/PlayBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PauseBtn from "../Components/Atoms/PauseBtn";
import StopBtn from "../Components/Atoms/StopBtn";
import SiteUnsupported from "../Components/Atoms/SiteUnsupported";
import { primaryText } from "../Components/Utils/Colors";
import Loading from "../Components/Atoms/Loading";
import { playAudio } from "./Mech";

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const stopIcon = <FontAwesomeIcon icon={faStop} />;

const Wrapper = styled("div")`
  min-width: fit-content;
  background-color: #2c3e50;
  padding: 16px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 5px;
`;
const BtnGroup = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SpeechTime = styled.div`
  font-size: 24px;
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 24px;
  color: ${primaryText};
`;

const App = () => {
  const [unSupported, setUnSupported] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const host = window.location.hostname;
    if (host === "www.google.com") {
      setLoading(false);
      setUnSupported(true);
    } else {
      setLoading(false);
      setUnSupported(false);
    }
  }, []);

  function init() {
    if (loading) {
      return <Loading />;
    }

    return unSupported ? (
      <SiteUnsupported />
    ) : (
      <>
        <SpeechTime>3:23</SpeechTime>
        <BtnGroup>
          <PauseBtn>{pauseIcon}</PauseBtn>
          <PlayBtn func={playAudio}>{playIcon}</PlayBtn>
          <StopBtn>{stopIcon}</StopBtn>
        </BtnGroup>
      </>
    );
  }

  return <Wrapper>{init()}</Wrapper>;
};

export default App;
