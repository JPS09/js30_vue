<template>
  <div class="days">
    <day-details
      :dayName="name"
      :dayDescription="description"
      :dayCategory="category"
    ></day-details>
    <day-differences
      :vueDifference="vueDifference"
      :jsDifference="jsDifference"
    ></day-differences>
  </div>
</template>

<script>
import DayDetails from "../components/days/DayDetails.vue";
import DayDifferences from "../components/days/DayDifferences.vue";
export default {
  components: { DayDetails, DayDifferences },
  data() {
    return {
      selectedDay: null,
    };
  },
  props: ["day_id"],
  computed: {
    routerDayId() {
      return this.day_id;
    },
    name() {
      return this.selectedDay.name;
    },
    description() {
      return this.selectedDay.description;
    },
    category() {
      return this.selectedDay.category;
    },
    jsDifference() {
      return this.selectedDay.mainDifferences.js;
    },
    vueDifference() {
      return this.selectedDay.mainDifferences.vue;
    },
  },
  methods: {
    loadDay(day_id) {
      this.selectedDay = this.$store.getters["days/days"].find(
        (day) => day.id === day_id
      );
    },
  },
  watch: {
    routerDayId(new_id) {
      this.loadDay(new_id);
    },
  },
  created() {
    this.loadDay(this.day_id);
  },
};
</script>

<style scoped>
.days {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
