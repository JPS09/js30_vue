<template>
  <div class="keys">
    <div
      v-for="audioKey in audioKeys"
      :key="audioKey.dataKey"
      :data-key="audioKey.dataKey"
      class="key"
      @click="clickSound($event)"
      @transitionend="removeTransition($event)"
    >
      <kbd>{{ audioKey.kbd }}</kbd>
      <span class="sound">{{ audioKey.name }}</span>
    </div>
  </div>

  <audio data-key="65">
    <source
      type="audio/wav"
      src="../../../assets/days_assets/Day1/sounds/clap.wav"
    />
    >
  </audio>
  <audio data-key="83">
    <source
      type="audio/wav"
      src="../../../assets/days_assets/Day1/sounds/hihat.wav"
    />
  </audio>
  <audio data-key="68">
    <source
      type="audio/wav"
      src="../../../assets/days_assets/Day1/sounds/kick.wav"
    />
  </audio>
  <audio data-key="70">
    <source
      type="audio/wav"
      src="../../../assets/days_assets/Day1/sounds/openhat.wav"
    />
  </audio>
  <audio data-key="71">
    <source
      src="../../../assets/days_assets/Day1/sounds/boom.wav"
      type="audio/wav"
    />
  </audio>
  <audio data-key="72">
    <source
      src="../../../assets/days_assets/Day1/sounds/ride.wav"
      type="audio/wav"
    />
  </audio>
  <audio data-key="74">
    <source
      src="../../../assets/days_assets/Day1/sounds/snare.wav"
      type="audio/wav"
    />
  </audio>
  <audio data-key="75">
    <source
      src="../../../assets/days_assets/Day1/sounds/tom.wav"
      type="audio/wav"
    />
  </audio>
  <audio data-key="76">
    <source
      src="../../../assets/days_assets/Day1/sounds/tink.wav"
      type="audio/wav"
    />
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
  created() {
    window.addEventListener("keydown", this.playSound);
  },
  unmounted() {
    window.removeEventListener("keydown", this.playSound);
  },
  methods: {
    removeTransition(e) {
      if (e.propertyName !== "transform") return; // skip if not transform
      e.target.classList.remove("playing");
    },
    playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if (!audio) return; // Stop function if null
      audio.currentTime = 0; // Rewind to start
      key.classList.add("playing");
      audio.play();
    },
    clickSound(event) {
      const audio = document.querySelector(
        `audio[data-key="${event.currentTarget.dataset.key}"]`
      );
      const key = event.currentTarget;
      if (!audio) return; // Stop function if null
      audio.currentTime = 0; // Rewind to start
      key.classList.add("playing");
      audio.play();
    },
  },
};
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
    align-items: unset;
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
  user-select: none;
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
