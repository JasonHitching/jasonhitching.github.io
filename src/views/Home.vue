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
      <b-col md="12" lg="6">
        <Terminal center />
      </b-col>
      <b-col sm="12" lg="5" md="12">
        <b-img center fluid src="../assets/jason.png"></b-img>
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
