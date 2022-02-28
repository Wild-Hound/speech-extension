import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { pauseAudio } from "../Components/Utils/Functions/PauseAudio";
import { getContent } from "../Components/Utils/Functions/GetSiteContent";
import { usePlayAudio } from "../Components/Utils/Functions/fetchHools";
import { hoverColor, pauseColor, playColor } from "../Components/Utils/Colors";

const Wrapper = styled("div")`
  min-width: fit-content;
  background-color: #2c3e50;
  padding: 16px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 5px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const PauseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 40px;
  width: 40px;
  color: ${pauseColor};
  border: 1px solid ${pauseColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${pauseColor};
    color: ${hoverColor};
  }
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 40px;
  width: 40px;
  color: ${playColor};
  border: 1px solid ${playColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${playColor};
    color: ${hoverColor};
  }
`;

const SkipButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 32px;
  width: 32px;
  color: ${pauseColor};
  border: 1px solid ${pauseColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${pauseColor};
    color: ${hoverColor};
  }
`;

const ImportPdfButton = styled.button`
  background-color: transparent;
  border: 1px solid ${pauseColor};
  outline: none;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 5px;
  color: ${pauseColor};
  font-size: 12px;
  transition: all 0.35s;
  &:hover {
    background-color: ${pauseColor};
    color: ${hoverColor};
  }
`;

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const forwardIcon = <FontAwesomeIcon icon={faChevronLeft} />;
const backwardIcon = <FontAwesomeIcon icon={faChevronRight} />;

const App = () => {
  const [playing, setPlaying] = useState<boolean>();
  const [webContent, setWebContent] = useState<string>();
  const [incrementAudioIndex, setIncrementAudioIndex] = useState(false);
  const [decrementAudioIndex, setDecrementAudioIndex] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  usePlayAudio(
    webContent,
    setPlaying,
    audioRef,
    incrementAudioIndex,
    decrementAudioIndex,
    setIncrementAudioIndex,
    setDecrementAudioIndex
  );

  const playButtonAction = () => {
    if (webContent && audioRef.current.paused) {
      console.log("playing");
      audioRef.current.play();
      setPlaying(true);
      return;
    }
    const textContent = getContent();
    setWebContent(textContent);
  };

  const pauseButtonAction = () => pauseAudio(setPlaying);

  const AudioNode = () => (
    <audio id="audio" onEnded={() => {}} ref={audioRef}>
      <source className="track" src="" type="audio/mpeg" />
    </audio>
  );

  return (
    <Wrapper>
      <ControlsWrapper>
        <SkipButton
          onClick={() => setDecrementAudioIndex(true)}
          disabled={!playing}
        >
          {forwardIcon}
        </SkipButton>
        {!playing ? (
          <PlayButton onClick={() => playButtonAction()}>{playIcon}</PlayButton>
        ) : (
          <PauseButton onClick={() => pauseButtonAction()}>
            {pauseIcon}
          </PauseButton>
        )}
        <SkipButton
          onClick={() => setIncrementAudioIndex(true)}
          disabled={!playing}
        >
          {backwardIcon}
        </SkipButton>
      </ControlsWrapper>
      <ImportPdfButton>Import PDF</ImportPdfButton>
      {AudioNode()}
    </Wrapper>
  );
};

export default App;
