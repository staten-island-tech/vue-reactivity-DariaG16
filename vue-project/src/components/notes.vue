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
  padding: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 40px;
  color: black;
  font-weight: 550;
  margin: 30px;
}
</style>
