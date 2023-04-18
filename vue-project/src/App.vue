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
          :title="note2"
          :class="currentClass"
          :style="[`color: ` + note2.color]"
        >
          {{ note2.note }}
        </currentSong>
      </div>
      <div id="playPause">
        <playBtn @btn-click="play(this.currentClass)">Play</playBtn>
        <playBtn @btn-click="undo">Undo</playBtn>
        <playBtn @btn-click="clearArr">Delete</playBtn>
      </div>
    </section>
    <div class="notes">
      <notes
        id="btn"
        v-for="item in notesArr"
        @note-click="pushInArr(item)"
        :key="item"
        :style="`background-color: ` + item.color"
      >
        {{ item.note }}
      </notes>
      <notes
        id="btn"
        v-for="item in blackKeys"
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
export default {
  name: "Home",
  components: {
    currentSong,
  },
  data() {
    return {
      currentClass: "not-played",
      myAudio: [],
      sequence: [],
      notesArr: [
        {
          note: "C",
          color: `#8D4A4A`,
          sound: `./C2.mp3`,
        },
        {
          note: "D",
          color: `#94593F`,
          sound: `./D2.mp3`,
        },
        {
          note: "E",
          color: `#8B814B`,
          sound: `./E2.mp3`,
        },
        {
          note: "F",
          color: `#426648`,
          sound: `./F2.mp3`,
        },
        {
          note: "G",
          color: `#614896`,
          sound: `./G2.mp3`,
        },
        {
          note: "A",
          color: `#864496`,
          sound: `./A2.mp3`,
        },
        {
          note: "B",
          color: `#8B4366`,
          sound: `./B2.mp3`,
        },
        {
          note: "C",
          color: `#8D4A4A`,
          sound: `./C3.mp3`,
        },
        {
          note: "D",
          color: `#94593F`,
          sound: `./D3.mp3`,
        },
        {
          note: "E",
          color: `#8B814B`,
          sound: `./E3.mp3`,
        },
        {
          note: "F",
          color: `#426648`,
          sound: `./F3.mp3`,
        },
        {
          note: "G",
          color: `#614896`,
          sound: `./G3.mp3`,
        },
        {
          note: "A",
          color: `#864496`,
          sound: `./A3.mp3`,
        },
        {
          note: "B",
          color: `#8B4366`,
          sound: `./B3.mp3`,
        },
        {
          note: "C",
          color: `#8D4A4A`,
          sound: `./C4.mp3`,
        },
        {
          note: "D",
          color: `#94593F`,
          sound: `./D4.mp3`,
        },
        {
          note: "E",
          color: `#8B814B`,
          sound: `./E4.mp3`,
        },
        {
          note: "F",
          color: `#426648`,
          sound: `./F4.mp3`,
        },
        {
          note: "G",
          color: `#614896`,
          sound: `./G4.mp3`,
        },
        {
          note: "A",
          color: `#864496`,
          sound: `./A4.mp3`,
        },
        {
          note: "B",
          color: `#8B4366`,
          sound: `./B4.mp3`,
        },
        {
          note: "C",
          color: `#8D4A4A`,
          sound: `./C5.mp3`,
        },
        {
          note: "D",
          color: `#94593F`,
          sound: `./D5.mp3`,
        },
        {
          note: "E",
          color: `#8B814B`,
          sound: `./E5.mp3`,
        },
        {
          note: "F",
          color: `#426648`,
          sound: `./F5.mp3`,
        },
        {
          note: "G",
          color: `#614896`,
          sound: `./G5.mp3`,
        },
        {
          note: "A",
          color: `#864496`,
          sound: `./A5.mp3`,
        },
        {
          note: "B",
          color: `#8B4366`,
          sound: `./B5.mp3`,
        },
        {
          note: "C",
          color: `#8D4A4A`,
          sound: `./C6.mp3`,
        },
        {
          note: "D",
          color: `#94593F`,
          sound: `./D6.mp3`,
        },
        {
          note: "E",
          color: `#8B814B`,
          sound: `./E6.mp3`,
        },
        {
          note: "F",
          color: `#426648`,
          sound: `./F6.mp3`,
        },
        {
          note: "G",
          color: `#614896`,
          sound: `./G6.mp3`,
        },
        {
          note: "A",
          color: `#864496`,
          sound: `./A6.mp3`,
        },
        {
          note: "B",
          color: `#8B4366`,
          sound: `./B6.mp3`,
        },
        {
          note: "C",
          color: `#8D4A4A`,
          sound: `./C7.mp3`,
        },
        {
          note: "D",
          color: `#94593F`,
          sound: `./D7.mp3`,
        },
        {
          note: "E",
          color: `#8B814B`,
          sound: `./E7.mp3`,
        },
        {
          note: "F",
          color: `#426648`,
          sound: `./F7.mp3`,
        },
        {
          note: "G",
          color: `#614896`,
          sound: `./G7.mp3`,
        },
        {
          note: "A",
          color: `#864496`,
          sound: `./A7.mp3`,
        },
        {
          note: "B",
          color: `#8B4366`,
          sound: `./B7.mp3`,
        },
        {
          note: "¼",
          color: `#868686`,
          sound: `./quarterPause.mp4`,
        },
        {
          note: "½",
          color: `#989699`,
          sound: `./halfPause.mp4`,
        },
        {
          note: "1",
          color: `#A6A3A6`,
          sound: `./wholePause.mp4`,
        },
      ],
      blackKeys: [
        {
          note: "Db",
          color: `#94593F90`,
          sound: `./Db2.mp3`,
        },
        {
          note: "Eb",
          color: `#8B814B90`,
          sound: `./Eb2.mp3`,
        },
        {
          note: "Gb",
          color: `#61489690`,
          sound: `./Gb2.mp3`,
        },
        {
          note: "Ab",
          color: `#86449690`,
          sound: `./Ab2.mp3`,
        },
        {
          note: "Bb",
          color: `#8B436690`,
          sound: `./Bb2.mp3`,
        },
        {
          note: "Db",
          color: `#94593F90`,
          sound: `./Db3.mp3`,
        },
        {
          note: "Eb",
          color: `#8B814B90`,
          sound: `./Eb3.mp3`,
        },
        {
          note: "Gb",
          color: `#61489690`,
          sound: `./Gb3.mp3`,
        },
        {
          note: "Ab",
          color: `#86449690`,
          sound: `./Ab3.mp3`,
        },
        {
          note: "Bb",
          color: `#8B436690`,
          sound: `./Bb3.mp3`,
        },
        {
          note: "Db",
          color: `#94593F90`,
          sound: `./Db4.mp3`,
        },
        {
          note: "Eb",
          color: `#8B814B90`,
          sound: `./Eb4.mp3`,
        },
        {
          note: "Gb",
          color: `#61489690`,
          sound: `./Gb4.mp3`,
        },
        {
          note: "Ab",
          color: `#86449690`,
          sound: `./Ab4.mp3`,
        },
        {
          note: "Bb",
          color: `#8B436690`,
          sound: `./Bb4.mp3`,
        },

        {
          note: "Db",
          color: `#94593F90`,
          sound: `./Db5.mp3`,
        },
        {
          note: "Eb",
          color: `#8B814B90`,
          sound: `./Eb5.mp3`,
        },
        {
          note: "Gb",
          color: `#61489690`,
          sound: `./Gb5.mp3`,
        },
        {
          note: "Ab",
          color: `#86449690`,
          sound: `./Ab5.mp3`,
        },
        {
          note: "Bb",
          color: `#8B436690`,
          sound: `./Bb5.mp3`,
        },
        {
          note: "Db",
          color: `#94593F90`,
          sound: `./Db6.mp3`,
        },
        {
          note: "Eb",
          color: `#8B814B90`,
          sound: `./Eb6.mp3`,
        },
        {
          note: "Gb",
          color: `#61489690`,
          sound: `./Gb6.mp3`,
        },
        {
          note: "Ab",
          color: `#86449690`,
          sound: `./Ab6.mp3`,
        },
        {
          note: "Bb",
          color: `#8B436690`,
          sound: `./Bb6.mp3`,
        },
        {
          note: "Db",
          color: `#94593F90`,
          sound: `./Db7.mp3`,
        },
        {
          note: "Eb",
          color: `#8B814B90`,
          sound: `./Eb7.mp3`,
        },
        {
          note: "Gb",
          color: `#61489690`,
          sound: `./Gb7.mp3`,
        },
        {
          note: "Ab",
          color: `#86449690`,
          sound: `./Ab7.mp3`,
        },
        {
          note: "Bb",
          color: `#8B436690`,
          sound: `./Bb7.mp3`,
        },
      ],
      measure: `300`,
    };
  },
  methods: {
    pushInArr(n) {
      this.sequence.push(n);
      this.myAudio.push(new Audio(n.sound));
      let noteSound = new Audio(n.sound);
      noteSound.play();
    },
    play: function (Cur) {
      this.myAudio.forEach(async (sound, index) => {
        setTimeout(function () {
          sound.play();
          Cur = "played-note";
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
.not-played {
  background-color: #424966;
}
.played-note {
  background-color: #ffffff70;
}
#current {
  display: flex;
  background-color: #424966;
  width: 1400px;
  margin: 10 10px;
  padding: 80px 30px;
  flex-wrap: wrap;
}
#middle {
  display: flex;
}
.notes {
  display: flex;
  height: 180px;
  width: 1788px;
  justify-content: space-between;
  left: 10px;
  bottom: 50px;
  margin: 50px;
  flex-wrap: wrap;
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
