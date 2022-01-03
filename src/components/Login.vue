<template>
  <div
    class="flex min-h-full min-w-full bg-form-color p-4 lg:p-48 md:p-24 sm:p-12"
  >
    <div class="bg-white min-w-full align-middle min-h-full">
      <CurrentTime class="m-8" />
      <div class="bg-empty-block">
        <div class="pt-16" />
      </div>
      <center>
        <form class="max-w-sm shadow-md rounded pt-6 pb-8 mb-4 text-center">
          <template v-if="errors.length">
            <b>Please fix this errors:</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </template>
          <span class="text-black font-display font-bold">{{
            $t("login")
          }}</span>
          <input
            v-model.trim="login"
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
          <span class="text-black font-display font-bold">{{
            $t("password")
          }}</span>
          <input
            type="password"
            v-model="password"
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
            {{ $t("login") }}
          </button>
        </form>
      </center>
    </div>
  </div>
</template>

<script>
import CurrentTime from "@/components/CurrentTime";
import { login } from "@/api";

export default {
  name: "Login",
  components: { CurrentTime },

  data() {
    return {
      errors: [],
      login: "",
      password: "",
    };
  },

  methods: {
    async submitForm() {
      this.errors = [];
      if (await login(this.login, this.password)) this.$emit("login");
      else this.errors.push("Invalid login or password");
    },
  },
};
</script>
