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

  width: 160px;
  font-size: 30px;
  margin: 20px;
  padding: 38px;
  text-align: center;
}
</style>
