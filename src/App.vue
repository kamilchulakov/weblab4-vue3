<template>
  <nav class="bg-white py-2 md:py-4">
    <div class="container px-4 mx-auto md:flex md:items-center">
      <div
        class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
        id="navbar-collapse"
      >
        <a
          class="
            p-2
            font-display
            text-lg
            md:mx-2
            text-white
            rounded
            bg-blue-600
            hover:bg-blue-800
          "
          >Home</a
        >
        <a
          class="
            p-2
            font-display
            text-lg
            md:mx-2
            text-gray-600
            rounded
            hover:bg-gray-200 hover:text-gray-700
            transition-colors
            duration-300
          "
          >Lab</a
        >
        <a
          class="
            p-2
            font-display
            text-lg
            md:mx-2
            text-gray-600
            rounded
            hover:bg-gray-200 hover:text-gray-700
            transition-colors
            duration-300
          "
          >About</a
        >
      </div>
    </div>
  </nav>
  <div class="grid md:grid-flow-col grid-cols-4 grid-rows-1 gap-4">
    <div class="max-h-screen">
      <div class="my-8">
        <span class="font-display text-4xl font-bold text-blue-600">form</span>
      </div>
      <div class="bg-yellow-300 p-6 max-h-screen">
        <img
          class="mx-auto"
          src="https://img.tineye.com/flickr-images/?filepath=labs-flickr-public/images/82/4725096544_824f727b53_m.jpg&size=101&size=1000"
          alt="sunflower"
        />
        <div class="my-96"></div>
      </div>
    </div>
    <div class="max-h-screen bg-blue-600">
      <h1 v-for="el in list" :key="el">
        {{ el }}
      </h1>
    </div>
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
