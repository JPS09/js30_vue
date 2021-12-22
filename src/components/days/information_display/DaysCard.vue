<template>
  <router-link :to="day_id">
    <base-card>
      <h3>{{ dayNumber }}</h3>
      <h4>{{ dayName }}</h4>
      <p>{{ dayDescription }}</p>
    </base-card>
  </router-link>
</template>

<script>
export default {
  props: {
    dayNumber: {
      type: String,
      required: true,
    },
    dayName: {
      type: String,
      required: true,
    },
    dayDescription: {
      type: String,
      required: true,
    },
    dayId: {
      type: String,
      required: true,
    },
  },
  computed: {
    day_id() {
      return "/days/" + this.dayId;
    },
  },
};
</script>
