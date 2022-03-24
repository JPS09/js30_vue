<template>
  <div>
    <p>
      <em
        >Psst: have a look at the JavaScript Console by
        <strong>pressing F12</strong></em
      >
      💁
    </p>
  </div>
  <section>
    <button class="button" @click="togglePeople()">First Set of Data</button>
    <button class="button" @click="toggleComments()">Second Set of Data</button>
  </section>
  <section>
    <div v-if="showPeople">
      <img
        src="../../../assets/days_assets/Day7/screenshots/Day7_People_Array_of_Objects.png"
        alt="Inventors List"
        class="img-style"
      />
    </div>
    <div v-if="showComments">
      <img
        src="../../../assets/days_assets/Day7/screenshots/Day7_Comments_Array_of_Objects.png"
        alt="People List"
        class="img-style"
      />
    </div>
  </section>
  <section>
    <div>
      <h4>Are Some people Grown Ups?</h4>
      <button class="button-details" @click="toggleFirstS()">
        Display the result
      </button>
      <div v-if="showFirstSection">
        <img
          src="../../../assets/days_assets/Day7/screenshots/Day7_People_Grown_ups.png"
          alt="Are Some people Grown Ups?"
          class="img-style"
        />
      </div>
    </div>
    <div>
      <h4>Are ALL people Grown Ups?</h4>
      <button class="button-details" @click="toggleSecondS()">
        Display the result
      </button>
      <div v-if="showSecondSection">
        <img
          src="../../../assets/days_assets/Day7/screenshots/Day7_People_All_Grown_ups.png"
          alt="Are ALL people Grown Ups?"
          class="img-style"
        />
      </div>
    </div>
    <div>
      <h4>Finding a Comment with JS</h4>
      <button class="button-details" @click="toggleThirdS()">
        Display the result
      </button>
      <div v-if="showThirdSection">
        <img
          src="../../../assets/days_assets/Day7/screenshots/Day7_Comments_Finding_a_Comment.png"
          alt="Are Some people Grown Ups?"
          class="img-style"
        />
      </div>
    </div>
    <div>
      <h4>Finding a Comment's Index</h4>
      <button class="button-details" @click="toggleFourthS()">
        Display the result
      </button>
      <div v-if="showFourthSection">
        <img
          src="../../../assets/days_assets/Day7/screenshots/Day7_Comments_Finding_a_Comment_INDEX.png"
          alt="Are Some people Grown Ups?"
          class="img-style"
        />
      </div>
    </div>
    <div>
      <h4>Deleting a Comment the REDUX Way</h4>
      <button class="button-details" @click="toggleFifthS()">
        Display the result
      </button>
      <div v-if="showFifthSection">
        <img
          src="../../../assets/days_assets/Day7/screenshots/Day7_Comments_Deleting_a_Comment_REDUX.png"
          alt="Are Some people Grown Ups?"
          class="img-style"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showPeople: false,
      showComments: false,
      showFirstSection: false,
      showSecondSection: false,
      showThirdSection: false,
      showFourthSection: false,
      showFifthSection: false,
    };
  },
  methods: {
    togglePeople() {
      this.showPeople = !this.showPeople;
    },
    toggleComments() {
      this.showComments = !this.showComments;
    },
    toggleFirstS() {
      this.showFirstSection = !this.showFirstSection;
    },
    toggleSecondS() {
      this.showSecondSection = !this.showSecondSection;
    },
    toggleThirdS() {
      this.showThirdSection = !this.showThirdSection;
    },
    toggleFourthS() {
      this.showFourthSection = !this.showFourthSection;
    },
    toggleFifthS() {
      this.showFifthSection = !this.showFifthSection;
    },
  },
};
// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// Lengthy Version
// eslint-disable-next-line no-unused-vars
const isGrownUp = people.some((person) => {
  const currentYear = new Date().getUTCFullYear();
  if (currentYear - person.year >= 18) {
    return true;
  }
});

// Short Version
// eslint-disable-next-line no-unused-vars
const isGrownUpShort = people.some((person) => {
  const currentYear = new Date().getUTCFullYear();
  return currentYear - person.year >= 18;
});

// JS Boss

const isGrownUpBest = people.some(
  (person) => new Date().getUTCFullYear() - person.year >= 18
);

// Shows the element alongside it's value
console.log("Are some people grown ups?", { isGrownUpBest });
// Array.prototype.every() // is everyone 19 or older?
const allGrownUps = people.every(
  (person) => new Date().getUTCFullYear() - person.year >= 18
);
console.log("Is everyone a grown up?", { allGrownUps });
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const aComment = comments.find((comment) => comment.id === 823423);
console.log("Found comment :", { aComment });

// Array.prototype.findIndex()
// Find the comment with this ID
const commentToDelete = comments.findIndex((comment) => comment.id === 823423);
console.log("index of element :", commentToDelete);
// delete the comment with the ID of 823423

// Deleting with Slice
// comments.slice(commentToDelete, 1);

// Deleting with pop
// comments.pop(commentToDelete);

// Creating a copy which doesn't contain the unwanted element. Is Redux way.

const newComments = [
  ...comments.slice(0, commentToDelete),
  ...comments.slice(commentToDelete + 1),
];

console.log("Deleting an element the Redux way:", { newComments });
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
