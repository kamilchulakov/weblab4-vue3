<template class="bg-not-white">
  <header>
    <nav class="flex bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center flex-shrink-0">
        <div class="flex-col mt-3 md:mt-0" id="navbar-collapse">
          <a
            class="
              p-2
              font-display
              text-lg
              md:mx-2
              text-white
              rounded
              bg-empty-block
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
  <div class="flex grid-cols-4 content-between font-display flex-wrap min-w-full">
    <div class="flex-grow bg-empty-block min-h-full">
      <div class="text-center bg-white p-6">
        <span class="text-4xl font-bold text-black">form</span>
      </div>
    </div>
    <div class="min-h-full bg-form-color p-6 flex-grow">
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
            shadow-md
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
            shadow-md
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
            shadow-md
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
            shadow-md
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
    <div class="flex-grow bg-table-color" style="min-width: 120px">
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
    <div class="min-h-full border-8 min-w-max">
      <SvgField onresize="console.log(this.sizeX)">
        <circle r="5" cy="100" cx="100" v-for="point in list" :key="point" />
      </SvgField>
    </div>
  </div>
  <footer>
    <h1>Powered by Vue.js</h1>
  </footer>
</template>

<script>
import SvgField from "@/components/SvgField";
export default {
  name: "Main",
  components: { SvgField },
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
    validateByBorders(num, numName, a, b) {
      if (!num) this.errors.push(`Type ${numName}`);
      else {
        if (isNaN(num)) this.errors.push(`${numName} must be number`);
        else if (num > b || num < a) {
          this.errors.push(`${numName} should be in [${a}, ${b}]`);
        }
      }
    },
    submitForm() {
      this.errors = [];
      // Text (-5 ... 5) для координаты по оси X, Text (-3 ... 3) для координаты по оси Y, и Text (-5 ... 5) для задания радиуса области.
      this.validateByBorders(this.formX, "X", -5, 5);
      this.validateByBorders(this.formY, "Y", -3, 3);
      this.validateByBorders(this.formR, "R", -5, 5);
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
  watch: {
    formX() {
      if (this.formX.includes(",")) {
        this.formX = this.formX.replace(",", ".");
      }
    },
    formY() {
      if (this.formY.includes(",")) {
        this.formY = this.formY.replace(",", ".");
      }
    },
    formR() {
      if (this.formR.includes(",")) {
        this.formR = this.formR.replace(",", ".");
      }
    }
  }
};
</script>
