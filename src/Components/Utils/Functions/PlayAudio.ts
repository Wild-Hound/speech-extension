import { metaData } from "../Types";
import { getContent } from "./GetSiteContent";
import AWS from "aws-sdk";

export async function playAudio(
  loading: boolean,
  playing: boolean,
  audioBlobUrlArray: string[],
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  setAudioBlobUrlArray: React.Dispatch<React.SetStateAction<string[]>>
) {
  if (loading) {
    return;
  }

  const audio = document.getElementById("audio");

  if ((audio as HTMLAudioElement).paused && playing === false) {
    (audio as HTMLAudioElement).play();
    setPlaying(true);
    return;
  }

  setLoading(true);

  const textContent = getContent();
  const TextContentArray = textContent.match(/.{1,1450}/g);

  const cred = new AWS.Credentials({
    accessKeyId: "AKIAQKCGTY5NTWOHHN3T",
    secretAccessKey: "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",
  });

  const polly = new AWS.Polly({ credentials: cred, region: "us-west-2" });
  const audioBlobArray = [];

  await TextContentArray.forEach(async (text) => {
    const params = {
      OutputFormat: "mp3",
      Text: text,
      TextType: "text",
      VoiceId: "Joanna",
    };

    await polly.synthesizeSpeech(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
        setLoading(false);
        return;
      }

      if (!data?.AudioStream) {
        setLoading(false);
        return;
      }

      const uInt8Array = new Uint8Array(<ArrayBufferLike>data.AudioStream);
      const buffer = uInt8Array.buffer;
      const blob = new Blob([buffer]);

      const url = URL.createObjectURL(blob);

      audioBlobArray.push(url);
      // (audio as HTMLAudioElement).src = url;
      // (audio as HTMLAudioElement).play();
      setLoading(false);
      setPlaying(true);
    });
  });

  setAudioBlobUrlArray(audioBlobArray);
}
