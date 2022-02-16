export default {
  totalStats(_, _2, _3, rootGetters) {
    let count = 0;
    let viewedCount = 0;
    rootGetters["days/daysList"].forEach((day) => {
      count++;
      day.viewed ? viewedCount++ : viewedCount;
    });
    const totalPercentage = Math.round((viewedCount / count) * 100);
    return totalPercentage;
  },
  basicsStats(_, _2, _3, rootGetters) {
    let basicCount = 0;
    let basicViewed = 0;
    rootGetters["days/daysList"].forEach((day) => {
      if (day.category === "Basics") {
        basicCount++;
        day.viewed ? basicViewed++ : basicViewed;
      }
    });
    const basicPercentage = Math.round((basicViewed / basicCount) * 100);
    return basicPercentage;
  },
  funStats(_, _2, _3, rootGetters) {
    let funCount = 0;
    let funViewed = 0;
    rootGetters["days/daysList"].forEach((day) => {
      if (day.category === "Fun") {
        funCount++;
        day.viewed ? funViewed++ : funViewed;
      }
    });
    const funPercentage = Math.round((funViewed / funCount) * 100);
    return funPercentage;
  },
  tipsStats(_, _2, _3, rootGetters) {
    let tipsCount = 0;
    let tipsViewed = 0;
    rootGetters["days/daysList"].forEach((day) => {
      if (day.category === "Tips") {
        tipsCount++;
        day.viewed ? tipsViewed++ : tipsViewed;
      }
    });
    const tipsPercentage = Math.round((tipsViewed / tipsCount) * 100);
    return tipsPercentage;
  },
  navStats(_, _2, _3, rootGetters) {
    let navCount = 0;
    let navViewed = 0;
    rootGetters["days/daysList"].forEach((day) => {
      if (day.category === "Nav") {
        navCount++;
        day.viewed ? navViewed++ : navViewed;
      }
    });
    const navPercentage = Math.round((navViewed / navCount) * 100);
    return navPercentage;
  },
};
