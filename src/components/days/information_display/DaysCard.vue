<template>
  <router-link class="days-card__link" :to="day_id">
    <base-card class="days-card">
      <h3>{{ dayNumber }}</h3>
      <h4>{{ dayName }}</h4>
      <p>{{ dayCategory }}</p>
      <ul>
        <li v-for="daySubCategory in daySubCategories" :key="daySubCategory">
          {{ daySubCategory }}
        </li>
      </ul>
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
    dayCategory: {
      type: String,
      required: true,
    },
    dayId: {
      type: String,
      required: true,
    },
    daySubCategories: {
      type: Array,
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
.days-card__link,
.days-card__link:visited {
  text-decoration: none;
  outline: none;
  color: #2c3e50;
  transition: color 0.2s ease-in;
}

.days-card:hover {
  background: #78c594;
  border-radius: 10px;
  color: white;
}

.days-card {
  transition: all 0.2s ease-in;
}
</style>
