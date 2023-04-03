<template>
  <div id="notes">
    <button
      v-for="note in notes"
      @click="
        pushInArr(note);
        $emit('displayNote');
      "
      :key="note"
      :style="`background-color: ` + note.color"
    >
      {{ note.note }}
    </button>
  </div>
</template>

<script>
export default {
  name: "notes",
  sequence: ["A"],
  data() {
    return {
      notes: [
        { note: "C", color: `#8D4A4A`, sound: `.\public\C-piano.wav` },
        { note: "D", color: `#94593F`, sound: `.\public\D-piano.wav` },
        { note: "E", color: `#8B814B`, sound: `.\public\E-piano.wav` },
        { note: "F", color: `#426648`, sound: `.\public\F-piano.wav` },
        { note: "G", color: `#494266`, sound: `.\public\G-piano.wav` },
        { note: "A", color: `#5F4266`, sound: `.\public\C-piano.wav` },
        { note: "B", color: `#8B4366`, sound: `.\public\C-piano.wav` },
      ],
      sequence: [],
    };
  },
  methods: {
    pushInArr(n) {
      this.sequence.push(n);
      this.sequence.forEach((note) => {
        console.log(`${note.note}`);
      });
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
