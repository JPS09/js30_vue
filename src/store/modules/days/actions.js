export default {
  setAllToViewed(context) {
    context.commit("setAllToViewed");
  },
  setAllToNotViewed(context) {
    context.commit("setAllToNotViewed");
  },
};
// Call the appropriate mutation based on the user actions
