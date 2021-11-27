<template>
  <component :is="tab"/>
</template>
<script>
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: { Main },
  data() {
    return {
      tab: Main,
    }
  }
};
</script>
