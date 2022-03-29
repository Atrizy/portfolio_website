<template>
  <div>
    <v-card class="spacer background" tile>
      <v-card-title class="info_me">
        <v-card-text class="text">
        <h1>Hi, my name is Evan.</h1>
        <p>I'm an emerging Software / Fullstack developer.</p>          
        </v-card-text>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "top-page",
};
</script>

<style lang="scss" scoped>
.text {
  display: grid;
  position: relative;
  z-index: 99;
  color: white;
  place-items: center;
  justify-self: center;

    h1 {
      margin-top: 7%;
      font-size: 50px;
      line-height: 60px;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      background: url("@/assets/back.png");
      -webkit-background-clip: text;
      background-position: 0 0;
      animation: back 18s linear infinite;
      word-break: normal;
    }
    @keyframes back {
      100% {
        background-position: 2000px 0;        
      }
    }

    p {
      margin-top: 13%;
      font-size: 30px;
      color: orange;
      font-weight: 600;
      line-height: 35px;
      word-break: normal;
    }
}
.info_me {
  margin: 0;
  padding: 0;
}
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.background {
  background-image: url("@/assets/top.svg");
  width: 100%;
  height: 700px;
}
</style>