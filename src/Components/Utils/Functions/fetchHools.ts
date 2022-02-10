import AWS from "aws-sdk";
import { useEffect, useState } from "react";

export function usePlayAudio(contentText: string) {
  const [audioBlobObj, setAudioBlobObj] = useState<any>([]);
  const [triggerPlay, setTriggerPlay] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);

  useEffect(() => {
    if (!contentText) {
      return;
    }

    const cred = new AWS.Credentials({
      accessKeyId: "AKIAQKCGTY5NTWOHHN3T",
      secretAccessKey: "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",
    });
    const polly = new AWS.Polly({ credentials: cred, region: "us-west-2" });
    const TextContentArray = contentText.match(/.{1,1450}/g);
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
        tempState.push({ url: url, key: index });
        setAudioBlobObj([...tempState]);

        if (TextContentArray.length === tempState.length) {
          setTriggerPlay(true);
        }
      });
    });
  }, [contentText]);

  useEffect(() => {
    if (!triggerPlay) {
      return;
    }
    const audio = document.getElementById("audio") as HTMLAudioElement;

    audioBlobObj.forEach((element) => {
      if (element.key === audioIndex) {
        audio.src = audioBlobObj[audioIndex].url;
        console.log("playing", audioIndex);
      }
    });

    audio.play();

    console.log(audioBlobObj);

    setTriggerPlay(false);
  }, [triggerPlay]);
}
