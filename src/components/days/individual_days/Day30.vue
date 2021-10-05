<template>
  <h1>Whack-a-mole! <span class="score">0</span></h1>
  <button onClick="startGame()">Start!</button>

  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// TODO : Storing all time highest scores in localStorage
// Add a concept of levels like expert
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randHole(listHoles) {
  // Select a random hole index
  const idx = Math.floor(Math.random() * listHoles.length);
  const hole = listHoles[idx];
  // If same hole as before, rerun the function
  if (hole === lastHole) {
    console.warn("That's the same one bro");
    return randHole(holes);
  }
  // Stores the previous hole
  lastHole = hole;
  return hole;
}

function molePeep() {
  // Set a random time
  const time = randTime(200, 1000);
  // Set a random hole
  const hole = randHole(holes);
  // Makes the mole peep
  hole.classList.add("up");
  // With the random time reference, hides the mole
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) molePeep();
  }, time);
}
// Function that reset the game
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  molePeep();
  //Stops the game after 10 seconds
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) {
    console.warn("Cheating is not good for your health");
    return;
  }
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}
moles.forEach((mole) => mole.addEventListener("click", bonk));
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
  background: image("src/assets/days_assets/Day30/dirt.svg") bottom center
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
  background: image("src/assets/days_assets/Day30/mole.svg") bottom center
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
