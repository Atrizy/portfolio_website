<template>
  <div>
    <v-card class="spacer background" tile>
        <v-content class="about">
            <h1>About me.</h1>
        </v-content>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "about-me",
};
</script>

<style lang="scss" scoped>
.about {
    display: grid;
    width: 100%;
    align-self: center;
    justify-self: center;

    h1 {
        color: white;
        font-size: 60px;
    }
}
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.background {
  background-image: url("@/assets/space.svg");
  width: 100%;
}
</style>