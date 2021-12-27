<template>
  <b-row class="p-4 row-colour">
    <b-col lg="6">
      <h2 class="text-white">Lorem ipsum dolor</h2>
      <p class="text-white lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </b-col>
    <b-col lg="6">
      <b-form>
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: ""
      }
    };
  }
};
</script>

<style>
.input-colour {
  background-color: #353849 !important;
}

.row-colour {
  background-color: #232734;
}
</style>
