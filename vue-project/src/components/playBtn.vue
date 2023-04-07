<template>
  <button @click="$emit(`btn-click`)"><slot></slot></button>
</template>
<script>
export default {
  name: "playBtn",
};
</script>
<style scoped>
button {
  background-color: rgb(100, 100, 172);
  color: white;
  width: 160px;
  font-size: 30px;
  margin: 20px;
  padding: 38px;
  text-align: center;
  transition: 0.5s;
}
button:hover {
  background-color: rgb(135, 135, 235);
}
</style>
