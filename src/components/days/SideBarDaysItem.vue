<template>
  <p>
    <span class="dayNumber">{{ dayNumber }}</span> {{ dayName }}
    <span class="dayCategory"> {{ dayCategory }}</span>
  </p>
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
    dayCategory: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.dayNumber {
  font-weight: 800;
}

.dayCategory {
  font-style: oblique;
}
</style>
