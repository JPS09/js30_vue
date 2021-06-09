<template>
  <div class="days">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
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
