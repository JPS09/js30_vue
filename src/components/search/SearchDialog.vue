<template>
  <base-dialog :dialogDisplay="dialogDisplay" :voiceDialog="true">
    <font-awesome-icon icon="time"></font-awesome-icon>
    <template #voiceMic>
      <div class="outer-circle">
        <div class="middle-circle">
          <div class="inner-circle">
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
