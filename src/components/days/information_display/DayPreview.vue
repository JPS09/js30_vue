<template>
  <div class="day-preview__container">
    <h3>Preview</h3>
    <component :is="componentId"></component>
  </div>
</template>

<script>
// Importing all the days in an object
// this object has the day_id as the keys and the imports as the values.
// Using this object values, we can dynamicaly display the corresponding components based on the router
// import { defineAsyncComponent } from "vue";
export default {
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
