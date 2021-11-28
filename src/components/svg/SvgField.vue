<template>
  <svg class="border-8" :height="svgSize + 'px'" :width="svgSize + 'px'">
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
      <path :d="'M0 0 -'+svgR+' 0 A'+svgR+' '+svgR+' 0 0 1 0 -'+svgR" fill="#feab6b" />
    </g>
    <line stroke="black" :x1="0" :x2="svgSize" :y1="svgHalf" :y2="svgHalf"></line>
    <line stroke="black" :x1="svgHalf" :x2="svgHalf" :y1="0" :y2="svgSize"></line>

    <SvgLineWithText :x1="svgSize-svgR" :x2="svgSize-svgR" :y1="svgHalf-2" :y2="svgHalf+2" text="R" />
    <SvgLineWithText :x1="svgSize-2*svgR" :x2="svgSize-2*svgR" :y1="svgHalf-2" :y2="svgHalf+2" text="R/2" />
    <SvgLineWithText :x1="2 * svgR" :x2="2 * svgR" :y1="svgHalf-2" :y2="svgHalf-2" text="-R/2" />
    <SvgLineWithText :x1="svgR" :x2="svgR" :y1="svgHalf-2" :y2="svgHalf+2" text="-R" />

    <SvgLineWithText :x1="svgHalf-2" :x2="svgHalf+2" :y1="svgR" :y2="svgR" text="R" />
    <SvgLineWithText :x1="svgHalf-2" :x2="svgHalf+2" :y1="2 * svgR" :y2="2 * svgR" text="R/2" />
    <SvgLineWithText :x2="svgHalf+2" :x1="svgHalf-2" text="-R/2" :y2="svgSize-2*svgR" :y1="svgSize-2*svgR" />
    <SvgLineWithText :x1="svgHalf-2" :x2="svgHalf+2" :y1="svgSize-svgR" :y2="svgSize-svgR" text="-R" />

    <circle r="2" stroke="black" :cx="svgHalf" :cy="svgHalf"/>

    <polygon
      fill="black"
      :points="
        svgSize +
        ',' +
        svgHalf +
        ' ' +
        (svgSize - 5) +
        ',' +
        (svgHalf - 5) +
        ' ' +
        (svgSize - 5) +
        ',' +
        (svgHalf + 5)
      "
      stroke="black"
    />
    <polygon
      fill="black"
      :points="
        svgHalf +
        ',' +
        0 +
        ' ' +
        (svgHalf - 5) +
        ',' +
        5 +
        ' ' +
        (svgHalf + 5) +
        ',' +
        5
      "
      stroke="black"
    />
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
