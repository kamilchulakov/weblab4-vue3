<template>
  <div
    class="flex min-h-full min-w-full bg-form-color p-4 lg:p-48 md:p-24 sm:p-12"
  >
    <div class="bg-white min-w-full align-middle min-h-full">
      <CurrentTime class="m-8" />
      <div class="bg-empty-block">
        <div class="pt-16" />
      </div>
      <p class="text-black text-display pt-6 pb-6 text-center">
        {{ t("login") }}
        <br />
        {{ t("password") }}
      </p>
    </div>
  </div>
</template>

<script>
import CurrentTime from "@/components/CurrentTime";
import { useI18n } from "vue-i18n";

export default {
  name: "Register",
  components: { CurrentTime },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t };
  },
};
</script>
