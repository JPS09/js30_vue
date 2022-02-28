export default {
  setAllTo(context, payload) {
    // The idea is that one action will dispatch to the correct mutation depending on the button that has been clicked on to open the dialog
    if (payload === "viewed") {
      context.commit("setAllToViewed");
    } else if (payload === "not_viewed") {
      context.commit("setAllToNotViewed");
    }
  },
};
// Call the appropriate mutation based on the user actions
