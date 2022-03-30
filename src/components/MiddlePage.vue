<template>
  <div>
    <v-card class="spacer background" tile>
      <v-card-text class="text">
        <h1>My projects</h1>
        <v-content class="projects">
          <h2>xStandard</h2>
          <a target="_blank" href="https://xstandard.tk/#/"><v-img class="project_img" src="@/assets/small_project_pic.png"></v-img></a>
        </v-content>
        <div class="project_content">
          <p>
            xStandard is a blogging project that I have been working on for a
            little over 3 weeks. There is a fully functional backend, I am still
            making small tweaks for extra features. The frontend is still a work
            in progress, I'm not really happy with how everything looks as of
            now but i will be making constant changes to the appearnace.
          </p>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="spacer2 background2" tile>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "middle-page",
};
</script>

<style lang="scss" scoped>
.text {
  display: grid;
  position: relative;
  z-index: 99;
  place-items: center;
  justify-self: center;

  h1 {
    margin-top: 24%;
    margin-bottom: 250px;
    color: orange;
    font-size: 50px;
    line-height: 55px;
  }
}
.projects {
  display: grid;

  h2 {
    margin-right: 30px;
    margin-top: 80px;
    color: orange;
    font-size: 30px;
    font-weight: bolder;
    float: left;
  }
}
.project_img {
  float: right;
  border: 2px solid orange;
  border-radius: 6px;
  width: 175px;
  height: 175px;
}
.project_content {
  margin-top: 15px;
  color: white;
  width: 65%;
  font-size: 20px;
}
.v-application p {
  word-break: normal;
}
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.background {
  background-image: url("@/assets/middle.svg");
  width: 100%;
  height: 900px;
}
.spacer2 {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.background2 {
  background-image: url("@/assets/space.svg");
  width: 100%;
  height: 400px;
}
@media screen and (max-width: 768px) {
  .text {
    padding-top: 150px;
  }
}
</style>