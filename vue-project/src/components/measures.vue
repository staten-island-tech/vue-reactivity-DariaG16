<script setup></script>
<template>
  <section class="container">
    <h2>M e a s u r e s</h2>
    <div class="tempo">
      <button class="measures">
        <p>2/4</p>
      </button>
      <button class="measures">
        <p>3/4</p>
      </button>
      <button class="measures">
        <p>4/4</p>
      </button>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 50px;
  color: white;
  font-size: 30px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, serif;

  text-align: center;
  margin-left: 8rem;
}
.tempo {
  display: flex;
  flex-direction: row;
}
p,
h2 {
  margin: 0;
  font-weight: 1;
}
.measures {
  color: white;
  background-color: #463686;
  width: 300px;
  height: 50px;
  text-align: center;
  border-radius: 30px;
  margin: 15px;
  border: none;
  padding: 0;
  font: inherit;
}
</style>
