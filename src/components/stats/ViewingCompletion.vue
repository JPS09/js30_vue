<template>
  <h3>Viewing Completion</h3>
  <div class="progress-circle" data-value="38">
    <div class="progress-mask">
      <div class="progress-bar"></div>
    </div>
    <div class="progress-sup50"></div>
  </div>
  <p><span class="remaining-days">30 days</span> to go</p>
</template>

<script>
export default {};
</script>

<style scoped>
.progress-circle {
  position: relative;
  font-size: 6em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 0.15em solid rgba(65, 103, 79, 0.2);
  background-color: #458b51;
}

.progress-circle::after {
  content: attr(data-value) "%";
  font-size: 0.15em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5) inset;
}
.progress-mask {
  position: absolute;
  width: 1em;
  height: 1em;
  left: -0.15em;
  top: -0.15em;
  clip: rect(0, 1em, 1em, 0.5em);
}

.progress-bar,
.progress-sup50 {
  position: absolute;
  border: 0.15em solid #458b51;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  clip: rect(0, 0.5em, 1em, 0);
}

.remaining-days {
  color: #458b51;
  font-weight: 800;
}
</style>
