<template>
  <div class="player">
    <video
      class="player__video viewer"
      src="../../../assets/days_assets/Day11/652333414.mp4"
      @click="togglePlay()"
      @pause="updateButton($event)"
      @play="updateButton($event)"
      @timeupdate="progressBar()"
      ref="videoElement"
    ></video>

    <div class="player__controls">
      <div
        class="progress"
        @click="scrub($event)"
        @mousedown="this.userClicking = true"
        @mouseup="this.userClicking = false"
        @mousemove="this.userClicking === true && this.scrub($event)"
        ref="progress"
      >
        <div class="progress__filled" ref="progressFilled"></div>
      </div>
      <button
        class="player__button toggle"
        title="Toggle Play"
        @click="togglePlay()"
        ref="toggleButton"
      >
        ►
      </button>
      <input
        type="range"
        name="volume"
        class="player__slider"
        min="0"
        max="1"
        step="0.05"
        value="1"
        @change="handleSlide($event)"
      />
      <input
        type="range"
        name="playbackRate"
        class="player__slider"
        min="0.5"
        max="2"
        step="0.1"
        value="1"
        @change="handleSlide($event)"
      />
      <button data-skip="-10" class="player__button" @click="skip($event)">
        « 10s
      </button>
      <button data-skip="25" class="player__button" @click="skip($event)">
        25s »
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userClicking: false,
    };
  },
  methods: {
    // Functions Zone

    togglePlay() {
      // Ternary to toggle play and pause
      const play = this.$refs.videoElement.paused ? "play" : "pause";
      // Calling of function depending on ternary result
      this.$refs.videoElement[play]();
    },

    updateButton() {
      const icon = this.$refs.videoElement.paused ? "►" : "❚ ❚";
      this.$refs.toggleButton.textContent = icon;
    },

    skip(event) {
      //Is getting the datasets from the pointing of the event listener
      this.$refs.videoElement.currentTime += parseInt(
        event.currentTarget.dataset.skip
      );
    },

    handleSlide(event) {
      console.log(event.currentTarget);
      const slider = event.currentTarget;
      this.$refs.videoElement[this.name] = slider.value;
    },

    progressBar() {
      const percent =
        (this.$refs.videoElement.currentTime /
          this.$refs.videoElement.duration) *
        100;
      this.$refs.progressFilled.style.flexBasis = `${percent}%`;
    },

    scrub(event) {
      const scrubTime =
        (event.offsetX / this.$refs.progress.offsetWidth) *
        this.$refs.videoElement.duration;
      this.$refs.videoElement.currentTime = scrubTime;
    },
  },
};
// TODO: Add a fullScreen button

// Query Selector Zone
// const player = document.querySelector(".player");
// const video = player.querySelector(".viewer");
// const progress = player.querySelector(".progress");
// const progressFilled = player.querySelector(".progress__filled");
// const toggleButton = player.querySelector(".toggle");
// const sliders = player.querySelectorAll(".player__slider");
// const skips = player.querySelectorAll("[data-skip]");

// Event Listener Zone
// video.addEventListener("click", this.togglePlay);
// video.addEventListener("pause", this.updateButton);
// video.addEventListener("play", this.updateButton);
// video.addEventListener("timeupdate", this.progressBar);

// toggleButton.addEventListener("click", this.togglePlay);

// skips.forEach((skipEl) => {
//   skipEl.addEventListener("click", this.skip);
// });

// sliders.forEach((slider) =>
//   slider.addEventListener("change", this.handleSlide)
// );

// progress.addEventListener("click", this.scrub);

// It checks for the flag first before running function scrub
// progress.addEventListener(
//   "mousemove",
//   (e) => this.userClicking && this.scrub(e)
// );

// Toggling flag
// let userClicking = false;
// progress.addEventListener("mousedown", () => (this.userClicking = true));
// progress.addEventListener("mouseup", () => (this.userClicking = false));
</script>
<style scoped>
html {
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
  display: flex;
  background: #7a419b;
  min-height: 100vh;
  background: linear-gradient(135deg, #7c1599 0%, #921099 48%, #7e4ae8 100%);
  background-size: cover;
  align-items: center;
  justify-content: center;
}

.player {
  max-width: 750px;
  border: 5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  font-size: 0;
  overflow: hidden;
}

/* This css is only applied when fullscreen is active. */
.player:fullscreen {
  max-width: none;
  width: 100%;
}

.player:-webkit-full-screen {
  max-width: none;
  width: 100%;
}

.player__video {
  width: 100%;
}

.player__button {
  background: none;
  border: 0;
  line-height: 1;
  color: white;
  text-align: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  max-width: 50px;
}

.player__button:focus {
  border-color: #ffc600;
}

.player__slider {
  width: 10px;
  height: 30px;
}

.player__controls {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition: all 0.3s;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.1);
}

.player:hover .player__controls {
  transform: translateY(0);
}

.player:hover .progress {
  height: 15px;
}

.player__controls > * {
  flex: 1;
}

.progress {
  flex: 10;
  position: relative;
  display: flex;
  flex-basis: 100%;
  height: 5px;
  transition: height 0.3s;
  background: rgba(0, 0, 0, 0.5);
  cursor: ew-resize;
}

.progress__filled {
  width: 50%;
  background: #ffc600;
  flex: 0;
  flex-basis: 50%;
}

/* unholy css to style input type="range" */

input[type="range"] {
  -webkit-appearance: none;
  background: transparent;
  width: 100%;
  margin: 0 5px;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
}

input[type="range"]::-webkit-slider-thumb {
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffc600;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #bada55;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: #ffffff;
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
}

input[type="range"]::-moz-range-thumb {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffc600;
  cursor: pointer;
}
</style>
