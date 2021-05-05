<template>
  <base-card>
    <h3 id="viewing-title">Viewing Completion</h3>
    <!-- TO DO : Replace data-value by a computed property taken from the vuex stats store -->
    <div class="progress-circle" data-value="80" ref="initCircle">
      <div class="progress-mask">
        <div class="progress-bar" ref="initBar"></div>
        <div class="progress-sup50"></div>
      </div>
    </div>
    <p id="day-stats"><span class="remaining-days">30 days</span> to go</p>
  </base-card>
</template>

<script>
export default {
  // TO DO : Add a call to init progress bar to computed when update
  mounted() {
    this.initProgressBar();
  },
  methods: {
    initProgressBar() {
      const progressCircle = this.$refs.initCircle;
      const pBar = this.$refs.initBar;
      let valeur = progressCircle.getAttribute("data-value");
      let angle;
      valeur = valeur ? valeur * 1 : 0;
      progressCircle.setAttribute("data-value", valeur.toFixed(1));
      angle = (360 * valeur) / 100;
      if (pBar) {
        pBar.style.transform = `rotate(${angle}deg`;
      }
    },
  },
};
</script>

<style scoped>
.progress-circle {
  position: relative;
  font-size: 6em;
  margin: auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.15em solid rgba(65, 103, 79, 0.2);
  background-color: #fff;
}

.progress-mask {
  position: absolute;
  width: 1em;
  height: 1em;
  left: -0.15em;
  top: -0.14em;
  clip: rect(0, 1em, 1em, 0.5em);
}

.progress-circle::after {
  content: attr(data-value) "%";
  font-size: 0.15em;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5) inset;
}

.progress-bar,
.progress-sup50 {
  position: absolute;
  border: 0.15em solid #41b883;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  clip: rect(0, 0.5em, 1em, 0);
}

.progress-sup50 {
  display: none;
  clip: rect(0, 1em, 1em, 0.5em);
}

.progress-circle[data-value^="5"]:not([data-value="5"]):not([data-value^="5."])
  .progress-mask,
.progress-circle[data-value^="6"]:not([data-value="6"]):not([data-value^="6."])
  .progress-mask,
.progress-circle[data-value^="7"]:not([data-value="7"]):not([data-value^="7."])
  .progress-mask,
.progress-circle[data-value^="8"]:not([data-value="8"]):not([data-value^="8."])
  .progress-mask,
.progress-circle[data-value^="9"]:not([data-value="9"]):not([data-value^="9."])
  .progress-mask,
.progress-circle[data-value^="100"] .progress-mask {
  clip: rect(auto, auto, auto, auto);
}

.progress-circle[data-value^="5"]:not([data-value="5"]):not([data-value^="5."])
  .progress-sup50,
.progress-circle[data-value^="6"]:not([data-value="6"]):not([data-value^="6."])
  .progress-sup50,
.progress-circle[data-value^="7"]:not([data-value="7"]):not([data-value^="7."])
  .progress-sup50,
.progress-circle[data-value^="8"]:not([data-value="8"]):not([data-value^="8."])
  .progress-sup50,
.progress-circle[data-value^="9"]:not([data-value="9"]):not([data-value^="9."])
  .progress-sup50,
.progress-circle[data-value^="100"] .progress-sup50 {
  display: block;
}

.remaining-days {
  color: #41b883;
  font-weight: 800;
}

#viewing-title,
#day-stats {
  padding: 1em;
}
</style>
