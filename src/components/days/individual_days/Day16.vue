<template>
  <h1 class="mobileWarn">Sorry, this doesn't work on mobile</h1>
  <div class="hero" ref="hero" @mousemove="dynamicShadow($event)">
    <h1 ref="h1" contenteditable>🔥WOAH!</h1>
  </div>
</template>

<script>
export default {
  methods: {
    dynamicShadow(e) {
      const hero = this.$refs.hero;
      const text = this.$refs.h1;
      const maxShadow = 150; //Defines the limit range of the shadows
      const { offsetWidth: width, offsetHeight: height } = hero;
      let { offsetX: x, offsetY: y } = e;

      // Prevent the values from going back to zero when hovering over children elements.
      // 'this' is the element with the event, the target the the hovered element
      if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const xShadow = Math.round((x / width) * maxShadow - maxShadow / 2);
      const yShadow = Math.round((y / height) * maxShadow - maxShadow / 2);

      // CSS magic
      text.style.textShadow = `
      ${xShadow}px ${yShadow}px 0 rgba(255,0,255,0.7),
      ${xShadow * -1}px ${yShadow}px 0 rgba(0,255,255,0.7),
      ${yShadow}px ${xShadow * -1}px 0 rgba(0,255,0,0.7),
      ${yShadow * -1}px ${xShadow}px 0 rgba(0,0,255,0.7)
    `;
    },
  },
};
</script>

<style scoped>
html {
  color: black;
  font-family: sans-serif;
}

body {
  margin: 0;
}

.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.mobileWarn {
  display: none;
}
@media screen and (max-width: 768px) {
  .hero {
    display: none;
  }
  .mobileWarn {
    display: block;
  }
}

h1 {
  text-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  font-size: 100px;
}
</style>
