<template>
  <div>
    <h4>Referencing a String (Text), numbers or Boolean</h4>
    <h5>Updating the original doesn't impact the references</h5>
    <button class="button" @click="toggleFirst()">Show Result</button>
    <div v-if="showFirst">
      <p>Code</p>
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_First_Example.png"
        alt="First Example"
        class="img-style"
      />
      <p>Result</p>
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_First_Example_Proof.png"
        alt="First Example Result"
        class="img-style"
      />
    </div>
  </div>
  <div>
    <h4>Referencing an Array or an Object</h4>
    <h5>
      Updating the original WILL impact the Reference ( Wes is replaced by
      Teacher in both Arrays )
    </h5>
    <button class="button" @click="toggleSecond()">Show Result</button>
    <div v-if="showSecond">
      <p>Code</p>
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_Second_Example.png"
        alt="Second Example"
        class="img-style"
      />
      <p>Result</p>
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_Second_Example_Proof.png"
        alt="Second Example Proof"
        class="img-style"
      />
      <p>Solution in Code</p>
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_Second_Example_Solution.png"
        alt="Second Example Solution in code"
        class="img-style"
      />
      <p>Solution's Result</p>
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_Second_Example_Result.png"
        alt="Second Example Solution in code Part 1"
        class="img-style"
      />
      <img
        src="../../../assets/days_assets/Day14/screenshots/Day14_Second_Example_Result_2.png"
        alt="Second Example Solution in code Part 2"
        class="img-style"
      />
    </div>
    <div>
      <h4>Another Example with an Object</h4>
      <h5>
        Avoiding this behavior requires a little bit more work with object but
        remains the same logic
      </h5>
      <button class="button" @click="toggleLast()">Show Result</button>
      <div v-if="showLast">
        <p>Solution in Code</p>
        <img
          src="../../../assets/days_assets/Day14/screenshots/Day14_Last_Example.png"
          alt="Last Example Solution in Code"
          class="img-style"
        />
        <p>Solution's Result</p>
        <img
          src="../../../assets/days_assets/Day14/screenshots/Day14_Last_Example_Solution.png"
          alt="Last Example Solution in Code"
          class="img-style"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFirst: false,
      showSecond: false,
      showLast: false,
    };
  },
  methods: {
    toggleFirst() {
      this.showFirst = !this.showFirst;
    },
    toggleSecond() {
      this.showSecond = !this.showSecond;
    },
    toggleLast() {
      this.showLast = !this.showLast;
    },
  },
};
// start with strings, numbers and booleans
// Updating the original doesn't impact the reference
let wow = "good";
let zelda = wow;
console.log({ original: wow }, { ref: zelda });
wow = "expensive";
console.log({ originalUpdated: wow }, { ref: zelda });

let old = 99;
let old2 = old;
console.log({ original: old }, { ref: old2 });
old = 120;
console.log({ originalUpdated: old }, { ref: old2 });

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
console.log({ original: players }, { ref: team });

// however what happens when we update that array?
// team[0] = "Teacher";
// oh no - we have edited the original array too!
// console.log({ players });
// now here is the problem!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
// eslint-disable-next-line no-unused-vars
const team2 = players.slice();

// or create a new array and concat the old one in
// eslint-disable-next-line no-unused-vars
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
team4[2] = "Only the copy is affected";
console.log({ original: players }, { copy: team4 });

const team5 = Array.from(players);
team5[0] = "Surprise";
console.log({ original: players }, { copy: team5 });

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
// const tryingCopy = person;
// tryingCopy.number = 99;
// console.log({ person });
// how do we take a copy instead?
const newCopy = Object.assign({}, person, { good: true });
console.log({ original: person }, { copy: newCopy });
// We will hopefully soon see the object ...spread ( Update: Came with ES6 )

const spreadObject = { ...person };
console.log({ spreaded: spreadObject });

// Things to note - this is only 1 level deep - both for Arrays and Objects.
//lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};
console.log(wes);

// eslint-disable-next-line no-unused-vars
const dev = Object.assign({}, wes);
// Poor man Deep Clone
// eslint-disable-next-line no-unused-vars
const dev2 = JSON.parse(JSON.stringify(wes));
</script>
<style scoped>
.button {
  background-color: #448950;
  color: white;
  font-weight: 900;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid #448950;
  padding: 10px;
  margin: 10px;
}
.button:hover {
  background-color: white;
  color: #448950;
}

.button-details {
  background-color: #038cbf;
  color: white;
  font-weight: 900;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid #038cbf;
  padding: 10px;
  margin: 10px;
}

.button-details:hover {
  background-color: white;
  color: #038cbf;
}
.img-style {
  border-radius: 5px;
}
</style>
