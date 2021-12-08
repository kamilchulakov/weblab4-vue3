<template>
  <header>
    <nav class="flex bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center flex-shrink-0">
        <div class="flex-col mt-3 md:mt-0" id="navbar-collapse">
          <Nava
            :text="t('main')"
            :curr="tabName === 'main'"
            @click="this.tabName = 'main'"
          />
          <Nava
            :text="t('about')"
            :curr="tabName === 'about'"
            @click="this.tabName = 'about'"
          />
          <Nava v-if="login"
                :text="t('userPage')"
                :curr="tabName === 'profile'"
                @click="this.tabName = 'profile'"
          />
          <Nava v-if="!login"
                :text="Login"
                :curr="true"
                @click="alert('login')"
          />
        </div>
      </div>
    </nav>
    <label class="font-display" v-if="false"
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
import { useI18n } from "vue-i18n";
import { provide } from "vue";
import Profile from "./components/Profile";
export default {
  name: "App",
  components: { Nava, Main, About },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    provide("i18nTeaGlobal", t);
    return { t };
  },
  data() {
    return {
      tabName: "main",
      devMode: false,
      login: true,
    };
  },

  computed: {
    tab() {
      if (this.tabName === "main") return Main;
      else if (this.tabName === "profile") return Profile;
      else return About;
    },
  },
};
</script>
