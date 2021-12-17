<template>
  <the-nav></the-nav>
  <div id="app-layout">
    <the-side-bar></the-side-bar>
    <router-view id="router-home" name="home" />
    <router-view id="router-days" name="days"></router-view>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheSideBar from "./components/TheSideBar.vue";
export default {
  components: {
    TheNav,
    TheSideBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

#app-layout {
  display: flex;
}

#router-home {
  align-self: flex-start;
  justify-content: center;
  margin: 0 auto;
  padding: 1em;
  width: 46vw;
}

#router-days {
  align-self: flex-start;
  margin: 0 auto;
  padding: 1em;
  width: inherit;
}

@media (max-width: 960px) {
  #app-layout {
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
  }
  #router-home {
    width: inherit;
  }

  #router-days {
    width: inherit;
  }
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Roboto", Helvetica, sans-serif;
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
