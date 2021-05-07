<template>
  <base-card>
    <h3>{{ DayNumber }}</h3>
    <h4>{{ DayName }}</h4>
    <p>{{ DayDescription }}</p>
  </base-card>
</template>

<script>
export default {
  props: {
    DayNumber: {
      type: String,
      required: true,
    },
    DayName: {
      type: String,
      required: true,
    },
    DayDescription: {
      type: String,
      required: true,
    },
  },
};
</script>
