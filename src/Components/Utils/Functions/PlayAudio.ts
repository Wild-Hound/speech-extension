import { metaData } from "../Types";

export const playAudio = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setMetaData: React.Dispatch<React.SetStateAction<metaData>>
) => {
  const data = {
    text: `Nice to meet you, where you been?
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
      I can make the bad guys good for a weekend`,
  };

  setLoading(true);

  fetch("https://tts-api-404.herokuapp.com/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      const status = res.status;
      switch (status) {
        case 200:
          return res.json();
        case 400:
          return { code: 400 };
      }
    })
    .then((data) => {
      setLoading(false);
      if (data === undefined) {
        return;
      }
      if (data?.code === 400) {
        console.error("bad request");
        return;
      }
      setMetaData(data.metaData);
      audioAction(data.audio);
    });
};

async function audioAction(url: string) {
  const ctx = new AudioContext();
  let audio;

  fetch(url)
    .then((res: any) => {
      const status = res.status;
      switch (status) {
        case 404:
          return { code: 404 };
        case 200:
          return res.arrayBuffer();
      }
    })
    .then((data) => {
      if (data === undefined) {
        return;
      }
      if (data?.code === 404) {
        console.error("file not found");
        return;
      }

      return ctx.decodeAudioData(data);
    })
    .then((decodedAudio) => {
      playback(ctx, decodedAudio);
    });
}

function playback(ctx: AudioContext, decodedAudio: AudioBuffer) {
  const playSound = ctx.createBufferSource();
  playSound.buffer = decodedAudio;
  playSound.connect(ctx.destination);
  playSound.start(ctx.currentTime);
}
