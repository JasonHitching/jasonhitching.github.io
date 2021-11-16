<template>
  <b-container class="intro-section" fluid>
    <b-row align-v="center" align-h="center">
      <b-col class="pt-3 d-block d-sm-none">
        <p
          class="
            intro-text
            font-weight-bold
            text-center
            lead
            text-light text-monospace
          "
        >
          Hello 👋, my name is <span class="span-color">Jason</span> and I'm an
          aspiring developer!
        </p>
      </b-col>
      <b-col md="11" lg="6">
        <Terminal center />
      </b-col>
      <b-col sm="12" lg="5" md="12">
        <b-img center fluid src="../assets/jason.png"></b-img>
      </b-col>
    </b-row>
    <b-row style="background-color: #232734">
      <b-col class="p-5">
        <h4 class="text-white">MATURE GRADUATE 👴, PROGRAMMER, BORN 1994</h4>
        <p class="text-light lead mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <b-button variant="outline-primary">Check out my CV!</b-button>
      </b-col>
      <b-col class="p-5">
        <h4 style="color: white">MY HANDY SKILLSET</h4>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Terminal from "../components/Terminal";

export default {
  name: "Home",
  components: {
    Terminal
  }
};
</script>

<style scoped>
.intro-section {
  background-color: #353849;
  min-height: 0px !important;
}

.hr {
  border: 0;
  height: 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.span-color {
  color: #03cc90;
}

.intro-text {
  font-size: 35px;
}
</style>
