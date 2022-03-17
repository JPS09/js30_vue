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
      @change="handleUpdate($event)"
    />

    <label for="blur">Blur:</label>
    <input
      id="blur"
      type="range"
      name="blur"
      min="0"
      max="25"
      value="10"
      data-sizing="px"
      @change="handleUpdate($event)"
    />

    <label for="base">Base Color</label>
    <input
      id="base"
      type="color"
      name="base"
      value="#ffc600"
      @change="handleUpdate($event)"
    />
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
</template>

<script>
// Arrow function -ES6- doesn't handle the this keyword the same way as the function -ES5- does.
export default {
  methods: {
    handleUpdate(event) {
      console.log(event.currentTarget.name);
      const suffix = event.currentTarget.sizing || "";
      document.documentElement.style.setProperty(
        `--${event.currentTarget.name}`,
        event.currentTarget.value + suffix
      );
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
