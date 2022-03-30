<template>
  <h2>Whack-a-mole!</h2>
  <p>Your Score :<span class="score" ref="score">0</span></p>
  <button @click="startGame()">Start!</button>

  <div class="game">
    <div
      class="hole"
      :class="hole.class"
      v-for="hole in holes"
      :key="hole.id"
      ref="holes"
    >
      <div class="mole" @click="bonk($event)"></div>
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

h1 {
  text-align: center;
  font-size: 10rem;
  line-height: 1;
  margin-bottom: 0;
}

.score {
  background: rgba(255, 255, 255, 0.2);
  padding: 0 3rem;
  line-height: 1;
  border-radius: 1rem;
}

.game {
  width: 600px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.hole {
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;
}

.hole:after {
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

.mole {
  background: url("../../../assets/days_assets/Day30/mole.svg") bottom center
    no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.hole.up .mole {
  top: 0;
}
</style>
