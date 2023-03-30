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
    <currentSong title="t" />
    <savedSongs />
    <notes id="notes" @click="displayNote" />
  </body>
</template>

<script>
function displayNote() {}
components: {
  notes;
} //export default nsmm
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
