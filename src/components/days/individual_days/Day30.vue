<template>
  <h1 class="day-30__title">Whack-a-mole!</h1>
  <p class="day-30__paragraph__score">Your Score :</p>
  <p class="day-30__score" ref="score">0</p>
  <button @click="startGame()">Start!</button>

  <div class="day-30__game">
    <div
      class="day-30__hole"
      :class="hole.class"
      v-for="hole in holes"
      :key="hole.id"
      ref="holes"
    >
      <div class="day-30__mole" @click="bonk($event)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastHole: undefined,
      timeUp: false,
      score: 0,
      holes: [
        { class: "hole1", id: 1 },
        { class: "hole2", id: 2 },
        { class: "hole3", id: 3 },
        { class: "hole4", id: 4 },
        { class: "hole5", id: 5 },
        { class: "hole6", id: 6 },
      ],
    };
  },
  methods: {
    randTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    randHole(listHoles) {
      // Select a random hole index
      const idx = Math.floor(Math.random() * listHoles.length);
      const hole = listHoles[idx];
      // If same hole as before, rerun the function
      if (hole === this.lastHole) {
        console.warn("That's the same one bro");
        return this.randHole(this.$refs.holes);
      }
      // Stores the previous hole
      this.lastHole = hole;
      return hole;
    },
    molePeep() {
      // Set a random time
      const time = this.randTime(200, 1000);
      // Set a random hole
      const hole = this.randHole(this.$refs.holes);
      // Makes the mole peep
      hole.classList.add("up");
      // With the random time reference, hides the mole
      setTimeout(() => {
        hole.classList.remove("up");
        if (!this.timeUp) this.molePeep();
      }, time);
    },
    startGame() {
      this.$refs.score.textContent = 0;
      this.timeUp = false;
      this.score = 0;
      this.molePeep();
      //Stops the game after 10 seconds
      setTimeout(() => (this.timeUp = true), 10000);
    },
    bonk(e) {
      if (!e.isTrusted) {
        console.warn("Cheating is not good for your health");
        return;
      }
      this.score++;
      e.currentTarget.classList.remove("up");
      this.$refs.score.textContent = this.score;
    },
  },
};
</script>

<style scoped>
html {
  box-sizing: border-box;
  font-size: 10px;
  background: #ffc600;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Amatic SC", cursive;
}

.day-30__title {
  text-align: center;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0;
}

.day-30__score {
  background: rgba(255, 255, 255, 0.2);
  color: #458b51;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 0 3rem;
  line-height: 1;
  border-radius: 1rem;
}

.day-30__paragraph__score {
  font-weight: 700;
  font-size: 25px;
  text-decoration-line: underline;
}

.day-30__game {
  width: 100%;
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.day-30__hole {
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;
}

.day-30__hole:after {
  display: block;
  background: url("../../../assets/days_assets/Day30/dirt.svg") bottom center
    no-repeat;
  background-size: contain;
  content: "";
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 2;
  bottom: -30px;
}

.day-30__mole {
  background: url("../../../assets/days_assets/Day30/mole.svg") bottom center
    no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.day-30__hole.up .day-30__mole {
  top: 0;
}
</style>
