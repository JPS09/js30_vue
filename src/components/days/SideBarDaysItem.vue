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
  transition: color 0.2s;
}

.side-bar__link:visited {
  color: #38926a;
}

p {
  padding: 0.5em;
  transition: all 0.2s;
}

p:hover {
  background: #78c594;
  border-radius: 10px;
  color: white;
}
.dayNumber {
  font-weight: 800;
}

.dayCategory {
  font-style: oblique;
}
</style>
