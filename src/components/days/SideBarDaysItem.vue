<template>
  <router-link to="#" class="side-bar__link">
    <p>
      <span class="dayNumber">{{ dayNumber }}</span> {{ dayName }}
      <span class="dayCategory"> {{ dayCategory }}</span>
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
  },
};
</script>

<style scoped>
.side-bar__link {
  text-decoration: none;
  outline: none;
  color: #2c3e50;
}

.side-bar__link:visited {
  color: #41b883;
}
.side-bar__link:hover {
  background-color: #41674f;
  border-bottom: 1px solid #41674f;
}
.dayNumber {
  font-weight: 800;
}

.dayCategory {
  font-style: oblique;
}
</style>
