<template class="bg-not-white">
  <div
    class="flex grid-cols-4 content-between font-display flex-wrap min-w-full"
  >
    <div class="flex-grow bg-empty-block min-h-full">
      <div class="text-center bg-white p-6">
        <span class="text-4xl font-bold text-black">{{
          i18nTeaGlobal("form")
        }}</span>
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
        <span class="text-white font-body font-bold"
          >{{ i18nTeaGlobal("type") }} X</span
        >
        <input
          v-model.trim="formX"
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
        <span class="text-white font-body font-bold"
          >{{ i18nTeaGlobal("type") }} Y</span
        >
        <input
          v-model.trim="formY"
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
        <span class="text-white font-body font-bold"
          >{{ i18nTeaGlobal("type") }} R</span
        >
        <input
          v-model.trim="formR"
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
          {{ i18nTeaGlobal("submit") }}
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
          @click.stop="clear"
        >
          {{ i18nTeaGlobal("clear") }}
        </button>
      </form>
    </div>
    <div class="min-h-full min-w-max">
      <SvgField
        :svg-size="svgSize"
        @reset="console.log(this.sizeX)"
        @click="processSvgClick"
      >
        <template v-if="formR">
          <circle
            r="3"
            :cy="this.calcY(point.y)"
            :cx="calcX(point.x)"
            v-for="point in list"
            :key="point"
            :class="{
              'fill-empty-block': point.inside,
              'fill-black': !point.inside,
            }"
          />
        </template>
      </SvgField>
    </div>
    <div
      class="flex-grow bg-table-color md:w-1/3"
      style="min-width: 150px"
      v-if="list.length > 0"
    >
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>{{ i18nTeaGlobal("inside") }}</th>
            <th> Exec time</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(point, idx) in list"
            :key="idx"
            class="text-center"
            :class="{ 'bg-empty-block': idx === list.length - 1 }"
          >
            <td>{{ point.x }}</td>
            <td>{{ point.y }}</td>
            <td>{{ point.r }}</td>
            <td>{{ i18nTeaGlobal(point.inside ? "true" : "false") }}</td>
            <td>{{ point.execTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <footer>
    <h1>{{ i18nTeaGlobal("powered") }}</h1>
  </footer>
</template>

<script>
import SvgField from "@/components/svg/SvgField";
import { addResult, clearResults, getResults } from "@/api";
export default {
  name: "Main",
  components: { SvgField },
  inject: {
    i18nTeaGlobal: {
      type: Function,
    },
  },
  data() {
    return {
      formX: undefined,
      formY: undefined,
      formR: undefined,
      svgSize: 0,
      errors: [],
      list: [
        // { x: 1, y: 1, r: 1, inside: true },
        // { x: 2, y: 1, r: 1, inside: false },
        // { x: 2, y: 4, r: 1, inside: true },
        // { x: 3, y: 1, r: 1, inside: true },
        // { x: 4, y: 1, r: 1, inside: true },
      ],
    };
  },


  props: {
    devMode: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  async created() {
    await this.getAndSet();
  },

  mounted() {
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);

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
        this.pushResult(this.formX, this.formY, this.formR);
    },

    calcX(x) {
      return ((x * 2) / this.formR) * this.svgR + this.svgHalf;
    },

    calcY(y) {
      return this.svgHalf - ((y * 2) / this.formR) * this.svgR;
    },

    async processSvgClick(event) {
      this.errors = [];
      let rowX = event.offsetX;
      let rowY = event.offsetY;
      let X = (
        ((this.formR / this.svgR) * (this.svgHalf - rowX) * -1) /
        2
      ).toFixed(3);
      let Y = (((this.formR / this.svgR) * (this.svgHalf - rowY)) / 2).toFixed(
        3
      );
      // Text (-5 ... 5) для координаты по оси X, Text (-3 ... 3) для координаты по оси Y, и Text (-5 ... 5) для задания радиуса области.
      this.validateByBorders(X, "X", -5, 5);
      this.validateByBorders(Y, "Y", -3, 3);
      this.validateByBorders(this.formR, "R", -5, 5);
      if (this.errors.length === 0) {
        await this.pushResult(X, Y, this.formR);
      }
    },

    async getAndSet() {
      const servedResults = await getResults();
      Array.from(servedResults).forEach((res) =>
        this.list.push({
          x: res["x"],
          y: res["y"],
          r: res["r"],
          inside: this.hotFix(res["x"], res["y"], res["r"], res["inside"]),
          execTime: res["executionMs"],
        })
      );
    },

    hotFix(x, y, r, inside) {
      if ((x >= 0 && y >= 0) || x <= 0) return inside;
      console.log(-Math.abs(r) + x);
      return x >= 0 && y <= 0 && 2 * y >= -Math.abs(r) + x;
    },

    onResize() {
      if (window.innerWidth > 1300) this.svgSize = 400;
      else {
        // if (window.innerWidth > 800) this.svgSize = 350;
        //else
        this.svgSize = 300;
      }
    },

    clear() {
      clearResults();
      this.list = [];
    },

    async pushResult(x, y, r) {
      let res = await addResult({ x: x, y: y, r: r });
      this.list.push({
        x: res["x"],
        y: res["y"],
        r: res["r"],
        inside: this.hotFix(res["x"], res["y"], res["r"], res["inside"]),
        execTime: res["executionMs"],
      });
    },

    isInRect(data, r) {
      return data.x <= r && data.y <= r && data.x >= 0 && data.y >= 0;
    },

    isInPoly(data, r) {
      if (r < 0) r = r * -1;
      return data.x >= 0 && data.y <= 0 && 2 * data.y >= -1 * r + data.x;
    },

    isInCirc(data, r) {
      return (
        data.x <= 0 && data.y >= 0 && data.x ** 2 + data.y ** 2 <= (r * r) / 4
      );
    },

    insideNewR(x, y, r) {
      return (
        this.isInRect({ x: x, y: y, r: r }, r) ||
        this.isInCirc({ x: x, y: y, r: r }, r) ||
        this.isInPoly({ x: x, y: y, r: r }, r)
      );
    },
  },
  computed: {
    svgR() {
      return this.svgSize / 6;
    },
    svgHalf() {
      return this.svgSize / 2;
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
      if (!this.devMode) {
        if (this.formR > 5) {
          this.formR = this.formR[0];
        }
        if (this.formR < -5) {
          this.formR = this.formR[0];
        }
      }
      this.validateByBorders(this.formR, "R", -5, 5);
      if (this.errors.length === 0) {
        const newList = [];
        this.list.forEach((res) =>
          newList.push({
            x: res["x"],
            y: res["y"],
            r: res["r"],
            inside: this.insideNewR(res["x"], res["y"], this.formR),
            execTime: res["execTime"],
          })
        );
        this.list = newList;
      }
      this.errors = [];
    },
  },
};
</script>
