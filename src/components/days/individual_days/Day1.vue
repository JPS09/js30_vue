<template>
  <div class="keys">
    <div
      v-for="audioKey in audioKeys"
      :key="audioKey.dataKey"
      :data-key="audioKey.dataKey"
      class="key"
      :class="[audioKey.isActive ? 'playing' : '', 'key']"
      @click="playSound($event)"
      @transitionend="removeTransition($event, audioKey)"
    >
      <!-- @keyup-name-of-the-key="tryingSound" -->
      <kbd>{{ audioKey.kbd }}</kbd>
      <span class="sound">{{ audioKey.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioKeys: [
        {
          audio: new Audio("../../../assets/days_assets/Day1/sounds/clap.wav"),
          name: "clap",
          dataKey: 65,
          kbd: "A",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/hihat.wav"),
          name: "hihat",
          dataKey: 83,
          kbd: "S",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/kick.wav"),
          name: "kick",
          dataKey: 68,
          kbd: "D",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio(
            "../../../assets/days_assets/Day1/sounds/openhat.wav"
          ),
          name: "openhat",
          dataKey: 70,
          kbd: "F",
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/boom.wav"),
          name: "boom",
          dataKey: 71,
          kbd: "G",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/ride.wav"),
          name: "ride",
          dataKey: 72,
          kbd: "H",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/snare.wav"),
          name: "snare",
          dataKey: 74,
          kbd: "J",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/tom.wav"),
          name: "tom",
          dataKey: 75,
          kbd: "K",
          isActive: false,
        },
        {
          type: "audio/wav",
          audio: new Audio("../../../assets/days_assets/Day1/sounds/tink.wav"),
          name: "tink",
          dataKey: 76,
          kbd: "L",
          isActive: false,
        },
      ],
    };
  },

  methods: {
    removeTransition(e, key) {
      if (e.propertyName !== "transform") {
        return;
      }
      key.isActive = false;
    },
    playSound(e) {
      const key = this.audioKeys.find((key) => {
        key.audio.type = "audio/wav";
        return key.dataKey === e.keyCode;
      });
      if (!key) {
        return;
      }
      console.log(key.audio);
      key.audio.currentTime = 0;
      key.isActive = true;
      key.audio.play();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.playSound);
  },

  // Maybe watch is a better approach than methods
  // if (propertyName !== "transform") return; // skip if not transform
  // target.classList.remove("playing");
};
// const playSound = (e) => {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return; // Stop function if null
//   audio.currentTime = 0; // Rewind to start
//   key.classList.add("playing");
//   audio.play();
// };

// const removeTransition = (e) => {
//   if (e.propertyName !== "transform") return; // skip if not transform
//   e.target.classList.remove("playing");
// };

// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// window.addEventListener("keydown", playSound);
</script>

<style scoped>
.keys {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .keys {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

.key {
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
  justify-self: center;
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
