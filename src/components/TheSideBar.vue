<template>
  <div class="container">
    <ul v-if="days">
      <side-bar-days-items
        v-for="day in days"
        :key="day.id"
        :day-number="day.dayNumber"
        :day-name="day.name"
        :day-category="day.categories[0]"
      ></side-bar-days-items>
    </ul>
  </div>
</template>

<script>
import sideBarDaysItems from "./days/SideBarDaysItem.vue";
export default {
  components: {
    sideBarDaysItems,
  },
  computed: {
    days() {
      return this.$store.getters.days;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  overflow: scroll;
  background-color: white;
  width: 25vw;
  height: 75vh;
  border: 5px solid yellow;
}
</style>
