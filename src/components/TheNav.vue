<template>
  <div class="nav-bar">
    <div id="nav-bar__left">
      <img
        src="../assets/logos/home_button.svg"
        alt="Link to Home page"
        class="nav-bar__home-logo"
        @click="homeLink"
      />
    </div>

    <h1 id="nav-bar__center">
      JS30 with
      <img
        alt="Vue logo"
        id="nav-bar__vue-logo"
        src="../assets/logos/vuejs_logo.png"
      />
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
#nav-bar__center {
  flex: 1;
}
#nav-bar__left {
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
  z-index: 10;
}

.nav-bar::after {
  content: "";
  flex: 1;
}
.nav-bar__home-logo {
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

#nav-bar__vue-logo {
  max-height: 40px;
  max-width: 40px;
}
</style>
