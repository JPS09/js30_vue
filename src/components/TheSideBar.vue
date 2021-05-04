<template>
  <div class="container">
    <ul v-if="days">
      <side-bar-days-item
        v-for="day in days"
        :key="day.id"
        :day-number="day.dayNumber"
        :day-name="day.name"
        :day-category="day.category"
      ></side-bar-days-item>
    </ul>
  </div>
</template>

<script>
import sideBarDaysItem from "./days/SideBarDaysItem.vue";
export default {
  components: {
    sideBarDaysItem,
  },
  computed: {
    days() {
      return this.$store.getters.days;
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  background-color: white;
  border-right: 2px solid rgba(112, 112, 112, 0.2);
  width: 25vw;
  height: fit-content;
  text-align: left;
  padding: 1em;
}

@media (max-width: 768px) {
  .container {
    display: none;
  }
}
</style>
