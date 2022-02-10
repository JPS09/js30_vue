<template>
  <div class="side-bar__container">
    <ul v-if="days" class="side-bar__ul">
      <side-bar-days-item
        v-for="day in days"
        :key="day.id"
        :day-number="day.dayNumber"
        :day-name="day.name"
        :day-category="day.category"
        :day-id="day.id"
      ></side-bar-days-item>
    </ul>
  </div>
</template>

<script>
import SideBarDaysItem from "./days/information_display/SideBarDaysItem.vue";
export default {
  components: {
    SideBarDaysItem,
  },
  computed: {
    days() {
      return this.$store.getters["days/days"];
    },
  },
};
</script>

<style scoped>
.side-bar__ul {
  margin: 0;
  padding: 0;
}
.side-bar__container {
  display: flex;
  background-color: white;
  border-right: 2px solid rgba(112, 112, 112, 0.2);
  width: 25vw;
  height: fit-content;
  text-align: left;
  padding: 1em;
}

@media screen and (max-width: 768px) {
  .side-bar__container {
    display: none;
  }
}
</style>
