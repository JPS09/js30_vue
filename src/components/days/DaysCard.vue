<template>
  <base-card>
    <h3>{{ dayNumber }}</h3>
    <h4>{{ dayName }}</h4>
    <p>{{ dayDescription }}</p>
  </base-card>
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
  },
};
</script>
