<template>
  <div id="currentSong">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "currentSong",
  props: {
    title: String,
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 50px;
  color: white;
  font-weight: 550;
}
</style>
