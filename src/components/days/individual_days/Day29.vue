<template>
  <div class="timer">
    <div class="timer__controls">
      <button data-time="20" class="timer__button" @click="startTimer($event)">
        20 Secs
      </button>
      <button data-time="300" class="timer__button" @click="startTimer($event)">
        Work 5
      </button>
      <button data-time="900" class="timer__button" @click="startTimer($event)">
        Quick 15
      </button>
      <button
        data-time="1200"
        class="timer__button"
        @click="startTimer($event)"
      >
        Snack 20
      </button>
      <button
        data-time="3600"
        class="timer__button"
        @click="startTimer($event)"
      >
        Lunch Break
      </button>
      <form
        name="customForm"
        id="custom"
        @submit.prevent="timer($event.currentTarget.firstChild.value * 60)"
      >
        <input type="text" name="minutes" placeholder="Enter Minutes" />
        <button type="submit" class="timer__button">Add Time</button>
      </form>
    </div>
    <div class="display">
      <h1 class="display__time-left" ref="clock"></h1>
      <p class="display__end-time" ref="endclock"></p>
    </div>
  </div>
</template>

<script>
export default {
  beforeUnmount() {
    clearInterval(this.timerInterval);
    document.title = "js30_vue";
  },
  data() {
    return {
      timerInterval: 0,
    };
  },
  methods: {
    timer(seconds) {
      // Clears timers before launching a new one
      clearInterval(this.timerInterval);
      const now = Date.now();
      const then = now + seconds * 1000;
      // Calls the function to display when to get back
      this.displayEndTime(then);
      // Displays the remaining time immediatly and not after one second
      this.displayTimeLeft(seconds);
      this.timerInterval = setInterval(() => {
        // Substract one second every second
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // When reaching 0, clears the interval
        if (secondsLeft <= 0) clearInterval(this.timerInterval);
        this.displayTimeLeft(secondsLeft);
      }, 1000);
    },
    test(value) {
      console.log(value.target.firstChild.value);
    },

    displayTimeLeft(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      const display = `${minutes}:${
        remainderSeconds < 10 ? "0" : ""
      }${remainderSeconds}`;
      this.$refs.clock.textContent = display;
      document.title = `${display} left`;
    },

    displayEndTime(timeStamp) {
      const end = new Date(timeStamp);
      const hour = end.getHours();
      const minutes = end.getMinutes();
      // Works for european clocks
      this.$refs.endclock.textContent = `Your work awaits you at ${hour}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;
      // For the people that uses 12h clocks
      // endClock.textContent = `Your work awaits you at ${
      //   hour > 12 ? hour - 12 : hour
      // }:${minutes}`;
    },

    startTimer(event) {
      const time = event.currentTarget.dataset.time;
      const seconds = parseInt(time);
      this.timer(seconds);
    },
  },
};
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  text-align: center;
  font-family: "Inconsolata", monospace;
}

.display__time-left {
  font-weight: 100;
  font-size: 10rem;
  margin: 0;
  color: white;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.05);
}

.timer {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  font-size: 10px;
  background: #8e24aa;
  background: linear-gradient(45deg, #42a5f5 0%, #478ed1 50%, #0d47a1 100%);
}

.timer__controls {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.timer__controls > * {
  flex: 1;
}

.timer__controls form {
  flex: 1;
  display: flex;
}

.timer__controls input {
  flex: 1;
  border: 0;
  padding: 1rem;
}

.timer__button {
  background: none;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  font-family: "Inconsolata", monospace;
}

.timer__button:hover,
.timer__button:focus {
  background: rgba(0, 0, 0, 0.2);
  outline: 0;
}

.display {
  flex: 1;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display__end-time {
  font-size: 2rem;
  color: white;
}
</style>
