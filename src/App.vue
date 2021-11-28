<template>
  <header>
    <nav class="flex bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center flex-shrink-0">
        <div class="flex-col mt-3 md:mt-0" id="navbar-collapse">
          <Nava text="Main" :curr="tabName==='Main'" @click="this.tabName='Main'" />
          <Nava text="About" :curr="tabName==='About'" @click="this.tabName='About'" />
        </div>
      </div>
    </nav>
  </header>
  <component :is="tab" />
</template>
<script>
import Main from "./components/Main.vue";
import About from "@/components/About";
import Nava from "@/components/NavButton";
export default {
  name: "App",
  components: { Nava, Main, About },
  data() {
    return {
      tabName: "Main",
    };
  },

  computed: {
    tab() {
      if (this.tabName === "Main") return Main;
      else return About;
    },
  },
};
</script>
