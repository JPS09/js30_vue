<template>
  <div class="days">
    <h1>{{ router_day_id }}</h1>
    <p>Why broken?</p>
  </div>
</template>

<script>
export default {
  props: ["day_id"],
  computed: {
    router_day_id() {
      return this.day_id;
    },
  },
};
</script>
