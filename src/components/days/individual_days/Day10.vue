<template>
  <div class="inbox">
    <div
      :class="checkbox.class"
      v-for="checkbox in checkboxes"
      :key="checkbox.id"
      @click="checkShift($event)"
    >
      <input :type="checkbox.type" :id="checkbox.id" />
      <p>{{ checkbox.paragraphContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: [
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "This is an inbox layout.",
          id: 1,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Check one item",
          id: 2,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Hold down your Shift key",
          id: 3,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Check a lower item",
          id: 4,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent:
            "Everything in between should also be set to checked",
          id: 5,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Try to do it without any libraries",
          id: 6,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Just regular JavaScript",
          id: 7,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Good Luck!",
          id: 8,
        },
        {
          class: "item",
          type: "checkbox",
          paragraphContent: "Don't forget to tweet your result!",
          id: 9,
        },
      ],
      inBetween: false,
      shiftKey: false,
      lastChecked: false,
    };
  },
  methods: {
    checkShift(event) {
      // variable to store the shift key boolean value
      this.shiftKey = event.shiftKey;

      // Checking if the shiftKey is pressed and that the current checkbox is checked
      if (this.shiftKey && this.checked) {
        // Iterating over the checkboxes
        // Need to translate that later
        // checkboxes.forEach((checkbox) => {
        //   // Check if the current checkbox is one the 'begin' or the 'end'
        //   if (checkbox === this || checkbox === this.lastChecked) {
        //     // Reverse the value of inBetween since it's not inBetween the start and end
        //     this.inBetween = !this.inBetween;
        //   }
        //   // if the current checkbox is inBetween, check it.
        //   if (this.inBetween) {
        //     checkbox.checked = true;
        //   }
        // });
        //TODO = Find a way to reverse this in a way that when the shift key is pressed on a checked box, it will make them all unchecked
      }
      this.lastChecked = this;
    },
  },
};
// const checkboxes = document.querySelectorAll("input[type=checkbox]");

// let lastChecked;

// checkboxes.forEach((checkbox) =>
//   checkbox.addEventListener("click", checkShift)
// );
</script>

<style scoped>
html {
  font-family: sans-serif;
  background: #ffc600;
}

.inbox {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
}

.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}

.item:last-child {
  border-bottom: 0;
}

input:checked + p {
  background: #f9f9f9;
  text-decoration: line-through;
}

input[type="checkbox"] {
  margin: 20px;
}

p {
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  flex: 1;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
  border-left: 1px solid #d1e2ff;
}
</style>
