<template>
  <div class="voiceinator">
    <h1>The Voiceinator 5000</h1>

    <select
      ref="select"
      name="voice"
      id="voices"
      @change="setVoice(), toggle()"
    >
      <option value="">Select A Voice</option>
      <option v-for="voice in voices" :key="voice" :value="voice.name">
        {{ voice.name }} {{ voice.lang }}
      </option>
    </select>

    <label for="rate">Rate:</label>
    <input
      ref="rate"
      name="rate"
      type="range"
      min="0"
      max="3"
      value="1"
      step="0.1"
      @change="setOption(this.$refs.rate)"
    />

    <label for="pitch">Pitch:</label>

    <input
      ref="pitch"
      name="pitch"
      type="range"
      min="0"
      max="2"
      step="0.1"
      @change="setOption(this.$refs.pitch)"
    />
    <textarea name="text" @change="setOption()" ref="text">
 Hello! I love JavaScript 👍</textarea
    >
    <button id="stop" @click="toggle(false)">Stop!</button>
    <button id="speak" @click="toggle()">Speak</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.populateVoices();
  },
  data() {
    return {
      speechSynthesis: window.speechSynthesis,
      voices: [],
      spokenMessage: new SpeechSynthesisUtterance(),
    };
  },

  methods: {
    // Fetch the available voices and map it to the dropdown for user selection
    populateVoices() {
      const voicesElements = this.speechSynthesis.getVoices();
      this.voices = voicesElements;
    },

    // Stop the reading and start speaking again.
    toggle(startAgain = true) {
      this.speechSynthesis.cancel();
      if (startAgain) {
        // Set the spoken text
        this.spokenMessage.text = this.$refs.text.value;
        this.speechSynthesis.speak(this.spokenMessage);
      }
    },

    // Applies the user voice selection to the Utterance
    setVoice() {
      const selectV = this.$refs.select.value;
      this.spokenMessage.voice = this.voices.find(
        (voice) => voice.name === selectV
      );
    },

    // Set the value of the listened elements to the Utterance and then run toggle
    setOption(option) {
      if (option) {
        this.spokenMessage[option.name] = option.value;
      }
      this.toggle();
    },
  },
};
</script>

<style scoped>
html {
  font-size: 10px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #3bc1ac;
  display: flex;
  min-height: 100vh;
  align-items: center;

  background-image: radial-gradient(
      circle at 100% 150%,
      #3bc1ac 24%,
      #42d2bb 25%,
      #42d2bb 28%,
      #3bc1ac 29%,
      #3bc1ac 36%,
      #42d2bb 36%,
      #42d2bb 40%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 0 150%,
      #3bc1ac 24%,
      #42d2bb 25%,
      #42d2bb 28%,
      #3bc1ac 29%,
      #3bc1ac 36%,
      #42d2bb 36%,
      #42d2bb 40%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 50% 100%,
      #42d2bb 10%,
      #3bc1ac 11%,
      #3bc1ac 23%,
      #42d2bb 24%,
      #42d2bb 30%,
      #3bc1ac 31%,
      #3bc1ac 43%,
      #42d2bb 44%,
      #42d2bb 50%,
      #3bc1ac 51%,
      #3bc1ac 63%,
      #42d2bb 64%,
      #42d2bb 71%,
      transparent 71%,
      transparent
    ),
    radial-gradient(
      circle at 100% 50%,
      #42d2bb 5%,
      #3bc1ac 6%,
      #3bc1ac 15%,
      #42d2bb 16%,
      #42d2bb 20%,
      #3bc1ac 21%,
      #3bc1ac 30%,
      #42d2bb 31%,
      #42d2bb 35%,
      #3bc1ac 36%,
      #3bc1ac 45%,
      #42d2bb 46%,
      #42d2bb 49%,
      transparent 50%,
      transparent
    ),
    radial-gradient(
      circle at 0 50%,
      #42d2bb 5%,
      #3bc1ac 6%,
      #3bc1ac 15%,
      #42d2bb 16%,
      #42d2bb 20%,
      #3bc1ac 21%,
      #3bc1ac 30%,
      #42d2bb 31%,
      #42d2bb 35%,
      #3bc1ac 36%,
      #3bc1ac 45%,
      #42d2bb 46%,
      #42d2bb 49%,
      transparent 50%,
      transparent
    );
  background-size: 100px 50px;
}

.voiceinator {
  padding: 2rem;
  width: 50rem;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  background: white;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  width: calc(100% + 4rem);
  margin: -2rem 0 2rem -2rem;
  padding: 0.5rem;
  background: #ffc600;
  border-bottom: 5px solid #f3c010;
  text-align: center;
  font-size: 5rem;
  font-weight: 100;
  font-family: "Pacifico", cursive;
  text-shadow: 3px 3px 0 #f3c010;
}

.voiceinator input,
.voiceinator button,
.voiceinator select,
.voiceinator textarea {
  width: 100%;
  display: block;
  margin: 10px 0;
  padding: 10px;
  border: 0;
  font-size: 2rem;
  background: #f7f7f7;
  outline: 0;
}

textarea {
  height: 20rem;
}

input[type="select"] {
  /* Removing warning */
  animation: inherit;
}

.voiceinator button {
  background: #ffc600;
  border: 0;
  width: 49%;
  float: left;
  font-family: "Pacifico", cursive;
  margin-bottom: 0;
  font-size: 2rem;
  border-bottom: 5px solid #f3c010;
  cursor: pointer;
  position: relative;
}

.voiceinator button:active {
  top: 2px;
}

.voiceinator button:nth-of-type(1) {
  margin-right: 2%;
}
</style>
