<template>
  <div id="background">
    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="bolt"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    setSecondsTest() {
      console.log("test");
      // this.$refs.style.transform = `rotate(${this.seconds}deg)`;
    },
  },
  computed: {
    now() {
      return new Date();
    },
    seconds() {
      return (this.now.getSeconds / 60) * 360 + 90;
    },
    minutes() {
      return (this.now.getMinutes / 60) * 360 + 90;
    },
    hour() {
      return (this.now.getHours / 60) * 360 + 90;
    },
  },
  created() {
    this.setSecondsTest();
  },
};
const setSeconds = (now) => {
  const secondHand = document.querySelector(".second-hand");
  if (secondHand) {
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }
};

const setMinutes = (now) => {
  const minHand = document.querySelector(".min-hand");
  if (minHand) {
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  }
};

const setHour = (now) => {
  const hourHand = document.querySelector(".hour-hand");
  if (hourHand) {
    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
};
const setDate = () => {
  const now = new Date();
  setSeconds(now);
  setMinutes(now);
  setHour(now);
};

setInterval(setDate, 1000);
</script>

<style scoped>
.bolt {
  background: rgb(121, 9, 121);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: absolute;
  top: 49%;
  right: 47%;
}
.clock {
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /* account for the height of the clock hands */
}

.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.42, 0, 0.09, 1.78);
  border-radius: 30px;
}

.hand.second-hand {
  background: rgb(211, 108, 39);
  height: 2px;
  z-index: -3;
}

.hand.hour-hand {
  width: 30%;
  left: 75px;
}

.hand.min-hand {
  background: rgb(145, 225, 228);
}
</style>
