<template>
  <!--  Reverse the event firing order -->
  <div class="one" @click.capture="logText($event)">
    1
    <div class="two" @click.capture="logText($event)">
      2
      <div class="three" @click.capture="logText($event)">3</div>
    </div>
  </div>
  <!-- Will only run once -->
  <button class="no-more" @click.once="logText($event)">
    Once and Once only
  </button>
</template>

<script>
export default {
  methods: {
    logText(event) {
      console.log(event.target.classList.value);
      event.stopPropagation(); // stop bubbling
    },
  },
};
// const divs = document.querySelectorAll("div");
// const button = document.querySelector("button");

// divs.forEach(
//   (div) => div.addEventListener("click", this.logText(), { capture: true })
// );
// button.addEventListener("click", this.logText(), { once: true });
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

.no-more {
  background: green;
  border-radius: 10px;
  color: white;
  padding: 5px;
  appearance: none;
  margin: 5px;
  font-weight: 800;
}
</style>
