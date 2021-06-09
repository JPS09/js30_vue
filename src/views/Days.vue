<template>
  <div class="days">
    <day-details :dayName="name" :dayDescription="description"></day-details>
  </div>
</template>

<script>
import dayDetails from "../components/days/DayDetails.vue";
export default {
  components: { dayDetails },
  data() {
    return {
      selectedDay: null,
    };
  },
  props: ["day_id"],
  computed: {
    router_day_id() {
      return this.day_id;
    },
    name() {
      return this.selectedDay.name;
    },
    description() {
      return this.selectedDay.description;
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
    router_day_id(new_id) {
      this.loadDay(new_id);
    },
  },
  created() {
    this.loadDay(this.day_id);
  },
};
</script>
