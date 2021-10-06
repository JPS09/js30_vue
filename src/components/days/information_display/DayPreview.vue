<template>
  <div class="day-preview__container">
    <h3>Preview</h3>
    <component :is="dayId"></component>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  props: {
    dayId: {
      type: String,
      required: true,
    },
  },
  components: {
    d1: defineAsyncComponent(() => import("../individual_days/Day1.vue")),
    d2: defineAsyncComponent(() => import("../individual_days/Day2.vue")),
    d3: defineAsyncComponent(() => import("../individual_days/Day3.vue")),
    d4: defineAsyncComponent(() => import("../individual_days/Day4.vue")),
    d5: defineAsyncComponent(() => import("../individual_days/Day5.vue")),
    d6: defineAsyncComponent(() => import("../individual_days/Day6.vue")),
    d7: defineAsyncComponent(() => import("../individual_days/Day7.vue")),
    d8: defineAsyncComponent(() => import("../individual_days/Day8.vue")),
    d9: defineAsyncComponent(() => import("../individual_days/Day9.vue")),
    d10: defineAsyncComponent(() => import("../individual_days/Day10.vue")),
    d11: defineAsyncComponent(() => import("../individual_days/Day11.vue")),
    d12: defineAsyncComponent(() => import("../individual_days/Day12.vue")),
    d13: defineAsyncComponent(() => import("../individual_days/Day13.vue")),
    d14: defineAsyncComponent(() => import("../individual_days/Day14.vue")),
    d15: defineAsyncComponent(() => import("../individual_days/Day15.vue")),
    d16: defineAsyncComponent(() => import("../individual_days/Day16.vue")),
    d17: defineAsyncComponent(() => import("../individual_days/Day17.vue")),
    d18: defineAsyncComponent(() => import("../individual_days/Day18.vue")),
    d19: defineAsyncComponent(() => import("../individual_days/Day19.vue")),
    d20: defineAsyncComponent(() => import("../individual_days/Day20.vue")),
    d21: defineAsyncComponent(() => import("../individual_days/Day21.vue")),
    d22: defineAsyncComponent(() => import("../individual_days/Day22.vue")),
    d23: defineAsyncComponent(() => import("../individual_days/Day23.vue")),
    d24: defineAsyncComponent(() => import("../individual_days/Day24.vue")),
    d25: defineAsyncComponent(() => import("../individual_days/Day25.vue")),
    d26: defineAsyncComponent(() => import("../individual_days/Day26.vue")),
    d27: defineAsyncComponent(() => import("../individual_days/Day27.vue")),
    d28: defineAsyncComponent(() => import("../individual_days/Day28.vue")),
    d29: defineAsyncComponent(() => import("../individual_days/Day29.vue")),
    d30: defineAsyncComponent(() => import("../individual_days/Day30.vue")),
  },
  computed: {
    // dayComponent: defineAsyncComponent(() =>
    //   import(`../individual_days/${component}.vue`)
    // ),
  },
};
</script>

<style scoped>
.day-preview__container {
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 25px;
  margin-top: 1em;
  grid-column: -3/-1;
}
</style>
