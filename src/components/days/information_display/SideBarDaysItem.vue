<template>
  <router-link :to="day_id" class="side-bar-item__link">
    <p class="side-bar-item__paragraph">
      <span class="side-bar-item__day-number">{{ dayNumber }}</span>
      {{ dayName }}
      <span class="side-bar-item__day-category"> {{ dayCategory }}</span>
    </p>
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
    dayCategory: {
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

<style scoped>
.side-bar-item__link,
.side-bar-item__link:visited {
  text-decoration: none;
  outline: none;
  color: #2c3e50;
  transition: color 0.2s ease-in;
}

.side-bar-item__paragraph:hover {
  background: #78c594;
  border-radius: 10px;
  color: white;
}

.side-bar-item__paragraph {
  padding: 0.5em;
  transition: all 0.2s ease-in;
  margin: 0;
}

.side-bar-item__day-number {
  font-weight: 800;
}

.side-bar-item__day-category {
  font-weight: 500;
  font-style: italic;
}
</style>
