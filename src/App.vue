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
      <div class="my-8 text-center">
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
    <div class="max-h-screen bg-blue-600 p-6">
      <form class="shadow-md rounded pt-6 pb-8 mb-4 bg-blue-600">
        <span class="text-white font-body font-bold">Type X</span>
        <input
          class="
            mb-4
            block
            w-full
            text-center
            border-4 border-gray-300
            text-gray-900
            focus:outline-none focus:ring-gray-500 focus:border-gray-500
            font-display font-bold
            text-lg
            rounded-md
          "
        />
        <span class="text-white font-body font-bold">Type Y</span>
        <input
          class="
            mb-4
            block
            w-full
            text-center
            border-4 border-gray-300
            text-gray-900
            focus:outline-none focus:ring-gray-500 focus:border-gray-500
            font-display font-bold
            text-lg
            rounded-md
          "
        />
        <span class="text-white font-body font-bold">Type R</span>
        <input
          class="
            mb-4
            block
            w-full
            text-center
            border-4 border-gray-300
            text-gray-900
            focus:outline-none focus:ring-gray-500 focus:border-gray-500
            font-display font-bold
            text-lg
            rounded-md
          "
        />
        <button class="inline-flex items-center py-2 px-4
            border border-transparent
            shadow-sm
            text-sm
            leading-4
            font-display font-bold
            text-xl
            rounded-full
            text-white
            bg-gray-600
            hover:bg-gray-700
            transition-colors
            duration-300
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-500
          "
          type="button"
        >
          Submit
        </button>
      </form>
      <img
        class="mx-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D1%81%D1%83%D0%BF%D1%80%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82._1915._%D0%93%D0%A2%D0%93.png"
        alt="malevich"
      />
    </div>
    <div>
      <h1 v-for="el in list" :key="el">
        {{ el }}
      </h1>
    </div>
    <div class="max-h-screen border-8">
      <img
        class="mx-auto"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20200525212003/About-Origin.png"
        alt="malevich"
      />
    </div>
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

