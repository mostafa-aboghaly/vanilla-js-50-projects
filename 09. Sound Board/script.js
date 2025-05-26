const sounds = ["closed-hi-hat1", "closed-hi-hat2", "Inward-K", "Kick", "pf"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
