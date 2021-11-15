<template>
  <b-container class="intro-section" fluid>
    <b-row align-v="center">
      <b-col class="col-lg-6 col-md-12 ml-5 pl-5">
        <Terminal />
      </b-col>
      <b-col col-md-12 col-sm-12>
        <b-img fluid left src="../assets/jason.png"></b-img>
      </b-col>
    </b-row>
    <hr class="mt-0" />
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
}

.hr {
  border: 0;
  height: 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
</style>
