<template>
  <base-dialog :dialogDisplay="dialogDisplay" :voiceDialog="true">
    <font-awesome-icon icon="time"></font-awesome-icon>
    <template #voiceMic>
      <div class="search-dialog__outer-circle">
        <div class="search-dialog__middle-circle">
          <div class="search-dialog__inner-circle">
            <font-awesome-icon icon="microphone"></font-awesome-icon>
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
.search-dialog__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-dialog__outer-circle,
.search-dialog__middle-circle,
.search-dialog__inner-circle {
  border-radius: 50%;
}
</style>
