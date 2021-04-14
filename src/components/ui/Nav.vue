<template>
  <div class="nav-box">
    <img
      src="../../assets/house-black-silhouette-without-door.svg"
      alt="Link to Home page"
      class="home-logo"
      @click="homeLink"
    />

    <p>JS30 with Vue</p>
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
.nav-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.26);
  min-height: 10vh;
}
.home-logo {
  height: 5vh;
  width: 5vw;
  filter: invert(36%) sepia(17%) saturate(815%) hue-rotate(89deg)
    brightness(93%) contrast(88%);
}
.home-logo:hover {
  cursor: pointer;
}
</style>
