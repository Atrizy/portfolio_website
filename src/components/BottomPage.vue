<template>
  <v-app class="contact_info spacer background" tile>
    <div class="text_box">
      <div class="content_box">
        <v-content tile>
          <h1>Contact me!</h1>
          <p>
            Thank you for taking the time to explore my website, if you have any
            questions / inquiries please feel free to use the form below this
            blob of text. I will always reply within 12 hours!
          </p>
        </v-content>
      </div>
      <v-form ref="form" class="form" @submit.prevent="sendEmail">
        <v-text-field
          v-model="name"
          name="name"
          background-color="white"
          class="text-field my-8"
          placeholder="Name..."
          outlined
        >
        </v-text-field>
        <v-text-field
          :rules="emailRules"
          v-model="email"
          name="email"
          background-color="white"
          class="text-field my-8"
          placeholder="Email..."
          outlined
        >
        </v-text-field>
        <v-textarea
          :rules="messageRules"
          name="message"
          v-model="message"
          background-color="white"
          placeholder="Message..."
          outlined
        ></v-textarea>
        <v-btn
          outlined
          x-large
          @click="sendEmail()"
          :loading="loading"
          class="montserrat_btn"
          color="orange"
        >
          Submit
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "bottom-page",
  data() {
    return {
      loading: false,
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [
        (v) => !!v,
        "E-mail is required",
        (v) => /.+@.+..+/.test(v) || "E-mail must be valid",
      ],
      message: "",
      messageRules: [(v) => !!v || "Message cant be empty"],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    send_email() {
      try {
        emailjs.sendForm(
          "contact_service",
          "contact_form",
          this.$refs["form"],
          "KGMtccPwKwbHm3oyc",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.reset();
    },
  },
};
</script>

<style scoped lang="scss">
.contact_info {
  display: grid;
  align-self: center;
  padding-top: 100px;
}
.form {
  background-color: #00070b;
}
.text_box {
  width: 70%;
  height: 150px;
  place-self: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  color: white;
  background-color: #00070b;

  .montserrat_btn  {
    align-self: end;
  }
}
.content_box {
  display: grid;
  align-self: center;
  float: left;
  width: 50%;
  h1 {
    font-size: 68px;
    color: orange;
    word-break: normal;
  }

  p {
    width: 80%;
    font-weight: bold;
    font-size: 1.5em;
    color: #f4d8cd;
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
  background-image: url("@/assets/bottom.svg");
  width: 100%;
  height: 1300px;
}
@media screen and (max-width: 768px) {
  .content_box {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 70%;
  }
  .text_box {
    width: 90%;
  }
}
</style>
