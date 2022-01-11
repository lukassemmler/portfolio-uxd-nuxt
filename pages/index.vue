<template>
  <div>
    <NuxtLogo />
    <FontAwesome icon="briefcase"/>
    <NuxtImg src="tank-guy-2020-05.jpg" sizes="sm:640px md:960px lg:1200px"/>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('de')">Deutsch</nuxt-link>
    {{ $t("welcome") }}
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
