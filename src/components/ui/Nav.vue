<template>
  <div class="nav-bar">
    <img
      src="../../assets/house-black-silhouette-without-door.svg"
      alt="Link to Home page"
      class="home-logo"
      @click="homeLink"
    />

    <p>JS30 with <span class="vue-highlight">Vue</span></p>
    <div id="placeholder-div"></div>
  </div>
</template>

<script>
export default {
  methods: {
    homeLink() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#placeholder-div {
  width: 10px;
}
.nav-bar {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.26);
  min-height: 10vh;
  width: 100vw;
}
.home-logo {
  height: 8vh;
  width: 8vw;
  filter: invert(36%) sepia(17%) saturate(815%) hue-rotate(89deg)
    brightness(93%) contrast(88%);
  max-height: 30px;
  max-width: 30px;
  margin: 15px;
  flex: 1;
}
.home-logo:hover {
  cursor: pointer;
}

.vue-highlight {
  color: #41674f;
  font-weight: 800;
}
</style>
