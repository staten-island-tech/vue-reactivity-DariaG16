<template>
  <div id="notes">
    <button
      v-for="note in notesArr"
      :key="note"
      @click="
        pushInArr(note);
        $emit('displayNote');
      "
      :style="`background-color: ` + note.color"
    >
      {{ note.note }}
    </button>
  </div>
</template>

<script>
export default {
  name: "notes",
  data() {
    return {
      notesArr: [
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
      notes.sequence.push(n);
      console.log(`${n.note} hi`);
    },
  },
};
</script>

<style scoped>
#notes {
  display: flex;
  width: 1200px;
  height: 180px;
  position: absolute;
  left: 50px;
  top: 36vw;
  margin: 50px;
}
button {
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 40px;
  color: white;
  font-weight: 550;
  margin: 30px;
}
h3:hover {
  background-color: white;
}
</style>
