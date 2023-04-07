<template>
  <button @click="$emit(`note-click`)"><slot></slot></button>
</template>

<script>
export default {
  name: "notes",
};
</script>

<style scoped>
button {
  cursor: pointer;
  display: block;
  text-align: center;
  height: 60px;
  padding: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: #eee8ef;
  margin: 3px;
  border: none;
  transition: 1s;
}
button:hover {
  filter: brightness(2);
}
</style>
