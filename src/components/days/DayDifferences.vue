<template>
  <day-wrapper>
    <header id="day-differences__header">
      <h2>Main differences</h2>
    </header>
    <section class="day-differences__section">
      <h4 class="day-differences__title">JS</h4>
      <p class="day-differences__details">{{ jsDifference }}</p>
    </section>
    <section class="day-differences__section">
      <h4 class="day-differences__title">Vue</h4>
      <p class="day-differences__details">{{ vueDifference }}</p>
    </section>
  </day-wrapper>
</template>

<script>
import DayWrapper from "./DayWrapper.vue";
export default {
  components: {
    DayWrapper,
  },
  props: {
    jsDifference: {
      type: String,
      required: true,
    },
    vueDifference: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#day-differences__header {
  border-radius: 25px 25px 0 0;
  width: 100%;
  height: 4em;
  background: #458b51;
  color: white;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 2rem;
}

.day-differences__title {
  text-align: left;
}

.day-differences__section {
  padding: 0 2rem;
}
.day-differences__details {
  margin: 0;
  padding: 0 2rem;
  text-align: left;
}
</style>
