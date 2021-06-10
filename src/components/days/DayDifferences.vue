<template>
  <div class="day-differences">
    <header id="day-differences__header">
      <h1>Main differences</h1>
    </header>
    <section>
      <h3 class="day-differences__title">JS</h3>
      <p>Blabla le js</p>
    </section>
    <section>
      <h3 class="day-differences__title">Vue</h3>
      <p>Blabla Vue</p>
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

.day-differences {
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.day-differences__title {
  text-align: left;
  padding: 0 2rem;
}
</style>
