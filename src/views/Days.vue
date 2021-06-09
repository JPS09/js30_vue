<template>
  <div class="days">
    <h1>{{ name }}</h1>
    <p>Why broken?</p>
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
  created() {
    this.selectedDay = this.$store.getters["days/days"].find(
      (day) => day.id === this.day_id
    );
  },
};
</script>
