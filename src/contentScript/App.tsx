import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlayBtn from "../Components/Atoms/PlayBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import PauseBtn from "../Components/Atoms/PauseBtn";
import { pauseAudio } from "../Components/Utils/Functions/PauseAudio";
import { getContent } from "../Components/Utils/Functions/GetSiteContent";
import { usePlayAudio } from "../Components/Utils/Functions/fetchHools";

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;

const Wrapper = styled("div")`
  min-width: fit-content;
  background-color: #2c3e50;
  padding: 16px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 5px;
  z-index: 1000;
`;

const App = () => {
  const [playing, setPlaying] = useState<boolean>();
  const [webContent, setWebContent] = useState<string>();
  const audioRef = useRef<HTMLAudioElement>(null);

  usePlayAudio(webContent, setPlaying, audioRef);

  return (
    <Wrapper>
      <Wrapper>
        {playing ? (
          <PauseBtn callback={() => pauseAudio(setPlaying)}>
            {pauseIcon}
          </PauseBtn>
        ) : (
          <PlayBtn
            callBack={() => {
              if (webContent && audioRef.current.paused) {
                console.log("playing");
                audioRef.current.play();
                setPlaying(true);
                return;
              }
              const textContent = getContent();
              setWebContent(textContent);
            }}
          >
            {playIcon}
          </PlayBtn>
        )}
        <audio id="audio" onEnded={() => {}} ref={audioRef}>
          <source className="track" src="" type="audio/mpeg" />
        </audio>
      </Wrapper>
    </Wrapper>
  );
};

export default App;
