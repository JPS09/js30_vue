<template>
  <stats-styling-Wrapper>
    <h3 id="viewing-completion__viewing-title">Completion</h3>
    <!-- TO DO : Replace data-value by a computed property taken from the vuex stats store -->
    <section>
      <radial-progress-bar
        class="radial-progress-bar_center"
        :diameter="100"
        :total-steps="100"
        :completed-steps="totalCompletion"
        start-color="#41b883"
        stop-color="#41b883"
        :is-clockwise="false"
        >{{ totalCompletion }} %</radial-progress-bar
      >

      <p id="viewing-completion__day-stats" v-if="daysToGo > 0">
        <span class="viewing-completion__remaining-days"
          >{{ daysToGo }} days</span
        >

        to go
      </p>
      <p id="viewing-completion__day-stats" v-else-if="daysToGo === 0">
        <span class="viewing-completion__remaining-days__done">All done</span>
      </p>
    </section>
  </stats-styling-Wrapper>
</template>

<script>
import StatsStylingWrapper from "./StatsStylingWrapper";
import RadialProgressBar from "vue3-radial-progress";

export default {
  components: { StatsStylingWrapper, RadialProgressBar },
  data() {
    return {
      dataCompletion: this.$store.getters["stats/totalStats"],
    };
  },

  computed: {
    totalCompletion() {
      return this.$store.getters["stats/totalStats"];
    },
    daysToGo() {
      return this.$store.getters["stats/daysToGo"];
    },
  },
};
</script>

<style scoped>
.radial-progress-bar_center {
  margin: 0 auto;
  font-weight: 700;
}
#viewing-completion__viewing-title {
  margin: 0;
  padding: 1em;
}
@media screen and (max-width: 960px) {
  #viewing-completion__viewing-title {
    margin: 0;
    padding: 0.8em 0;
  }
}
#viewing-completion__wrapper {
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0;
}

.viewing-completion__remaining-days,
.viewing-completion__remaining-days__done {
  color: #41b883;
  font-weight: 800;
}
</style>
