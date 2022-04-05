<template>
  <div>
    <ul class="videos">
      <li
        v-for="item in listItems"
        :key="item.id"
        :data-time="item.time"
        class="item"
      >
        <strong>{{ item.content }}</strong> -> {{ item.time }} minutes
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        // Do that for each video then use the v-for ref to add all the datasets up (Same logic as Day30)
        { id: 1, time: "5:43", content: "Video 1" },
        { id: 2, time: "2:33", content: "Video 2" },
        { id: 3, time: "3:45", content: "Video 3" },
        { id: 4, time: "0:47", content: "Video 4" },
        { id: 5, time: "5:21", content: "Video 5" },
        { id: 6, time: "6:56", content: "Video 6" },
        { id: 7, time: "3:46", content: "Video 7" },
        { id: 8, time: "5:25", content: "Video 8" },
        { id: 9, time: "3:14", content: "Video 9" },
        { id: 10, time: "3:31", content: "Video 10" },
        { id: 11, time: "5:59", content: "Video 11" },
        { id: 12, time: "3:07", content: "Video 12" },
        { id: 13, time: "11:29", content: "Video 13" },
        { id: 14, time: "8:57", content: "Video 14" },
        { id: 15, time: "5:49", content: "Video 15" },
        { id: 16, time: "5:52", content: "Video 16" },
        { id: 17, time: "5:50", content: "Video 17" },
        { id: 18, time: "9:13", content: "Video 18" },
        { id: 19, time: "11:51", content: "Video 19" },
        { id: 20, time: "7:58", content: "Video 20" },
        { id: 21, time: "4:40", content: "Video 21" },
        { id: 22, time: "4:45", content: "Video 22" },
        { id: 23, time: "6:46", content: "Video 23" },
        { id: 24, time: "7:24", content: "Video 24" },
        { id: 25, time: "7:12", content: "Video 25" },
        { id: 26, time: "5:23", content: "Video 26" },
        { id: 27, time: "3:34", content: "Video 27" },
        { id: 28, time: "8:22", content: "Video 28" },
        { id: 29, time: "5:17", content: "Video 29" },
        { id: 30, time: "3:10", content: "Video 30" },
        { id: 31, time: "4:43", content: "Video 31" },
        { id: 32, time: "19:43", content: "Video 32" },
        { id: 33, time: "0:47", content: "Video 33" },
        { id: 34, time: "0:47", content: "Video 34" },
        { id: 35, time: "3:14", content: "Video 35" },
        { id: 36, time: "3:59", content: "Video 36" },
        { id: 37, time: "2:43", content: "Video 37" },
        { id: 38, time: "4:17", content: "Video 38" },
        { id: 39, time: "6:56", content: "Video 39" },
        { id: 40, time: "3:05", content: "Video 40" },
        { id: 41, time: "2:06", content: "Video 41" },
        { id: 42, time: "1:59", content: "Video 42" },
        { id: 43, time: "1:49", content: "Video 43" },
        { id: 44, time: "3:36", content: "Video 44" },
        { id: 45, time: "7:10", content: "Video 45" },
        { id: 46, time: "3:44", content: "Video 46" },
        { id: 47, time: "3:44", content: "Video 47" },
        { id: 48, time: "4:36", content: "Video 48" },
        { id: 49, time: "3:16", content: "Video 49" },
        { id: 50, time: "1:10", content: "Video 50" },
        { id: 51, time: "6:10", content: "Video 51" },
        { id: 52, time: "2:14", content: "Video 52" },
        { id: 53, time: "3:44", content: "Video 53" },
        { id: 54, time: "5:05", content: "Video 54" },
        { id: 55, time: "6:03", content: "Video 55" },
        { id: 56, time: "12:39", content: "Video 56" },
        { id: 57, time: "1:56", content: "Video 57" },
        { id: 58, time: "4:04", content: "Video 58" },
      ],
    };
  },
  methods: {
    timeReducing() {
      const seconds = this.listItems
        .map((node) => node.dataset.time)
        .map((timeCode) => {
          const [mins, secs] = timeCode.split(":").map(parseFloat);
          return mins * 60 + secs;
        })
        .reduce((total, vidSeconds) => total + vidSeconds);

      let secondLeft = seconds;

      const hours = Math.floor(secondLeft / 3600);
      secondLeft = secondLeft % 3600;

      const mins = Math.floor(secondLeft / 60);
      secondLeft = secondLeft % 60;

      console.info({ hours }, { mins }, { secondLeft });
    },
  },
};
// const nodes = [...document.querySelectorAll("[data-time]")];
</script>

<style scoped>
.videos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  list-style: none;
  border: 1px solid black;
  padding: 10px;
  margin: 5px;
}
</style>
