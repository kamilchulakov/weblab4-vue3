<template>
  <text :x="xForText" :y="yForText">{{ text }}</text>
  <line stroke="black" :x1="x1" :x2="x2" :y1="y1" :y2="y2"></line>
</template>

<script>
export default {
  name: "SvgLineWithText",
  data() {
    return {
      formattingNumber: 5,
    }
  },
  props: {
    x1: {
      type: Number,
      required: true,
    },
    x2: {
      type: Number,
      required: true,
    },
    y1: {
      type: Number,
      required: true,
    },
    y2: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
      default: "",
    },
  },

  computed: {
    xForText() {
      return this.x2 + this.formattingNumber;
    },
    yForText() {
      return this.y2 - this.formattingNumber;
    },
  },
};
</script>
