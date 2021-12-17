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
    d1: defineAsyncComponent({
      loader: () => import("../individual_days/Day1.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d2: defineAsyncComponent({
      loader: () => import("../individual_days/Day2.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d3: defineAsyncComponent({
      loader: () => import("../individual_days/Day3.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d4: defineAsyncComponent({
      loader: () => import("../individual_days/Day4.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d5: defineAsyncComponent({
      loader: () => import("../individual_days/Day5.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d6: defineAsyncComponent({
      loader: () => import("../individual_days/Day6.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d7: defineAsyncComponent({
      loader: () => import("../individual_days/Day7.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d8: defineAsyncComponent({
      loader: () => import("../individual_days/Day8.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d9: defineAsyncComponent({
      loader: () => import("../individual_days/Day9.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d10: defineAsyncComponent({
      loader: () => import("../individual_days/Day10.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d11: defineAsyncComponent({
      loader: () => import("../individual_days/Day11.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d12: defineAsyncComponent({
      loader: () => import("../individual_days/Day12.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d13: defineAsyncComponent({
      loader: () => import("../individual_days/Day13.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d14: defineAsyncComponent({
      loader: () => import("../individual_days/Day14.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d15: defineAsyncComponent({
      loader: () => import("../individual_days/Day15.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d16: defineAsyncComponent({
      loader: () => import("../individual_days/Day16.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d17: defineAsyncComponent({
      loader: () => import("../individual_days/Day17.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d18: defineAsyncComponent({
      loader: () => import("../individual_days/Day18.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d19: defineAsyncComponent({
      loader: () => import("../individual_days/Day19.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d20: defineAsyncComponent({
      loader: () => import("../individual_days/Day20.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d21: defineAsyncComponent({
      loader: () => import("../individual_days/Day21.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d22: defineAsyncComponent({
      loader: () => import("../individual_days/Day22.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d23: defineAsyncComponent({
      loader: () => import("../individual_days/Day23.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d24: defineAsyncComponent({
      loader: () => import("../individual_days/Day24.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d25: defineAsyncComponent({
      loader: () => import("../individual_days/Day25.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d26: defineAsyncComponent({
      loader: () => import("../individual_days/Day26.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d27: defineAsyncComponent({
      loader: () => import("../individual_days/Day27.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d28: defineAsyncComponent({
      loader: () => import("../individual_days/Day28.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d29: defineAsyncComponent({
      loader: () => import("../individual_days/Day29.vue"),
      delay: 200,
      timeout: 3000,
    }),
    d30: defineAsyncComponent({
      loader: () => import("../individual_days/Day30.vue"),
      delay: 200,
      timeout: 3000,
    }),
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

@media screen and (max-width: 960px) {
  .day-preview__container {
    overflow: scroll;
  }
}
</style>
