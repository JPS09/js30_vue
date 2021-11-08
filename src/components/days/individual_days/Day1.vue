<template>
  <div class="keys">
    <div
      v-for="audioKey in audioKeys"
      :key="audioKey.dataKey"
      :data-key="audioKey.dataKey"
      class="key"
    >
      <kbd>{{ audioKey.kbd }}</kbd>
      <span class="sound">{{ audioKey.name }}</span>
    </div>
  </div>

  <audio
    v-for="audioKey in audioKeys"
    :key="audioKey.dataKey"
    :data-key="audioKey.dataKey"
  >
    <source :type="audioKey.type" :src="audioKey.src" />
  </audio>
</template>

<script>
export default {
  data() {
    return {
      audioKeys: [
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/clap.wav",
          name: "clap",
          dataKey: "65",
          kbd: "A",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/hihat.wav",
          name: "hihat",
          dataKey: "83",
          kbd: "S",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/kick.wav",
          name: "kick",
          dataKey: "68",
          kbd: "D",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/openhat.wav",
          name: "openhat",
          dataKey: "70",
          kbd: "F",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/boom.wav",
          name: "boom",
          dataKey: "71",
          kbd: "G",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/ride.wav",
          name: "ride",
          dataKey: "72",
          kbd: "H",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/snare.wav",
          name: "snare",
          dataKey: "74",
          kbd: "J",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/tom.wav",
          name: "tom",
          dataKey: "75",
          kbd: "K",
        },
        {
          type: "audio/wav",
          src: "../../../assets/days_assets/Day1/sounds/tink.wav",
          name: "tink",
          dataKey: "76",
          kbd: "L",
        },
      ],
    };
  },
  // methods: {
  //   tryingSound() {
  //     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //     if (!audio) return; // Stop function if null
  //     audio.currentTime = 0; // Rewind to start
  //     key.classList.add("playing");
  //     audio.play();
  //   },
  // },
};
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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
