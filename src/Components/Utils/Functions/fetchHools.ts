import AWS from "aws-sdk";
import { useEffect, useState } from "react";

export function usePlayAudio(
  contentText: string,
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  audioRef: React.MutableRefObject<HTMLAudioElement>
) {
  const [audioBlobObj, setAudioBlobObj] = useState<any>([]);
  const [triggeredInitPlay, setTriggeredInitPlay] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [playNext, setPlayNext] = useState(false);

  useEffect(() => {
    if (!contentText) {
      return;
    }

    const cred = new AWS.Credentials({
      accessKeyId: "AKIAQKCGTY5NTWOHHN3T",
      secretAccessKey: "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",
    });
    const polly = new AWS.Polly({ credentials: cred, region: "us-west-2" });
    // const TextContentArray = contentText.match(/.{1,1450}/g);
    const TextContentArray = contentText.split(".");
    TextContentArray.forEach((text, index) => {
      const params = {
        OutputFormat: "mp3",
        Text: text,
        TextType: "text",
        VoiceId: "Joanna",
      };
      polly.synthesizeSpeech(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          return;
        }
        if (!data?.AudioStream) {
          return;
        }
        const uInt8Array = new Uint8Array(<ArrayBufferLike>data.AudioStream);
        const buffer = uInt8Array.buffer;
        const blob = new Blob([buffer]);
        const url = URL.createObjectURL(blob);

        const tempState = audioBlobObj;
        console.log(index, url);
        tempState.push({
          url: url,
          key: index,
          textContent: TextContentArray[index],
        });
        setAudioBlobObj([...tempState]);
      });
    });
  }, [contentText]);

  useEffect(() => {
    // !triggerPlay
    if (!audioBlobObj || triggeredInitPlay) {
      return;
    }

    audioBlobObj.forEach((element) => {
      if (element.key === audioIndex) {
        audioRef.current.src = element.url;
        console.log("playing", audioIndex);

        audioRef.current.play();
        audioRef.current.onended = () => {
          setPlayNext(true);
        };
        setPlaying(true);
        setTriggeredInitPlay(true);
      }
    });

    // triggerPlay
  }, [audioBlobObj]);

  useEffect(() => {
    if (!playNext) {
      return;
    }

    const nextIndex = audioIndex + 1;

    audioBlobObj.forEach((element) => {
      if (element.key === nextIndex) {
        console.log(element.textContent);
        audioRef.current.src = element.url;
        audioRef.current.play();
      }
    });

    setAudioIndex(nextIndex);
    setPlayNext(false);

    console.log("playing next");
  }, [playNext]);
}
