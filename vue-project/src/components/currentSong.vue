<template>
  <h2 id="currentSong"><slot></slot></h2>
</template>

<script>
export default {
  name: "currentSong",
};
</script>

<style scoped>
#currentSong {
}
h2 {
  display: inline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 50px;

  font-weight: 550;
  margin: 20px;
  padding: 15px;
  height: 60px;
}
</style>
