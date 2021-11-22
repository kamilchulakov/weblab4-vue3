<template>
  <h1>SHIT</h1>
  <div class="grid md:grid-flow-col grid-cols-4 grid-rows-1 gap-4">
    <div class="bg-yellow-300">1
      <h1 v-for="el in list" :key="el">
        {{ el }}
      </h1>
    </div>
    <div class="max-h-screen bg-blue-600">2</div>
    <div>3</div>
    <div class="max-h-screen border-8">4</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
