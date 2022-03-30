<template>
  <div>
    <small-header></small-header>
    <top-page></top-page>
    <middle-page></middle-page>
    <about-me></about-me>
    <bottom-page></bottom-page>
  </div>
</template>

<script>
import SmallHeader from "@/components/SmallHeader.vue"
import TopPage from "@/components/TopPage.vue";
import MiddlePage from '@/components/MiddlePage.vue';
import AboutMe from '@/components/AboutMe.vue';
import BottomPage from '@/components/BottomPage.vue';

export default {
  components: {
    SmallHeader,
    TopPage,
    MiddlePage,
    AboutMe,
    BottomPage,
  },
};
</script>

<style lang="scss" scoped>

</style>