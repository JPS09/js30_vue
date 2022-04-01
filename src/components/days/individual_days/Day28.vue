<template>
  <div class="wrapper">
    <video
      class="flex"
      ref="video"
      width="765"
      height="430"
      src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
      loop
      controls
    ></video>
    <div class="speed" ref="speed" @mousemove="hoverMouse($event)">
      <div class="speed-bar" ref="speedBar">1x</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hoverMouse(e) {
      const y = e.pageY - this.$refs.speed.offsetTop;
      const percent = y / this.$refs.speed.offsetHeight;
      const min = 0.4;
      const max = 4;
      // Rounds the height value to make it usable in CSS
      const height = Math.round(percent * 100) + "%";
      this.$refs.speedBar.style.height = height;
      // Calculate the playback rate depending on the fill percentage of the input and the min/ max values
      const playbackRate = percent * (max - min) + min;
      // Show the playbackRate in the front
      this.$refs.speedBar.textContent = `${playbackRate.toFixed(2)}x`;
      // Applies the playbackRate to the video
      this.$refs.video.playbackRate = playbackRate;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #4c4c4c url("https://unsplash.it/1500/900?image=1021");
  background-size: cover;
  font-family: sans-serif;
}

.wrapper {
  width: 850px;
  display: flex;
}

video {
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
}

.speed {
  background: #efefef;
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  border-radius: 50px;
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.speed-bar {
  width: 100%;
  background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: white;
  height: 16.3%;
}
</style>
