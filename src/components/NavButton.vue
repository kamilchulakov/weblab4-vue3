<template>
  <button
    class="
      p-2
      font-display
      text-lg
      md:mx-2
      rounded
      transition-colors
      duration-300
    "
    :class="{
      'text-gray-600': !curr,
      'bg-empty-block': curr,
      'hover:bg-gray-200 hover:text-gray-700': !curr,
      'hover:bg-table-color': curr,
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Nava",
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
    curr: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>
