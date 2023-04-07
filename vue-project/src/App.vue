<script setup>
import measures from "./components/measures.vue";
import currentSong from "./components/currentSong.vue";
import notes from "./components/notes.vue";
import playBtn from "./components/playBtn.vue";
</script>

<template>
  <header>
    <h1>Make a Song</h1>
    <section id="container">
      <h2>T e m p o</h2>
      <div id="tempo">
        <measures @msr-click="changeMsr1">largo</measures>
        <measures @msr-click="changeMsr2">andante</measures>
        <measures @msr-click="changeMsr3">vivace</measures>
      </div>
    </section>
  </header>

  <body>
    <section id="middle">
      <div id="current">
        <currentSong
          v-for="note2 in sequence"
          :key="note2"
          v-bind:title="note2"
          :style="[`background-color: ` + note2.bacCo, `color: ` + note2.color]"
        >
          {{ note2.note }}
        </currentSong>
      </div>
      <div id="playPause">
        <playBtn @btn-click="play">Play</playBtn>
        <playBtn @btn-click="undo">Undo</playBtn>
        <playBtn @btn-click="clearArr">Delete</playBtn>
      </div>
    </section>
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
//myAudio.src = notes.sound[0]; //how to access sequence from here
export default {
  name: "Home",
  components: {
    currentSong,
  },
  data() {
    return {
      myAudio: [],
      sequence: [],
      notesArr: [
        { note: "C", color: `#8D4A4A`, bacCo: `#3B2F51`, sound: `./C2.mp3` },
        { note: "D", color: `#94593F`, bacCo: `#3B2F51`, sound: `./D2.mp3` },
        { note: "E", color: `#8B814B`, bacCo: `#3B2F51`, sound: `./E2.mp3` },
        { note: "F", color: `#426648`, bacCo: `#3B2F51`, sound: `./F2.mp3` },
        { note: "G", color: `#614896`, bacCo: `#3B2F51`, sound: `./G2.mp3` },
        { note: "A", color: `#864496`, bacCo: `#3B2F51`, sound: `./A2.mp3` },
        { note: "B", color: `#8B4366`, bacCo: `#3B2F51`, sound: `./B2.mp3` },
        { note: "C", color: `#8D4A4A`, bacCo: `#3B2F51`, sound: `./C3.mp3` },
        { note: "D", color: `#94593F`, bacCo: `#3B2F51`, sound: `./D3.mp3` },
        { note: "E", color: `#8B814B`, bacCo: `#3B2F51`, sound: `./E3.mp3` },
        { note: "F", color: `#426648`, bacCo: `#3B2F51`, sound: `./F3.mp3` },
        { note: "G", color: `#614896`, bacCo: `#3B2F51`, sound: `./G3.mp3` },
        { note: "A", color: `#864496`, bacCo: `#3B2F51`, sound: `./A3.mp3` },
        { note: "B", color: `#8B4366`, bacCo: `#3B2F51`, sound: `./B3.mp3` },
        { note: "C", color: `#8D4A4A`, bacCo: `#3B2F51`, sound: `./C4.mp3` },
        { note: "D", color: `#94593F`, bacCo: `#3B2F51`, sound: `./D4.mp3` },
        { note: "E", color: `#8B814B`, bacCo: `#3B2F51`, sound: `./E4.mp3` },
        { note: "F", color: `#426648`, bacCo: `#3B2F51`, sound: `./F4.mp3` },
        { note: "G", color: `#614896`, bacCo: `#3B2F51`, sound: `./G4.mp3` },
        { note: "A", color: `#864496`, bacCo: `#3B2F51`, sound: `./A4.mp3` },
        { note: "B", color: `#8B4366`, bacCo: `#3B2F51`, sound: `./B4.mp3` },
        { note: "C", color: `#8D4A4A`, bacCo: `#3B2F51`, sound: `./C5.mp3` },
        { note: "D", color: `#94593F`, bacCo: `#3B2F51`, sound: `./D5.mp3` },
        { note: "E", color: `#8B814B`, bacCo: `#3B2F51`, sound: `./E5.mp3` },
        { note: "F", color: `#426648`, bacCo: `#3B2F51`, sound: `./F5.mp3` },
        { note: "G", color: `#614896`, bacCo: `#3B2F51`, sound: `./G5.mp3` },
        { note: "A", color: `#864496`, bacCo: `#3B2F51`, sound: `./A5.mp3` },
        { note: "B", color: `#8B4366`, bacCo: `#3B2F51`, sound: `./B5.mp3` },
        { note: "C", color: `#8D4A4A`, bacCo: `#3B2F51`, sound: `./C6.mp3` },
        { note: "D", color: `#94593F`, bacCo: `#3B2F51`, sound: `./D6.mp3` },
        { note: "E", color: `#8B814B`, bacCo: `#3B2F51`, sound: `./E6.mp3` },
        { note: "F", color: `#426648`, bacCo: `#3B2F51`, sound: `./F6.mp3` },
        { note: "G", color: `#614896`, bacCo: `#3B2F51`, sound: `./G6.mp3` },
        { note: "A", color: `#864496`, bacCo: `#3B2F51`, sound: `./A6.mp3` },
        { note: "B", color: `#8B4366`, bacCo: `#3B2F51`, sound: `./B6.mp3` },
        { note: "C", color: `#8D4A4A`, bacCo: `#3B2F51`, sound: `./C7.mp3` },
        { note: "D", color: `#94593F`, bacCo: `#3B2F51`, sound: `./D7.mp3` },
        { note: "E", color: `#8B814B`, bacCo: `#3B2F51`, sound: `./E7.mp3` },
        { note: "F", color: `#426648`, bacCo: `#3B2F51`, sound: `./F7.mp3` },
        { note: "G", color: `#614896`, bacCo: `#3B2F51`, sound: `./G7.mp3` },
        { note: "A", color: `#864496`, bacCo: `#3B2F51`, sound: `./A7.mp3` },
        { note: "B", color: `#8B4366`, bacCo: `#3B2F51`, sound: `./B7.mp3` },
        {
          note: "¼",
          color: `#868686`,
          bacCo: `#3B2F51`,
          sound: `./quarterPause.mp4`,
        },
        {
          note: "½",
          color: `#989699`,
          bacCo: `#3B2F51`,
          sound: `./halfPause.mp4`,
        },
        {
          note: "1",
          color: `#A6A3A6`,
          bacCo: `#3B2F51`,
          sound: `./wholePause.mp4`,
        },
      ],
      measure: `300`,
    };
  },
  methods: {
    pushInArr(n) {
      this.sequence.push(n);
      this.myAudio.push(new Audio(n.sound));
      console.log(this.myAudio);
    },
    play: function () {
      this.myAudio.forEach(async (sound, index) => {
        setTimeout(function () {
          sound.play();
        }, index * this.measure);
      });
      this.sequence.forEach(async (note, index) => {
        setTimeout(function () {
          note.bacCo = "#ADD8E6";
        }, index * this.measure);
      });
    },

    undo: function () {
      this.myAudio.pop();
      this.sequence.pop();
    },
    clearArr: function () {
      this.myAudio.length = 0;
      this.sequence.length = 0;
    },
    changeMsr1: function () {
      this.measure = `900`;
    },
    changeMsr2: function () {
      this.measure = `400`;
    },
    changeMsr3: function () {
      this.measure = `300`;
    },
  },
};
</script>

<style scoped>
#current {
  display: flex;
  background-color: #424966;
  width: 1400px;
  margin: 10 10px;
  padding: 80px 30px 80px;
  flex-wrap: wrap;
}
header {
  display: flex;
}
body {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 5rem;
  font-size: 80px;
  color: white;
  font-weight: 550;
}
#middle {
  display: flex;
}
#notes {
  display: flex;
  height: 180px;
  justify-content: space-between;
  left: 10px;
  bottom: 50px;
  margin: 50px;
}
#container {
  margin: 50px;
  color: white;
  font-size: 30px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, serif;
  text-align: center;
  margin-left: 8rem;
}
#tempo {
  display: flex;
  flex-direction: row;
}
#playPause {
  justify-content: center;
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
