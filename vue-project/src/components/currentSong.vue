<template>
  <div id="currentSong">
    <h3 v-for="note in sequence" :key="note">
      {{ note.note }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "current",
  data() {
    return {
      sequence: [
        {
          note: "I'm so sorry",
          color: `#8D4A4A`,
          sound: `.\public\C-piano.wav`,
        },
        {
          note: "This isn't done yet:(((",
          color: `#94593F`,
          sound: `.\public\D-piano.wav`,
        },
        { note: "E", color: `#8B814B`, sound: `.\public\E-piano.wav` },
        { note: "F", color: `#426648`, sound: `.\public\F-piano.wav` },
        { note: "G", color: `#494266`, sound: `.\public\G-piano.wav` },
        { note: "A", color: `#5F4266`, sound: `.\public\C-piano.wav` },
        { note: "B", color: `#8B4366`, sound: `.\public\C-piano.wav` },
      ],
    };
  },
};
</script>

<style scoped>
#currentSong {
  background-color: #424966;
  width: 1200px;
  height: 250px;
  margin: 10 10px;
  padding: 80px 30px 80px;
  letter-spacing: 60px;
}
h3 {
  display: inline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 50px;
  color: white;
  font-weight: 550;
}
</style>
