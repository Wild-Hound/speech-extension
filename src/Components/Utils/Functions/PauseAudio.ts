export function pauseAudio(
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
) {
  const audio = document.getElementById("audio");
  (audio as HTMLAudioElement).pause();
  setPlaying(false);
}
