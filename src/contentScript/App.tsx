import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlayBtn from "../Components/Atoms/PlayBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PauseBtn from "../Components/Atoms/PauseBtn";
import SiteUnsupported from "../Components/Atoms/SiteUnsupported";
import Loading from "../Components/Atoms/Loading";
import { playAudio } from "../Components/Utils/Functions/PlayAudio";
import { metaData } from "../Components/Utils/Types";
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
  const [unSupported, setUnSupported] = useState(false);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState<boolean>();
  const [audioEnded, setAudioEnded] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [webContent, setWebContent] = useState<string>();

  usePlayAudio(webContent);

  useEffect(() => {
    const host = window.location.hostname;
    if (host === "www.facebook.com") {
      setLoading(false);
      setUnSupported(true);
    } else {
      setLoading(false);
      setUnSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!audioEnded) {
      return;
    }

    setPlaying(false);
    setAudioEnded(false);
    setAudioIndex(audioIndex + 1);
  }, [audioEnded]);

  function init() {
    return unSupported ? (
      <>
        {loading && <Loading />}
        <SiteUnsupported />
      </>
    ) : (
      <>
        <Wrapper>
          {loading && <Loading />}
          {playing ? (
            <PauseBtn callback={() => pauseAudio(setPlaying)}>
              {pauseIcon}
            </PauseBtn>
          ) : (
            <PlayBtn
              callBack={() => {
                const textContent = getContent();
                setWebContent(textContent);
              }}
            >
              {playIcon}
            </PlayBtn>
          )}
        </Wrapper>
        <audio
          id="audio"
          onEnded={() => {
            setAudioEnded(true);
          }}
        >
          <source className="track" src="" type="audio/mpeg" />
        </audio>
      </>
    );
  }

  return <Wrapper>{init()}</Wrapper>;
};

export default App;
