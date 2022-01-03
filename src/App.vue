<template>
  <header>
    <nav class="flex bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center flex-shrink-0">
        <div class="flex-col mt-3 md:mt-0" id="navbar-collapse">
          <Nava
            :text="$t('main')"
            :curr="tabName === 'main'"
            @click="this.tabName = 'main'"
          />
          <Nava
            :text="$t('about')"
            :curr="tabName === 'about'"
            @click="this.tabName = 'about'"
          />
          <Nava
            v-if="isLogin"
            :text="$t('userPage')"
            :curr="tabName === 'profile'"
            @click="this.tabName = 'profile'"
          />
          <Nava
            v-if="isLogin"
            :text="$t('logout')"
            :curr="false"
            @click="logout"
          />
          <Nava
            v-if="!isLogin"
            :text="$t('login')"
            :curr="tabName === 'login'"
            @click="login"
          />
          <Nava
            v-if="!isLogin"
            :text="$t('register')"
            :curr="tabName === 'register'"
            @click="register"
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
  <component :is="tab" :devMode="devMode" @login="realLogin" />
</template>
<script>
import Main from "./components/Main.vue";
import About from "@/components/About";
import Nava from "@/components/NavButton";
import { reactive } from "vue";
import Profile from "./components/Profile";
import Register from "@/components/Register";
import Login from "@/components/Login";
import { isLogin, removeToken } from "@/api";
export default {
  name: "App",
  components: { Nava, Main, About, Login, Register },
  mounted() {
    this.isLogin = isLogin();
    Object.entries(this.mapOfPages).forEach((pageName) => {
      if (window.location.href.indexOf(pageName[0]) > -1) {
        this.tabName = pageName[0];
        if (!this.isLogin && this.tabName === "main") {
          console.log("shit");
          this.tabName = "login";
        }
      }
    });
  },

  data() {
    return {
      tabName: "login",
      devMode: false,
      isLogin: false,
      mapOfPages: reactive({
        main: reactive(Main),
        form: reactive(Main),
        profile: reactive(Profile),
        about: reactive(About),
        login: reactive(Login),
        register: reactive(Register),
      }),
    };
  },

  computed: {
    tab() {
      return this.mapOfPages[this.tabName];
    },
  },

  watch: {
    tabName() {
      if (!this.isLogin && this.tabName === "main") {
        console.log("shit");
        this.tabName = "login";
      }
      window.history.pushState(null, document.title, `${this.tabName}`);
    },
  },

  methods: {
    login() {
      this.tabName = "login";
    },

    realLogin() {
      this.isLogin = true;
      this.tabName = "profile";
    },

    register() {
      this.tabName = "register";
    },

    logout() {
      this.tabName = "login"; // bad but Main is not recreated
      this.isLogin = false;
      removeToken();
    },
  },
};
</script>
