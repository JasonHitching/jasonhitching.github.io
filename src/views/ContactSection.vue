<template>
  <b-container fluid class="row-colour pb-4">
    <b-row class="p-4 mx-auto justify-content-center">
      <b-col lg="5">
        <h2 class="text-white text-monospace">Contact Me</h2>
        <p class="text-white text-monospace lead">
          Feel free to reach out to me. I'm happy to hear from anybody, whether
          you just want to reach out, connect, speak about a job position or
          comment on the website!
        </p>
      </b-col>
      <b-col xl="6" lg="7">
        <b-form action="">
          <b-form-group id="name-input-group" label-for="input-2">
            <label class="text-white" for="text-password">Your name</label>
            <b-form-input
              id="name-input"
              v-model="form.name"
              placeholder="Enter name"
              required
              class="input-colour"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="contact-form-group">
            <label class="text-white" for="text-password">Your email</label>
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              class="input-colour"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <label class="text-white" for="text-password"
              >Your message to me</label
            >
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
              class="input-colour"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
        <b-button style="width: 100%; background-color: #03cc90"
          >Send message 📨</b-button
        >
      </b-col>
    </b-row>
    <b-row align-h="center">
      <button v-on:click="scrollToTop" id="backToTop">☝️</button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: ''
      }
    };
  },
  methods: {
    scrollToTop() {
      var rootElement = document.documentElement;
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style>
.input-colour {
  background-color: #353849 !important;
}

#backToTop {
  border-radius: 50%;
  cursor: pointer;
  font-size: 30px;
  line-height: 48px;
  width: 70px;
  height: 70px;
  background-color: #353849;
  border: solid 2px #03cc90;
}

.row-colour {
  background-color: #232734;
}
</style>
