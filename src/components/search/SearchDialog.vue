<template>
  <base-dialog :dialogDisplay="dialogDisplay" :voiceDialog="true">
    <template #closeIcon>
      <div class="search-dialog__close-container">
        <font-awesome-icon
          class="search-dialog__close"
          icon="times"
        ></font-awesome-icon>
      </div>
    </template>
    <template #voiceMic>
      <div class="search-dialog__container">
        <div class="search-dialog__outer-circle">
          <div class="search-dialog__middle-circle">
            <div class="search-dialog__inner-circle">
              <font-awesome-icon
                class="search-dialog__mic"
                icon="microphone"
              ></font-awesome-icon>
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
  background: #78c5942f;
  width: 9em;
  height: 9em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-dialog__inner-circle {
  width: 5em;
  height: 5em;
  background: #78c594;
}
.search-dialog__middle-circle {
  width: 7em;
  height: 7em;
  background: #78c59481;
}

.search-dialog__mic {
  color: white;
  font-size: 1.5em;
}

.search-dialog__close {
  cursor: pointer;
  color: #2c3e50;
  font-size: 1.5em;
  margin: 0.5em;
}

.search-dialog__close-container {
  width: 100%;
  display: flex;
  justify-content: right;
}
</style>
