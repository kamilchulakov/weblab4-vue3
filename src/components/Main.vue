<template>
  <header>
    <nav class="flex bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center flex-shrink-0">
        <div
          class="flex-col mt-3 md:mt-0"
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
  </header>
  <div class="flex grid-cols-4 content-between flex-wrap min-w-full">
    <div class="flex-grow bg-yellow-300 min-h-full">
      <div class="text-center bg-white p-6">
        <span class="font-display text-4xl font-bold text-blue-600">form</span>
      </div>
    </div>
    <div class="min-h-full bg-blue-600 p-6 flex-grow">
      <form class="shadow-md rounded pt-6 pb-8 mb-4">
        <template v-if="errors.length">
          <b>Please fix this errors:</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </template>
        <span class="text-white font-body font-bold">Type X</span>
        <input
          v-model="formX"
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
          v-model="formY"
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
          v-model="formR"
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
        <button
          class="
            mr-8
            mb-1
            py-2
            px-4
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
          @click.stop="submitForm()"
        >
          Submit
        </button>
        <button
          class="
            py-2
            px-4
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
          @click.stop="list = []"
        >
          Clear
        </button>
      </form>
    </div>
    <div class="flex-grow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
          <th>X</th>
          <th>Y</th>
          <th>R</th>
          <th>Inside</th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="point in list" :key="point" class="text-center">
          <td>{{ point.x }}</td>
          <td>{{ point.y }}</td>
          <td>{{ point.r }}</td>
          <td>{{ point.inside }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="min-h-full border-8 min-w-max bg-gray-400">
      <svg class="" style="height: 300px; width: 300px">
        <circle r="5" cy="100" cx="100" v-for="point in list" :key="point" />
      </svg>
    </div>
  </div>
  <footer>
    <h1>Powered by Vue.js</h1>
  </footer>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      formX: undefined,
      formY: undefined,
      formR: undefined,
      errors: [],
      list: [
        { x: 1, y: 1, r: 1, inside: true },
        { x: 2, y: 1, r: 1, inside: false },
        { x: 2, y: 4, r: 1, inside: true },
        { x: 3, y: 1, r: 1, inside: true },
        { x: 4, y: 1, r: 1, inside: true },
      ],
    };
  },

  methods: {
    submitForm() {
      this.errors = [];
      if (!this.formX) this.errors.push("Type X");
      if (!this.formY) this.errors.push("Type Y");
      if (!this.formR) this.errors.push("Type R");
      if (this.errors.length === 0)
        this.list.push({
          x: this.formX,
          y: this.formY,
          r: this.formR,
          inside: this.isInside(),
        });
    },
    isInside() {
      return true;
    },
  },
};
</script>

