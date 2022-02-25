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
    <day-preview :dayId="day_id"></day-preview>
  </div>
</template>

<script>
import DayDetails from "../components/days/information_display/DayDetails.vue";
import DayDifferences from "../components/days/information_display/DayDifferences.vue";
import DayPreview from "../components/days/information_display/DayPreview.vue";
export default {
  components: { DayDetails, DayDifferences, DayPreview },
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
      this.selectedDay = this.$store.getters["days/daysList"].find(
        (day) => day.id === day_id
      );
      this.selectedDay.viewed = true;
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
  justify-items: center;
}

@media screen and (max-width: 960px) {
  .days {
    display: block;
  }
}
</style>
