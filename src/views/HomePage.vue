<template>
  <div>
    <small-header></small-header>
    <top-page></top-page>
    <middle-page></middle-page>
    <bottom-page></bottom-page>
  </div>
</template>

<script>
import SmallHeader from "@/components/SmallHeader.vue"
import TopPage from "@/components/TopPage.vue";
import MiddlePage from '@/components/MiddlePage.vue';
import BottomPage from '@/components/BottomPage.vue';
export default {
  components: {
    SmallHeader,
    TopPage,
    MiddlePage,
    BottomPage,
  },
};
</script>

<style lang="scss" scoped>

</style>