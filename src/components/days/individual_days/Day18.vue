<template>
  <div>
    <ul class="videos">
      <li data-time="5:43">Video 1</li>
      <li data-time="2:33">Video 2</li>
      <li data-time="3:45">Video 3</li>
      <li data-time="0:47">Video 4</li>
      <li data-time="5:21">Video 5</li>
      <li data-time="6:56">Video 6</li>
      <li data-time="3:46">Video 7</li>
      <li data-time="5:25">Video 8</li>
      <li data-time="3:14">Video 9</li>
      <li data-time="3:31">Video 10</li>
      <li data-time="5:59">Video 11</li>
      <li data-time="3:07">Video 12</li>
      <li data-time="11:29">Video 13</li>
      <li data-time="8:57">Video 14</li>
      <li data-time="5:49">Video 15</li>
      <li data-time="5:52">Video 16</li>
      <li data-time="5:50">Video 17</li>
      <li data-time="9:13">Video 18</li>
      <li data-time="11:51">Video 19</li>
      <li data-time="7:58">Video 20</li>
      <li data-time="4:40">Video 21</li>
      <li data-time="4:45">Video 22</li>
      <li data-time="6:46">Video 23</li>
      <li data-time="7:24">Video 24</li>
      <li data-time="7:12">Video 25</li>
      <li data-time="5:23">Video 26</li>
      <li data-time="3:34">Video 27</li>
      <li data-time="8:22">Video 28</li>
      <li data-time="5:17">Video 29</li>
      <li data-time="3:10">Video 30</li>
      <li data-time="4:43">Video 31</li>
      <li data-time="19:43">Video 32</li>
      <li data-time="0:47">Video 33</li>
      <li data-time="0:47">Video 34</li>
      <li data-time="3:14">Video 35</li>
      <li data-time="3:59">Video 36</li>
      <li data-time="2:43">Video 37</li>
      <li data-time="4:17">Video 38</li>
      <li data-time="6:56">Video 39</li>
      <li data-time="3:05">Video 40</li>
      <li data-time="2:06">Video 41</li>
      <li data-time="1:59">Video 42</li>
      <li data-time="1:49">Video 43</li>
      <li data-time="3:36">Video 44</li>
      <li data-time="7:10">Video 45</li>
      <li data-time="3:44">Video 46</li>
      <li data-time="3:44">Video 47</li>
      <li data-time="4:36">Video 48</li>
      <li data-time="3:16">Video 49</li>
      <li data-time="1:10">Video 50</li>
      <li data-time="6:10">Video 51</li>
      <li data-time="2:14">Video 52</li>
      <li data-time="3:44">Video 53</li>
      <li data-time="5:05">Video 54</li>
      <li data-time="6:03">Video 55</li>
      <li data-time="12:39">Video 56</li>
      <li data-time="1:56">Video 57</li>
      <li data-time="4:04">Video 58</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      li: [
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
};
const nodes = [...document.querySelectorAll("[data-time]")];
const seconds = nodes
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
</script>
