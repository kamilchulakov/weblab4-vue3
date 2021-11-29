<template>
  <div
    class="
      flex
      min-h-full min-w-full
      bg-empty-block
      p-4
      lg:p-48
      md:p-24
      sm:p-12
    "
  >
    <div class="bg-white min-w-full align-middle min-h-full">
      <p class="text-black text-display pt-6 pb-6 text-center">
        {{ t("about-message") }}
        <br />
        @{{ t("about-me") }}
      </p>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "About",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t };
  },
};
</script>

<i18n>
{
  "en": {
    "about-message": "This is powered by Vue.js and is my final web-programming lab.",
    "about-me": "Kamil Chulakov"
  },
  "ru": {
    "about-message": "Работает на Vue.js . Это лаба по веб-программированию.",
    "about-me": "Камиль Чулаков"
  }
}
</i18n>
