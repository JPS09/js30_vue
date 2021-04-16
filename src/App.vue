<template>
  <the-nav></the-nav>
  <base-dialog
    title="Are you sure?"
    details="This action cannot be undone"
    :display="askConfirm"
    @close="closeDialog"
  ></base-dialog>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import TheNav from "./components/TheNav.vue";
export default {
  data() {
    return {
      askConfirm: false,
    };
  },
  components: {
    TheNav,
  },
  methods: {
    closeDialog() {
      this.askConfirm = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
