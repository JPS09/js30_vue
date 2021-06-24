<template>
  <div>
    <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  </div>
</template>

<script>
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

const isAJsBoss = people.some(
  (person) => new Date().getUTCFullYear() - person.year >= 18
);

// Shows the element alongside it's value
console.log("Are some people grown ups?", { isAJsBoss });
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

console.log("Redux way:", { newComments });
</script>
