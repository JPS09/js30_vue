<template>
  <base-card>
    <font-awesome-icon icon="time"></font-awesome-icon>
    <div class="container">
      <div class="outer-circle">
        <div class="middle-circle">
          <div class="inner-circle">
            <font-awesome-icon icon="microphone"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
    <section>
      <h6>Listening</h6>
      <p>Speech Results</p>
    </section>
  </base-card>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-circle,
.middle-circle,
.inner-circle {
  border-radius: 50%;
}
</style>
