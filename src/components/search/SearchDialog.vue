<template>
  <base-dialog :dialogDisplay="dialogDisplay" :voiceDialog="true">
    <font-awesome-icon icon="time"></font-awesome-icon>
    <template #voiceMic>
      <div class="search-dialog__container">
        <div class="search-dialog__outer-circle">
          <div class="search-dialog__middle-circle">
            <div class="search-dialog__inner-circle">
              <font-awesome-icon icon="microphone"></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #voiceText>
      <h6>Listening</h6>
      <p>Speech Results</p>
    </template>
  </base-dialog>
</template>

<script>
export default {
  props: {
    dialogDisplay: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.search-dialog__container,
div > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-dialog__outer-circle,
.search-dialog__middle-circle,
.search-dialog__inner-circle {
  border-radius: 50%;
}

.search-dialog__outer-circle {
  background: rgba(255, 99, 71, 0.418);
  width: 10em;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-dialog__inner-circle {
  width: 5em;
  height: 5em;
  background: turquoise;
}
.search-dialog__middle-circle {
  width: 8em;
  height: 8em;
  background: rgba(210, 105, 30, 0.678);
}
</style>
