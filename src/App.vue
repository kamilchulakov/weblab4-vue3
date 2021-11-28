<template>
  <header>
    <nav class="flex bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center flex-shrink-0">
        <div class="flex-col mt-3 md:mt-0" id="navbar-collapse">
          <Nava
            text="Main"
            :curr="tabName === 'Main'"
            @click="this.tabName = 'Main'"
          />
          <Nava
            text="About"
            :curr="tabName === 'About'"
            @click="this.tabName = 'About'"
          />
        </div>
      </div>
    </nav>
    <label class="font-display"
      ><input
        type="checkbox"
        class="
          m-6
          text-empty-text-color
          w-8
          h-8
          mr-2
          focus:ring-0
          border-2 border-gray-300
          rounded
        "
        v-model="devMode"
      />
      Developer Mode
    </label>
  </header>
  <component :is="tab" :devMode="devMode" />
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
      devMode: false,
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
