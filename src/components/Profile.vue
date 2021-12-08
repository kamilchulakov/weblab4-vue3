<template>
  <div
    class="
      flex
      min-h-full min-w-full
      bg-form-color
      p-4
      lg:p-48
      md:p-24
      sm:p-12
    "
  >
    <div class="bg-white min-w-full align-middle min-h-full">
      <CurrentTime class="m-8"/>
      <div class="bg-empty-block">
        <div class="pt-16"/>
      </div>
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
import CurrentTime from "./CurrentTime";

export default {
  name: "Profile",
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

<i18n>
{
  "en": {
    "about-message": "Nice to see you here.",
    "about-me": "Kamil Chulakov"
  },
  "ru": {
    "about-message": "Гм… Всего знать нельзя, конечно… Как бы обширен ум ни был,\n всего туда не поместишь. Ты ведь все больше насчет философии?",
    "about-me": "А.П. Чехов"
  }
}
</i18n>