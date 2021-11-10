<template>
  <div>
    <div class="intro-section">
      <b-row align-v="center">
        <b-col class="col-lg-6 ml-5">
          <Terminal />
        </b-col>
        <b-col>
          <b-img center src="../assets/jason.png"></b-img>
        </b-col>
      </b-row>
      <hr class="mt-0" />
    </div>
  </div>
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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
