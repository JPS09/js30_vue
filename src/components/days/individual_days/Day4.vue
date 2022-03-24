/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <div>
    <p>
      <em
        >Psst: have a look at the JavaScript Console by
        <strong>pressing F12</strong></em
      >
      💁
    </p>
    <p>We work with some data to expriment with the console</p>
    <section>
      <button class="button" @click="toggleInventors()">
        First Set of Data
      </button>
      <button class="button" @click="togglePeople()">Second Set of Data</button>
      <button class="button" @click="toggleData()">Last Set of Data</button>
    </section>
    <section>
      <div v-if="showInventors">
        <img
          src="../../../assets/days_assets/Day4/screenshots/Day4_Inventors_Array_of_Objects.png"
          alt="Inventors List"
          class="img-style"
        />
      </div>
      <div v-if="showPeople">
        <img
          src="../../../assets/days_assets/Day4/screenshots/Day4_People_Array.png"
          alt="People List"
          class="img-style"
        />
      </div>
      <div v-if="showData">
        <img
          src="../../../assets/days_assets/Day4/screenshots/Day4_Data_Array.png"
          alt="People List"
          class="img-style"
        />
      </div>
    </section>
    <section>
      <div>
       <h4>Inventors born in the 1500's</h4>
        <div v-if="showData">
          <img
            src="../../../assets/days_assets/Day4/screenshots/Day4_Data_Array.png"
            alt="People List"
            class="img-style"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showInventors: false,
      showPeople: false,
      showData: false,
    };
  },
  methods: {
    toggleInventors() {
      this.showInventors = !this.showInventors;
    },
    togglePeople() {
      this.showPeople = !this.showPeople;
    },
    toggleData() {
      this.showData = !this.showData;
    },
  },
};
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// Long version
// const describingFilter = inventors.filter(function(inventor){
//   if (inventor.year >= 1500 && inventor.year <= 1599){
//     return true; // Keeps the value
//   };             // no else needed since only truthy values are kept.
// });
// console.table(describingFilter) // gives us a table in the console

//Optimized version
const filter = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);
console.table(filter);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//Long version
// const sortAges = inventors.sort(function (a,b){
//   if (a.year > b.year){
//     return 1;
//   } else {
//     return -1;
//   };
// });

//Optimized version
const optSortAges = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(optSortAges);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // Adding a default value for total for the first iteration

console.log(totalYears);

// 5. Sort the inventors by years lived
const lived = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);
console.table(lived);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category'); // Gets the div

// const links = [...category.querySelectorAll('a')]; // Gets the links inside that div and convert it into an array
// // Other syntax is Array.from(category.querySelectorAll('a'));

// const de = links
//               .map(link => link.textContent)
//               .filter(streetName =>streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSorted = people.sort((lastOne, nextOne) => {
  // eslint-disable-next-line no-unused-vars
  const [aLast, aFirst] = lastOne.split(","); //Double variables declaration
  // eslint-disable-next-line no-unused-vars
  const [bLast, bFirst] = nextOne.split(","); //Double variables declaration
  return aLast > bLast ? 1 : -1;
});

console.table(peopleSorted);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const vehicles = data.reduce((obj, item) => {
  if (!obj[item]) {
    // if key not present in object
    obj[item] = 0; // create it
  }
  obj[item]++; // then increment its value
  return obj;
}, {}); // defining a default object
console.table(vehicles);
</script>

<style scoped>
button.button {
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
.img-style {
  border-radius: 5px;
}
</style>
