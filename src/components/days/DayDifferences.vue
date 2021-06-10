<template>
  <div class="day-differences__container">
    <header id="day-differences__header">
      <h1>Main differences</h1>
    </header>
    <section class="day-differences__section">
      <h3 class="day-differences__title">JS</h3>
      <p class="day-differences__details">Blabla le js</p>
    </section>
    <section class="day-differences__section">
      <h3 class="day-differences__title">Vue</h3>
      <p class="day-differences__details">Blabla Vue</p>
    </section>
  </div>
</template>

<style scoped>
#day-differences__header {
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 4em;
  background: #458b51;
  color: white;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 2rem;
}

.day-differences__container {
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-bottom: 1em;
}
.day-differences__title {
  text-align: left;
}

.day-differences__section {
  padding: 0 2rem;
}
.day-differences__details {
  margin: 0;
  padding: 0 2rem;
  text-align: justify;
}
</style>
