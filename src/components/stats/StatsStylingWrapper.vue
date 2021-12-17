<template>
  <div id="stats-styling__wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
#stats-styling__wrapper {
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: rgb(255, 255, 255);
  width: 18em;
  max-height: 30em;
  padding: 0 1em;
  margin: 0 1em;
}
@media screen and (max-width: 960px) {
  #stats-styling__wrapper {
    margin: 0.7em;
    padding: 0.9em;
  }
}
</style>
