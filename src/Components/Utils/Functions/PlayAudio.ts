import { metaData } from "../Types";
import { getContent } from "./GetSiteContent";
import AWS from "aws-sdk";

const largeText = `Nice to meet you, where you been?
I could show you incredible things
Magic, madness, heaven, sin
Saw you there and I thought
"Oh, my God, look at that face
You look like my next mistake
Love's a game, wanna play?" Ay
New money, suit and tie
I can read you like a magazine
Ain't it funny rumors fly
And I know you heard about me
So hey, let's be friends
I'm dying to see how this one ends
Grab your passport and my hand
I can make the bad guys good for a weekendNice to meet you, where you been?
I could show you incredible things
Magic, madness, heaven, sin
Saw you there and I thought
"Oh, my God, look at that face
You look like my next mistake
Love's a game, wanna play?" Ay
New money, suit and tie
I can read you like a magazine
Ain't it funny rumors fly
And I know you heard about me
So hey, let's be friends
I'm dying to see how this one ends
Grab your passport and my hand
I can make the bad guys good for a weekendNice to meet you, where you been?
I could show you incredible things
Magic, madness, heaven, sin
Saw you there and I thought
"Oh, my God, look at that face
You look like my next mistake
Love's a game, wanna play?" Ay
New money, suit and tie
I can read you like a magazine
Ain't it funny rumors fly
And I know you heard about me
So hey, let's be friends
I'm dying to see how this one ends
Grab your passport and my hand
I can make the bad guys good for a weekendNice to meet you, where you been?
I could show you incredible things
Magic, madness, heaven, sin
Saw you there and I thought
"Oh, my God, look at that face
`;

export function playAudio(
  loading: boolean,
  playing: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (loading) {
    return;
  }

  const audio = document.getElementById("audio");

  if ((audio as HTMLAudioElement).paused && playing === false) {
    (audio as HTMLAudioElement).play();
    setPlaying(true);
    console.log("triggered");
    return;
  }

  setLoading(true);

  const textContent = getContent();
  const TextContentArray = textContent.match(/.{1,1450}/g);

  const cred = new AWS.Credentials({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  const polly = new AWS.Polly({ credentials: cred, region: "us-west-2" });
  const params = {
    OutputFormat: "mp3",
    Text: TextContentArray[0],
    TextType: "text",
    VoiceId: "Joanna",
  };

  polly.synthesizeSpeech(params, (err, data) => {
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
    (audio as HTMLAudioElement).src = url;
    (audio as HTMLAudioElement).play();
    setLoading(false);
    setPlaying(true);
  });
}
