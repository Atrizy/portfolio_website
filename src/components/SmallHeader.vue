<template>
  <div>
    <v-app-bar color="#00070B" class="header" dark flat relative>
      <v-spacer></v-spacer>
      <a href="https://www.linkedin.com/in/evankl/"><v-icon size="35">mdi-linkedin</v-icon></a>
      <a href="https://github.com/Atrizy"><v-icon size="35">mdi-github</v-icon></a>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "small-header",
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 999;
}
a {
    text-decoration: none;
}
</style>