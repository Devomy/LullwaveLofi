const playPauseButton = document.querySelector("#playButton");
const volumeSlider = document.querySelector("#volumeSlider");
const audio = new Audio("https://stream.zeno.fm/0r0xa792kwzuv");
const circleImage = document.querySelector("#circle-image");

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = `<i class="fa-solid fa-pause" alt="pause"></i>`;
    circleImage.classList.add("animation");
  } else {
    audio.pause();
    playPauseButton.innerHTML = `<i class="fa-solid fa-play" alt="play"></i>`;
    circleImage.classList.remove("animation");
  }
});
