<template>
  <svg class="" :height="svgSize + 'px'" :width="svgSize + 'px'">
    // To-Do: refactor this to computed array join
    <polygon
      fill="#feab6b"
      fill-opacity="1"
      :points="
        svgHalf +
        ',' +
        (svgHalf + svgR) +
        ' ' +
        (svgHalf + svgR * 2) +
        ',' +
        svgHalf +
        ' ' +
        svgHalf +
        ',' +
        svgHalf
      "
    />
    <rect
      fill="#feab6b"
      fill-opacity="1"
      :x="svgHalf"
      :y="svgR"
      :height="svgR * 2"
      :width="svgR * 2"
    />
    <g :transform="'translate(' + svgHalf + ',' + svgHalf + ')'">
      <path d="M0 0 -50 0 A50 50 0 0 1 0 -50" fill="#feab6b" />
    </g>
    <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
    <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>

    <SvgLineWithText :x1="250" :x2="250" :y1="148" :y2="152" text="R" />
    <SvgLineWithText :x1="200" :x2="200" :y1="148" :y2="152" text="R/2" />
    <SvgLineWithText :x1="100" :x2="100" :y1="148" :y2="152" text="-R/2" />
    <SvgLineWithText :x1="50" :x2="50" :y1="148" :y2="152" text="-R" />
    <SvgLineWithText :x1="148" :x2="152" :y1="50" :y2="50" text="R" />
    <SvgLineWithText :x1="148" :x2="152" :y1="100" :y2="100" text="R/2" />
    <SvgLineWithText text="-R/2" :y2="200" :y1="200" :x2="152" :x1="148" />
    <SvgLineWithText :x1="148" :x2="152" :y1="250" :y2="250" text="-R" />

    <circle r="2" stroke="black" cx="150" cy="150"></circle>

    <polygon
      fill="black"
      points="300,150 295,145 295,155"
      stroke="black"
    ></polygon>
    <polygon
      fill="black"
      points="150,0  145,5   155,5"
      stroke="black"
    ></polygon>
    <slot></slot>
  </svg>
</template>

<script>
import SvgLineWithText from "@/components/svg/SvgLineWithText";
export default {
  name: "SvgField",
  components: { SvgLineWithText },
  props: {
    svgSize: {
      type: Number,
      required: true,
      default: 300,
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
};
</script>
