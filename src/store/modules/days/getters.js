export default {
  daysList(state) {
    return state.days;
  },
  basicsDays(_, getters) {
    const daysElements = getters.daysList;
    const basicElements = daysElements.filter(
      (day) => day.category === "Basics"
    );
    return basicElements;
  },
  funDays(_, getters) {
    const daysElements = getters.daysList;
    const funElements = daysElements.filter((day) => day.category === "Fun");
    return funElements;
  },
  tipsDays(_, getters) {
    const daysElements = getters.daysList;
    const tipsElements = daysElements.filter((day) => day.category === "Tips");
    return tipsElements;
  },
  navDays(_, getters) {
    const daysElements = getters.daysList;
    const navElements = daysElements.filter((day) => day.category === "Nav");
    return navElements;
  },
  // 1.Giving a percentage of all seen elements
  // 1.1 Need to get all of the elements
  // 1.2 then filter on those element to get those who have the viewed attribute set to true
  // 1.3 Calculate a percentage based on that
  // 2. When it's done
  // 2.1 Do the same things for each category
  // 2.2Link the datasets in the home view to those values
};
