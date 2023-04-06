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
        { note: "C", color: `#8D4A4A`, sound: `./public/C2.mp3` },
        { note: "D", color: `#94593F`, sound: `./public/D2.mp3` },
        { note: "E", color: `#8B814B`, sound: `./public/E2.mp3` },
        { note: "F", color: `#426648`, sound: `./public/F2.mp3` },
        { note: "G", color: `#614896`, sound: `./public/G2.mp3` },
        { note: "A", color: `#864496`, sound: `./public/A2.mp3` },
        { note: "B", color: `#8B4366`, sound: `./public/B2.mp3` },
        { note: "C", color: `#8D4A4A`, sound: `./public/C3.mp3` },
        { note: "D", color: `#94593F`, sound: `./public/D3.mp3` },
        { note: "E", color: `#8B814B`, sound: `./public/E3.mp3` },
        { note: "F", color: `#426648`, sound: `./public/F3.mp3` },
        { note: "G", color: `#614896`, sound: `./public/G3.mp3` },
        { note: "A", color: `#864496`, sound: `./public/A3.mp3` },
        { note: "B", color: `#8B4366`, sound: `./public/B3.mp3` },
        { note: "C", color: `#8D4A4A`, sound: `./public/C4.mp3` },
        { note: "D", color: `#94593F`, sound: `./public/D4.mp3` },
        { note: "E", color: `#8B814B`, sound: `./public/E4.mp3` },
        { note: "F", color: `#426648`, sound: `./public/F4.mp3` },
        { note: "G", color: `#614896`, sound: `./public/G4.mp3` },
        { note: "A", color: `#864496`, sound: `./public/A4.mp3` },
        { note: "B", color: `#8B4366`, sound: `./public/B4.mp3` },
        { note: "C", color: `#8D4A4A`, sound: `./public/C5.mp3` },
        { note: "D", color: `#94593F`, sound: `./public/D5.mp3` },
        { note: "E", color: `#8B814B`, sound: `./public/E5.mp3` },
        { note: "F", color: `#426648`, sound: `./public/F5.mp3` },
        { note: "G", color: `#614896`, sound: `./public/G5.mp3` },
        { note: "A", color: `#864496`, sound: `./public/A5.mp3` },
        { note: "B", color: `#8B4366`, sound: `./public/B5.mp3` },
        { note: "C", color: `#8D4A4A`, sound: `./public/C6.mp3` },
        { note: "D", color: `#94593F`, sound: `./public/D6.mp3` },
        { note: "E", color: `#8B814B`, sound: `./public/E6.mp3` },
        { note: "F", color: `#426648`, sound: `./public/F6.mp3` },
        { note: "G", color: `#614896`, sound: `./public/G6.mp3` },
        { note: "A", color: `#864496`, sound: `./public/A6.mp3` },
        { note: "B", color: `#8B4366`, sound: `./public/B6.mp3` },
        { note: "C", color: `#8D4A4A`, sound: `./public/C7.mp3` },
        { note: "D", color: `#94593F`, sound: `./public/D7.mp3` },
        { note: "E", color: `#8B814B`, sound: `./public/E7.mp3` },
        { note: "F", color: `#426648`, sound: `./public/F7.mp3` },
        { note: "G", color: `#614896`, sound: `./public/G7.mp3` },
        { note: "A", color: `#864496`, sound: `./public/A7.mp3` },
        { note: "B", color: `#8B4366`, sound: `./public/B7.mp3` },
        { note: "¼", color: `#868686`, sound: `./public/quarterPause.mp4` },
        { note: "½", color: `#989699`, sound: `./public/halfPause.mp4` },
        { note: "1", color: `#A6A3A6`, sound: `./public/wholePause.mp4` },
      ],
      measure: ``,
    };
  },
  methods: {
    pushInArr(n) {
      this.sequence.push(n);
      this.myAudio.push(new Audio(n.sound));
      console.log(this.myAudio);
      /*       this.sequence.forEach((item) => {
        console.log(`${item.note}`);
      }); */
    },
    play: function () {
      console.log("play");
      this.myAudio.forEach(async (sound, index) => {
        setTimeout(function () {
          sound.play();
        }, index * 300);
      });
    },
    pause: function () {
      console.log("pause");
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
  letter-spacing: 20px;
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
  height: 180px;
  position: fixed;
  left: 10px;
  top: 36vw;
  margin: 50px;
}
</style>
