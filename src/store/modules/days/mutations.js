export default {
  setAllToViewed(state) {
    state["days"].forEach((day) => {
      console.log(day.id, day.viewed);
      day.viewed = true;
      console.log(day.id, day.viewed);
    });
  },
  setAllToNotViewed(state) {
    state["days"].forEach((day) => {
      day.viewed = false;
    });
  },
};
// 1. One mutation for the global status of the viewed property when the user chooses to set them all to viewed
// 1.1 Use the days getter to fetch them all
// 1.2 Iterate on each of them and change the value of viewed property to true
// 1.3 For the opposite action, ANOTHER Mutation need to set them all to false but same idea

// 2. One mutation to set ONE day to viewed
// 2.1  Fetch the current day thanks to it's id
// 2.2 Set it's viewed property to true
// 2.3 Done
