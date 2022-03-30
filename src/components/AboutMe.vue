<template>
  <div>
    <div class="about">
      <v-card class="spacer background" tile>
        <v-content>
          <h1>About me.</h1>
          <p>
            My name is Evan Keeping, I'm a Software / Fullstack developer based
            out of St. John's Newfoundland. I am learning and constantly
            improving, I'm using VueJS at the moment but I'm always looking to
            learn new frameworks and better myself as a developer. I value being
            a part of a positive, innovative and caring team whose objective is
            to learn, grow and create novel solutions to complex problems. I
            have experience building applications involving technologies such as
            JavaScript, HTML/CSS, MariaDB(SQL), VueJS and RESTful Python APIs
            deployed using Google Cloud Technologies. I think of myself as a
            strong problem solver that thrives in a team based collaborative
            environment. I’m really eager to start making a difference with you.
            I’m also completely bilingual in french! I would like to thank you
            for visiting my portfolio and I really appreciate the opportunity
            that you are providing.
          </p>
        </v-content>
      </v-card>
    </div>
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
  text-align: center;

  h1 {
    color: orange;
    font-size: 60px;
    word-break: normal;
  }

  p {
    margin-left: 10%;
    color: white;
    font-size: 20px;
    width: 80%;
    word-break: normal;
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