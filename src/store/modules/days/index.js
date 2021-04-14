import daysMutations from "./mutations.js";
import daysGetters from "./getters.js";
import daysActions from "./actions.js";

export default {
  state() {
    return {
      days: [
        {
          id: "d1",
          dayNumber: "Day 1",
          name: "Drum Kit",
          description:
            "This exercise makes use of an array of basics DOM manipulations techniques such as event listening and conditonal CSS classes",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d2",
          dayNumber: "Day 2",
          name: "JS & CSS Clock",
          description:
            "Creating a JS clock that updates depending on the current time by fetching it from a Date object",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d3",
          dayNumber: "Day 3",
          name: "CSS Variables",
          description: "Modifiying CSS variables thanks to pure JS code",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d4",
          dayNumber: "Day 4",
          name: "Array Cardio Part 1",
          description:
            "A variety of methods to handle arrays inside JS alongside many ways of implementing them",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d5",
          dayNumber: "Day 5",
          name: "Flex Panel Galery",
          description:
            "A simple exercise based on the CSS Box model and made interactive by toggling classes on click",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d6",
          dayNumber: "Day 6",
          name: "Type Ahead",
          description:
            "Simple search field made for finding a state or a city based on user input",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d7",
          dayNumber: "Day 7",
          name: "Array Cardio Part 2",
          description:
            "Second Part of an exercise made to present several array handling methods and their possible syntaxes",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d8",
          dayNumber: "Day 8",
          name: "Fun with HTML5 Canvas",
          description:
            "Makes use of the canvas element available in HTML5 to allow the user to draw on it",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d9",
          dayNumber: "Day 9",
          name: "Dev Tools Domination",
          description:
            "The console has many ways of diplaying messages which we have the opportunity to see here",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d10",
          dayNumber: "Day 10",
          name: "Hold Shift and Check Checkboxes",
          description:
            "Using the this keyword and several flag variable to be able to check several checkboxes at once",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d11",
          dayNumber: "Day 11",
          name: "Custom Video Player",
          description:
            "Thanks to CSS Styling and several JS functions using methods available to the video element, creating a custom player is easy",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d12",
          dayNumber: "Day 12",
          name: "Key Sequence Detection (Konami code)",
          description:
            "This fun little feature is based on listening to key ups events and comparing the input to a string stored in a variable",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d13",
          dayNumber: "Day 13",
          name: "Slide In on Scroll",
          description:
            "Depending on the scroll, images are made to scroll in and out of a text article",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d14",
          dayNumber: "Day 14",
          name: "JS Reference vs Copying",
          description:
            "A little explanation of the difference between referencing an existing element and copying it",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d15",
          dayNumber: "Day 15",
          name: "LocalStorage",
          description:
            "LocalStorage is an alternative way of saving data between pages but also to avoid losing it when the user actualises it",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d16",
          dayNumber: "Day 16",
          name: "Mouse Shadow",
          description:
            "Making a shadow that reacts dynamicaly to the mouse position on the page",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d17",
          dayNumber: "Day 17",
          name: "Sorting without article",
          description: "Little trick to sort elements without their articles",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d18",
          dayNumber: "Day 18",
          name: "Adding up Time with Reduce",
          description:
            "Adding up the total duration of a selection of videos is easy with reduce",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d19",
          dayNumber: "Day 19",
          name: "Webcam Fun",
          description:
            "By manipulating the pixels provided by the canvas used to display the video stream, we are able to makes a variety of effects",
          categories: ["Fun"],
          viewed: false,
        },
        {
          id: "d20",
          dayNumber: "Day 20",
          name: "Speech Detection",
          description:
            "Speech Recognition is a built-in feature of modern web browsers which can be used for a variety of ideas",
          categories: ["Nav"],
          viewed: false,
        },
        {
          id: "d21",
          dayNumber: "Day 21",
          name: "Geolocation",
          description:
            "Geolocation is a built-in feature of modern web browsers which provide using with informations such as speed and our position relative to the north",
          categories: ["Nav"],
          viewed: false,
        },
        {
          id: "d22",
          dayNumber: "Day 22",
          name: "Follow Along Link Highlighter",
          description:
            "Using JS and CSS, highlighting links when they are hovered is easy when we have their coordinates on the page",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d23",
          dayNumber: "Day 23",
          name: "Speech Synthesis",
          description:
            "Speech Synthesis is a built-in feature of modern web browsers which can be used for accessibility features for example",
          categories: ["Nav"],
          viewed: false,
        },
        {
          id: "d24",
          dayNumber: "Day 24",
          name: "Sticky Nav",
          description:
            "By taking in to account the scroll distance from the top, we can toggle a CSS class to make a nav bar sticky.",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d25",
          dayNumber: "Day 25",
          name: "Event Capture, Propagationn Bubbling and Once",
          description:
            "Understanding how event are handled is key to handle them",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d26",
          dayNumber: "Day 26",
          name: "Stripe Follow Along Nav",
          description:
            "Stripe has a clean way to handle their dropdown menus which is what we are recreating here",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d27",
          dayNumber: "Day 27",
          name: "Click and Drag",
          description:
            "Handling the original click position compared to the scroll distance is what makes this feature possible",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d28",
          dayNumber: "Day 28",
          name: "Video Speed Controller",
          description:
            "Using the height of a div to influence to playback speed of a video element depending on the cursor position is easy with JS",
          categories: ["Tips"],
          viewed: false,
        },
        {
          id: "d29",
          dayNumber: "Day 29",
          name: "Countdown Timer",
          description:
            "Thanks to JS, CSS and some clever calculations, we can help you have an idea on when to get back to work!",
          categories: ["Basics"],
          viewed: false,
        },
        {
          id: "d30",
          dayNumber: "Day 30",
          name: "Whack a Mole",
          description: "A little Whack a Mole game directly in the browser thanks to JS with event listening and some random numbers",
          categories: ["Fun"],
          viewed: false,
        },
      ],
    };
  },
  mutations: daysMutations,
  getters: daysGetters,
  actions: daysActions,
};
