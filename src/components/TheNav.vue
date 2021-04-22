<template>
  <div class="nav-bar">
    <div id="left">
      <img
        src="../assets/logos/home_button.svg"
        alt="Link to Home page"
        class="home-logo"
        @click="homeLink"
      />
    </div>

    <h1 id="center">
      JS30 with
      <img alt="Vue logo" id="vue-logo" src="../assets/logos/vuejs_logo.png" />
    </h1>
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
  filter: invert(63%) sepia(24%) saturate(982%) hue-rotate(101deg)
    brightness(94%) contrast(85%);
  height: 30px;
  width: 30px;
  margin: 15px;
  transition: filter 0.2s ease-in-out;
}
.home-logo:hover {
  cursor: pointer;
  filter: invert(24%) sepia(49%) saturate(396%) hue-rotate(170deg)
    brightness(91%) contrast(87%);
}

.vue-highlight {
  color: #41674f;
  font-weight: 800;
}

#vue-logo {
  max-height: 40px;
  max-width: 40px;
}
</style>
