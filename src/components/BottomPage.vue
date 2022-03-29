<template>
  <div>
    <v-card class="spacer background"></v-card>
  </div>
</template>

<script>
export default {
  name: "bottom-page",
};
</script>

<style lang="scss" scoped>
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.background {
  background-image: url("@/assets/bottom.svg");
  width: 100%;
  height: 700px;
}
</style>