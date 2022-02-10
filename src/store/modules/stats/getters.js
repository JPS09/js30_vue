export default {
  totalStats(_, _2, _3, rootGetters) {
    let count = 0;
    rootGetters.days.forEach((day) => (day.viewed ? (count = +1) : count));
    return count;
  },
  basicsStats(_, _2, _3, rootGetters) {
    let basicCount = 0;
    rootGetters.days.forEach((day) => {
      if (day.category === "Basics") {
        day.viewed ? (basicCount = +1) : basicCount;
      }
    });
    return basicCount;
  },
  funStats(_, _2, _3, rootGetters) {
    let funCount = 0;
    rootGetters.days.forEach((day) => {
      if (day.category === "Fun") {
        day.viewed ? (funCount = +1) : funCount;
      }
    });
    return funCount;
  },
  tipsStats(_, _2, _3, rootGetters) {
    let tipsCount = 0;
    rootGetters.days.forEach((day) => {
      if (day.category === "Tips") {
        day.viewed ? (tipsCount = +1) : tipsCount;
      }
    });
    return tipsCount;
  },
  navStats(_, _2, _3, rootGetters) {
    let navCount = 0;
    rootGetters.days.forEach((day) => {
      if (day.category === "Nav") {
        day.viewed ? (navCount = +1) : navCount;
      }
    });
    return navCount;
  },
};
