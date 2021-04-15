<template>
  <div class="nav-bar">
    <div id="left">
      <img
        src="../../assets/house-black-silhouette-without-door.svg"
        alt="Link to Home page"
        class="home-logo"
        @click="homeLink"
      />
    </div>

    <h1 id="center">JS30 with <span class="vue-highlight">Vue</span></h1>
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
#center {
  flex: 1;
}
#left {
  flex: 1;
  display: flex;
  align-items: flex-start;
}
.nav-bar {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.26);
  min-height: 10vh;
  width: 100vw;
}

.nav-bar::after {
  content: "";
  flex: 1;
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
