<template>
  <h2>Update CSS Variables with <span class="hl">JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input
      id="spacing"
      type="range"
      name="spacing"
      min="10"
      max="200"
      value="10"
      data-sizing="px"
      @change="spacingUpdate($event)"
    />

    <label for="blur">Blur:</label>
    <input
      id="blur"
      type="range"
      name="blur"
      min="0"
      max="25"
      value="0"
      data-sizing="px"
      @change="blurUpdate($event)"
    />

    <label for="base">Base Color</label>
    <input
      id="base"
      type="color"
      name="base"
      value="#40b681"
      @change="colorUpdate($event)"
    />
  </div>

  <img
    :style="[blurValue, spacingValue, colorValue]"
    src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
  />
</template>

<script>
export default {
  data() {
    return {
      blur: 0,
      spacing: 0,
      color: "#40b681",
    };
  },
  methods: {
    blurUpdate(event) {
      this.blur = event.currentTarget.value;
    },
    spacingUpdate(event) {
      this.spacing = event.currentTarget.value;
    },
    colorUpdate(event) {
      this.color = event.currentTarget.value;
    },
  },
  // Maybe create a method that applies the changed value to the this.blur value so that the computed one can handle the change
  computed: {
    blurValue() {
      return `--blur: ${this.blur}px`;
    },
    spacingValue() {
      return `--spacing: ${this.spacing}px`;
    },
    colorValue() {
      return `--base: ${this.color}`;
    },
  },
};

// const inputs = document.querySelectorAll(".controls input");
// inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
</script>

<style scoped>
:root {
  --base: #36a4b3;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  filter: blur(var(--blur));
  background: var(--base);
}

.h1 {
  color: var(--base);
}

/*
      misc styles, nothing to do with CSS variables
    */

body {
  text-align: center;
  background: #193549;
  color: white;
  font-family: "helvetica neue", sans-serif;
  font-weight: 100;
  font-size: 50px;
}

.controls {
  margin-bottom: 50px;
}

input {
  width: 100px;
}
</style>
