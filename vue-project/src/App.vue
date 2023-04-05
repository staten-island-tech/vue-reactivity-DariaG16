<script setup>
import measures from "./components/measures.vue";
import currentSong from "./components/currentSong.vue";
import notes from "./components/notes.vue";
import playBtn from "./components/playBtn.vue";
</script>

<template>
  <header>
    <h1>Make a Song</h1>
    <measures />
  </header>
  <body>
    <div id="current">
      <currentSong
        v-for="note2 in sequence"
        :key="note2"
        v-bind:title="note2"
        :style="`color: ` + note2.color"
      >
        {{ note2.note }}
      </currentSong>
    </div>
    <playBtn @btn-click="play">Play</playBtn>
    <playBtn @btn-click="pause">Stop</playBtn>
    <div id="notes">
      <notes
        id="btn"
        v-for="item in notesArr"
        @note-click="pushInArr(item)"
        :key="item"
        :style="`background-color: ` + item.color"
      >
        {{ item.note }}
      </notes>
    </div>
  </body>
</template>

<script>
let myAudio = [
  new Audio(`./public/C-piano.wav`),
  new Audio(`./public/E-piano.wav`),
  new Audio(`./public/G-piano.wav`),
];
//myAudio.src = notes.sound[0]; //how to access sequence from here
export default {
  name: "Home",
  components: {
    currentSong,
  },
  data() {
    return {
      sequence: [
        { note: "B", color: `#8B4366`, sound: `./public/B-piano.wav` },
        { note: "A", color: `#5F4266`, sound: `./public/A-piano.wav` },
      ],
      notesArr: [
        { note: "C", color: `#8D4A4A`, sound: `./public/C-piano.wav` },
        { note: "D", color: `#94593F`, sound: `./public/D-piano.wav` },
        { note: "E", color: `#8B814B`, sound: `./public/E-piano.wav` },
        { note: "F", color: `#426648`, sound: `./public/F-piano.wav` },
        { note: "G", color: `#494266`, sound: `./public/G-piano.wav` },
        { note: "A", color: `#5F4266`, sound: `./public/A-piano.wav` },
        { note: "B", color: `#8B4366`, sound: `./public/B-piano.wav` },
      ],
    };
  },
  methods: {
    pushInArr(n) {
      console.log(`HI world ${n}`);
      this.sequence.push(n);
      this.sequence.forEach((item) => {
        console.log(`${item.note}`);
      });
    },
    play: function () {
      console.log("play");
      myAudio.forEach(async (el, index) => {
        setTimeout(function () {
          el.play();
        }, index * 300);
      });
    },
    pause: function () {
      console.log("pause");
      myAudio.pause();
    },
  },
};
</script>

<style scoped>
#current {
  background-color: #424966;
  width: 1200px;
  height: 250px;
  margin: 10 10px;
  padding: 80px 30px 80px;
  letter-spacing: 60px;
}
header {
  display: flex;
}
body {
  display: flex;
}
h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 5rem;
  font-size: 80px;
  color: white;
  font-weight: 550;
}
#notes {
  display: flex;
  width: 1200px;
  height: 180px;
  position: fixed;
  left: 50px;
  top: 36vw;
  margin: 50px;
}
#btn {
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 40px;
  color: black;
  font-weight: 550;
  margin: 30px;
}
</style>
