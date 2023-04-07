<script setup></script>
<template>
  <button @click="$emit(`msr-click`)"><slot></slot></button>
</template>

<style scoped>
button {
  color: white;
  background-color: #463686;
  width: 300px;
  height: 50px;
  text-align: center;
  border-radius: 30px;
  margin: 0px 15px;
  padding: 0;
  font: inherit;
  transition: 1s;
}
button:hover {
  background-color: rgba(162, 141, 255, 0.788);
}
</style>
