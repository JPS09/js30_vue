import daysMutations from "./mutations.js";
import daysGetters from "./getters.js";
import daysActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      days: [
        {
          id: "d1",
          dayNumber: "Day 1",
          name: "Drum Kit",
          description:
            "This exercise makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          category: "Fun",
          subCategories: ["Music", "Audio", "Drums"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d2",
          dayNumber: "Day 2",
          name: "JS & CSS Clock",
          description:
            "Creating a JS clock that updates depending on the current time by fetching it from a Date object",
          category: "Fun",
          subCategories: ["Time", "OOP", "Info"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d3",
          dayNumber: "Day 3",
          name: "CSS Variables",
          description: "Modifiying CSS variables thanks to pure JS code",
          category: "Tips",
          subCategories: ["CSS", "Dynamic", "Info"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d4",
          dayNumber: "Day 4",
          name: "Array Cardio Part 1",
          description:
            "A variety of methods to handle arrays inside JS alongside many ways of implementing them",
          category: "Basics",
          subCategories: ["Data Handling", "Methods", "Syntax"],
          viewed: false,
          mainDifferences: {
            js:
              "These methods are essentials to handle data and are not modified across JS frameworks ",
            vue: "Vue doesn't change the way data is handled is JS",
          },
        },
        {
          id: "d5",
          dayNumber: "Day 5",
          name: "Flex Panel Galery",
          description:
            "A simple exercise based on the CSS Box model and made interactive by toggling classes on click",
          category: "Basics",
          subCategories: ["Box Model", "Class Toggling", "Events"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d6",
          dayNumber: "Day 6",
          name: "Type Ahead",
          description:
            "Simple search field made for finding a state or a city based on user input",
          category: "Basics",
          subCategories: ["Regex", "Events", "Search"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d7",
          dayNumber: "Day 7",
          name: "Array Cardio Part 2",
          description:
            "Second Part of an exercise made to present several array handling methods and their possible syntaxes",
          category: "Basics",
          subCategories: ["Data Handling", "Methods", "Syntax"],
          mainDifferences: {
            js:
              "These methods are essentials to handle data and are not modified across JS frameworks ",
            vue: "Vue doesn't change the way data is handled is JS",
          },
          viewed: false,
        },
        {
          id: "d8",
          dayNumber: "Day 8",
          name: "Fun with HTML5 Canvas",
          description:
            "Makes use of the canvas element available in HTML5 to allow the user to draw on it",
          category: "Fun",
          subCategories: ["Canvas", "Drawing", "Gradients"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d9",
          dayNumber: "Day 9",
          name: "Dev Tools Domination",
          description:
            "The console has many ways of diplaying messages which we have the opportunity to see here",
          category: "Tips",
          subCategories: ["Console", "Styling", "Error Handling"],
          viewed: false,
          mainDifferences: {
            js: "These are essentials tools of JS development",
            vue: "Vue doesn't change the way these tools work",
          },
        },
        {
          id: "d10",
          dayNumber: "Day 10",
          name: "Hold Shift and Check Checkboxes",
          description:
            "Using the this keyword and several flag variable to be able to check several checkboxes at once",
          category: "Tips",
          subCategories: ["Checkboxes", "'This' Keyword", "Events"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d11",
          dayNumber: "Day 11",
          name: "Custom Video Player",
          description:
            "Thanks to CSS Styling and several JS functions using methods available to the video element, creating a custom player is easy",
          category: "Fun",
          subCategories: ["Video Tag", "Video functions", "Styling"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d12",
          dayNumber: "Day 12",
          name: "Key Sequence Detection (Konami code)",
          description:
            "This fun little feature is based on listening to key ups events and comparing the input to a string stored in a variable",
          category: "Fun",
          subCategories: ["Comparing data", "Event", "Easter Egg"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d13",
          dayNumber: "Day 13",
          name: "Slide In on Scroll",
          description:
            "Depending on the scroll, images are made to scroll in and out of a text article",
          category: "Fun",
          subCategories: ["Scroll event", "Class Toggling", "CSS animation"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d14",
          dayNumber: "Day 14",
          name: "JS Reference vs Copying",
          description:
            "A little explanation of the difference between referencing an existing element and copying it",
          category: "Basics",
          subCategories: ["Data Handling", "Data Flow", "Differences"],
          viewed: false,
          mainDifferences: {
            js:
              "Essential concept of JS which doesn't change across frameworks",
            vue: "Vue, which is based on JS, is still bound by these concepts",
          },
        },
        {
          id: "d15",
          dayNumber: "Day 15",
          name: "LocalStorage",
          description:
            "LocalStorage is an alternative way of saving data between pages but also to avoid losing it when the user actualises it",
          category: "Basics",
          subCategories: ["Feature", "Data persistence", "Data handling"],
          viewed: false,
          mainDifferences: {
            js:
              "This Feature is built-in JS and remains the same no matter where it is used",
            vue:
              "This feature can also be used in frameworks like vue which doesn't change the way it works",
          },
        },
        {
          id: "d16",
          dayNumber: "Day 16",
          name: "Mouse Shadow",
          description:
            "Making a shadow that reacts dynamicaly to the mouse position on the page",
          category: "Fun",
          subCategories: ["Dynamic Shadow", "Events", "Mouse"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d17",
          dayNumber: "Day 17",
          name: "Sorting without article",
          description: "Little trick to sort elements without their articles",
          category: "Tips",
          subCategories: ["Sorting", "Regex", "Text"],
          viewed: false,
          mainDifferences: {
            js:
              "This little trick can be used no matter where it is implemented",
            vue: "No difference in data handling",
          },
        },
        {
          id: "d18",
          dayNumber: "Day 18",
          name: "Adding up Time with Reduce",
          description:
            "Adding up the total duration of a selection of videos is easy with reduce",
          category: "Tips",
          subCategories: ["Total Time", "Reduce", "Method"],
          viewed: false,
          mainDifferences: {
            js:
              "Reduce is a data handling method which stays the same across frameworks",
            vue: "Data Handling methods are not modified by Vue",
          },
        },
        {
          id: "d19",
          dayNumber: "Day 19",
          name: "Webcam Fun",
          description:
            "By manipulating the pixels provided by the canvas used to display the video stream, we are able to makes a variety of effects",
          category: "Fun",
          subCategories: ["Pixels", "Large arrays", "Video effects"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d20",
          dayNumber: "Day 20",
          name: "Speech Detection",
          description:
            "Speech Recognition is a built-in feature of modern web browsers which can be used for a variety of ideas",
          category: "Nav",
          subCategories: ["Built-in", "Feature", "Modern"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d21",
          dayNumber: "Day 21",
          name: "Geolocation",
          description:
            "Geolocation is a built-in feature of modern web browsers which provide using with informations such as speed and our position relative to the north",
          category: "Nav",
          subCategories: ["Built-in", "Feature", "Modern"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d22",
          dayNumber: "Day 22",
          name: "Follow Along Link Highlighter",
          description:
            "Using JS and CSS, highlighting links when they are hovered is easy when we have their coordinates on the page",
          category: "Tips",
          subCategories: ["Hightlight", "Events", "Positionning"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d23",
          dayNumber: "Day 23",
          name: "Speech Synthesis",
          description:
            "Speech Synthesis is a built-in feature of modern web browsers which can be used for accessibility features for example",
          category: "Nav",
          subCategories: ["Built-in", "Feature", "Modern"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d24",
          dayNumber: "Day 24",
          name: "Sticky Nav",
          description:
            "By taking in to account the scroll distance from the top, we can toggle a CSS class to make a nav bar sticky.",
          category: "Tips",
          subCategories: ["CSS", "Scroll Event", "Toggling"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d25",
          dayNumber: "Day 25",
          name: "Event Capture, Propagation Bubbling and Once",
          description:
            "Understanding how event are handled is key to handle them",
          category: "Basics",
          subCategories: ["Event Handling", "Tricky", "Capture"],
          viewed: false,
          mainDifferences: {
            js: "This concept is essential to understand how JS handle events",
            vue: "At its core, vue uses this concept to handle events",
          },
        },
        {
          id: "d26",
          dayNumber: "Day 26",
          name: "Stripe Follow Along Nav",
          description:
            "Stripe has a clean way to handle their dropdown menus which is what we are reproducing here",
          category: "Tips",
          subCategories: ["Immitation", "Dropdown", "Clean"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d27",
          dayNumber: "Day 27",
          name: "Click and Drag",
          description:
            "Handling the original click position compared to the scroll distance is what makes this feature possible",
          category: "Basics",
          subCategories: ["Scroll", "Click Handling", "Modern"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d28",
          dayNumber: "Day 28",
          name: "Video Speed Controller",
          description:
            "Using the height of a div to influence to playback speed of a video element depending on the cursor position is easy with JS",
          category: "Tips",
          subCategories: ["Video", "Playback", "Cursor"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d29",
          dayNumber: "Day 29",
          name: "Countdown Timer",
          description:
            "Thanks to JS, CSS and some clever calculations, we can help you have an idea on when to get back to work!",
          category: "Basics",
          subCategories: ["Timer", "24H", "Dynamic"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
        {
          id: "d30",
          dayNumber: "Day 30",
          name: "Whack a Mole",
          description:
            "A little Whack a Mole game directly in the browser thanks to JS with event listening and some random numbers",
          category: "Fun",
          subCategories: ["Game", "Moles", "Classic"],
          viewed: false,
          mainDifferences: {
            js: "Event Listening: Query selector & addEventListener",
            vue: "Event Listening: on:event=functionToExecute",
          },
        },
      ],
    };
  },
  mutations: daysMutations,
  getters: daysGetters,
  actions: daysActions,
};
