<template>
  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kick</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </div>

  <audio data-key="65" src="assets/days_assets/Day1/sounds/clap.wav"></audio>
  <audio data-key="83" src="assets/days_assets/Day1/sounds/hihat.wav"></audio>
  <audio data-key="68" src="assets/days_assets/Day1/sounds/kick.wav"></audio>
  <audio data-key="70" src="assets/days_assets/Day1/sounds/openhat.wav"></audio>
  <audio data-key="71" src="assets/days_assets/Day1/sounds/boom.wav"></audio>
  <audio data-key="72" src="assets/days_assets/Day1/sounds/ride.wav"></audio>
  <audio data-key="74" src="assets/days_assets/Day1/sounds/snare.wav"></audio>
  <audio data-key="75" src="assets/days_assets/Day1/sounds/tom.wav"></audio>
  <audio data-key="76" src="assets/days_assets/Day1/sounds/tink.wav"></audio>
</template>

<script>
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop function if null
  audio.currentTime = 0; // Rewind to start
  key.classList.add("playing");
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip if not transform
  e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
</script>

<style scoped>
.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.key {
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}

kbd {
  display: block;
  font-size: 4rem;
}

.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #ffc600;
}
</style>
