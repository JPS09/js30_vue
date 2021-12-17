<template>
  <stats-styling-Wrapper>
    <h3 id="viewing-completion__viewing-title">Completion</h3>
    <!-- TO DO : Replace data-value by a computed property taken from the vuex stats store -->
    <section>
      <div
        class="viewing-completion__progress-circle"
        data-value="80"
        ref="initCircle"
      >
        <div class="viewing-completion__progress-mask">
          <div class="viewing-completion__progress-bar" ref="initBar"></div>
          <div class="viewing-completion__progress-sup50"></div>
        </div>
      </div>
      <p id="viewing-completion__day-stats">
        <span class="viewing-completion__remaining-days">30 days</span> to go
      </p>
    </section>
  </stats-styling-Wrapper>
</template>

<script>
import StatsStylingWrapper from "./StatsStylingWrapper";
export default {
  components: { StatsStylingWrapper },
  // TO DO : Add a call to init viewing-completion__progress bar to computed when update
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
#viewing-completion__wrapper {
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.viewing-completion__progress-circle {
  position: relative;
  font-size: 6em;
  margin: auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.15em solid rgba(65, 103, 79, 0.2);
  background-color: #fff;
}

.viewing-completion__progress-mask {
  position: absolute;
  width: 1em;
  height: 1em;
  left: -0.15em;
  top: -0.14em;
  clip: rect(0, 1em, 1em, 0.5em);
}

.viewing-completion__progress-circle::after {
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

.viewing-completion__progress-bar,
.viewing-completion__progress-sup50 {
  position: absolute;
  border: 0.15em solid #41b883;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  clip: rect(0, 0.5em, 1em, 0);
}

.viewing-completion__progress-sup50 {
  display: none;
  clip: rect(0, 1em, 1em, 0.5em);
}

.viewing-completion__progress-circle[data-value^="5"]:not([data-value="5"]):not([data-value^="5."])
  .viewing-completion__progress-mask,
.viewing-completion__progress-circle[data-value^="6"]:not([data-value="6"]):not([data-value^="6."])
  .viewing-completion__progress-mask,
.viewing-completion__progress-circle[data-value^="7"]:not([data-value="7"]):not([data-value^="7."])
  .viewing-completion__progress-mask,
.viewing-completion__progress-circle[data-value^="8"]:not([data-value="8"]):not([data-value^="8."])
  .viewing-completion__progress-mask,
.viewing-completion__progress-circle[data-value^="9"]:not([data-value="9"]):not([data-value^="9."])
  .viewing-completion__progress-mask,
.viewing-completion__progress-circle[data-value^="100"]
  .viewing-completion__progress-mask {
  clip: rect(auto, auto, auto, auto);
}

.viewing-completion__progress-circle[data-value^="5"]:not([data-value="5"]):not([data-value^="5."])
  .viewing-completion__progress-sup50,
.viewing-completion__progress-circle[data-value^="6"]:not([data-value="6"]):not([data-value^="6."])
  .viewing-completion__progress-sup50,
.viewing-completion__progress-circle[data-value^="7"]:not([data-value="7"]):not([data-value^="7."])
  .viewing-completion__progress-sup50,
.viewing-completion__progress-circle[data-value^="8"]:not([data-value="8"]):not([data-value^="8."])
  .viewing-completion__progress-sup50,
.viewing-completion__progress-circle[data-value^="9"]:not([data-value="9"]):not([data-value^="9."])
  .viewing-completion__progress-sup50,
.viewing-completion__progress-circle[data-value^="100"]
  .viewing-completion__progress-sup50 {
  display: block;
}

.viewing-completion__remaining-days {
  color: #41b883;
  font-weight: 800;
}
</style>
