<template>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>

  <button class="No more">Once</button>
</template>

<script>
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling
}

divs.forEach(
  (div) => div.addEventListener("click", logText, { capture: true }) // Reverse the event firing order a
);
button.addEventListener("click", logText, { once: true }); // Will only run once
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

div {
  width: 100%;
  padding: 100px;
}

.one {
  background: thistle;
}

.two {
  background: mistyrose;
}

.three {
  background: coral;
}
</style>
