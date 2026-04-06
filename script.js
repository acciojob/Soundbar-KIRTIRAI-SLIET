//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.querySelectorAll(".btn");

let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.innerText;

    if (button.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(`sounds/${sound}.mp3`);
    currentAudio = audio;
    audio.play();
  });
});