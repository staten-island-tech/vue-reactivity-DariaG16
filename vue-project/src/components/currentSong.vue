<template>
  <h2 id="currentSong"><slot></slot></h2>
</template>

<script>
export default {
  name: "currentSong",
};
</script>

<style scoped>
h2 {
  display: inline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 60px;
  font-weight: 550;
  margin: 5px;
  padding: 0px 30px;
  height: 60px;
  font-weight: bold;
  filter: drop-shadow(16px 10px 20px #180724);
  filter: brightness(2);
  filter: contrast(2);
}
</style>
