<template>
  <div>
    <h3>{{ dayName }}</h3>
    <p>{{ dayDescription }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
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
