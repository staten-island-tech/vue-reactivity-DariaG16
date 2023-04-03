<script setup>
import measures from "./components/measures.vue";
import currentSong from "./components/currentSong.vue";
import savedSongs from "./components/savedSongs.vue";
import notes from "./components/notes.vue";
</script>

<template>
  <header>
    <h1>Make a Song</h1>
    <measures />
  </header>
  <body>
    <currentSong
      v-for="note in sequence"
      key="note"
      v-bind:title="note"
      :style="`color: ` + note.color"
    ></currentSong>
    <savedSongs />
    <notes
      id="notes"
      v-for="note in notes"
      key="note"
      @click="pushInArr(note)"
      :style="`background-color: ` + note.color"
    />
  </body>
</template>

<script>
export default {
  name: "notes",
  sequence: ["A"],
  data() {
    return {
      notes: [
        { note: "C", color: `#8D4A4A`, sound: `./public/C-piano.wav` },
        { note: "D", color: `#94593F`, sound: `.\public\D-piano.wav` },
        { note: "E", color: `#8B814B`, sound: `.\public\E-piano.wav` },
        { note: "F", color: `#426648`, sound: `.\public\F-piano.wav` },
        { note: "G", color: `#494266`, sound: `.\public\G-piano.wav` },
        { note: "A", color: `#5F4266`, sound: `.\public\C-piano.wav` },
        { note: "B", color: `#8B4366`, sound: `.\public\C-piano.wav` },
      ],
      sequence: [
        { note: "C", color: `#8D4A4A`, sound: `.\public\C-piano.wav` },
        { note: "D", color: `#94593F`, sound: `.\public\D-piano.wav` },
        { note: "E", color: `#8B814B`, sound: `.\public\E-piano.wav` },
        { note: "F", color: `#426648`, sound: `.\public\F-piano.wav` },
        { note: "G", color: `#494266`, sound: `.\public\G-piano.wav` },
        { note: "A", color: `#5F4266`, sound: `.\public\C-piano.wav` },
        { note: "B", color: `#8B4366`, sound: `.\public\C-piano.wav` },
      ],
    };
  },
  methods: {
    pushInArr(n) {
      console.log(n);
      this.sequence.push(n);
      this.sequence.forEach((note) => {
        console.log(`${note.note}`);
      });
    },
  },
};
</script>

<style scoped>
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
#notes {
  align-self: flex-end;
}
</style>
