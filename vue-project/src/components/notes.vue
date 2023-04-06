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
  padding: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 15px;
  color: #eee8ef;
  margin: 3px;
}
</style>
