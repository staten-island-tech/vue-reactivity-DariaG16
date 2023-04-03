<template>
  <div id="notes">
    <button @click="returnValue()"></button>
  </div>
</template>

<script>
export default {
  methods: {
    returnValue: () => {
      this.$emit("click", "hi");
    },
  },
};
</script>

<style scoped>
#notes {
  display: flex;
  width: 1200px;
  height: 180px;
  position: absolute;
  left: 50px;
  top: 36vw;
  margin: 50px;
}
button {
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 40px;
  color: white;
  font-weight: 550;
  margin: 30px;
}
h3:hover {
  background-color: white;
}
</style>
