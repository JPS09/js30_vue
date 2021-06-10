<template>
  <base-card>
    <div class="day-details__infos">
      <h2 id="day-details__name">{{ dayName }}</h2>
      <h4 class="day-details__category">{{ dayCategory }}</h4>
    </div>
    <p class="day-details__description">{{ dayDescription }}</p>
  </base-card>
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
    dayCategory: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.day-details__name {
  text-align: left;
}
.day-details__infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
}

.day-details__description {
  padding: 1em;
  text-align: justify;
  margin: 0;
}
</style>
