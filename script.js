//your JS code here. If required.
let currentAudio = null;

document.querySelectorAll(".btn").forEach(button => {
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

    const audio = document.getElementById(sound);
    currentAudio = audio;
    audio.play();
  });
});
