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
  height: 10%;
  font-size: 40px;
  margin: 20px;
  padding: 40px;
}
</style>
