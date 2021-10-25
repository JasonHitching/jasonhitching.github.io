<template>
  <b-container>
    <b-row align-v="center" class="mt-5">
      <b-col>
        <b-img
          center
          rounded="circle"
          src="../assets/profile-pic.jpeg"
          style="width: 250px"
        ></b-img>
      </b-col>
      <b-col class="col-lg-8">
        <Terminal />
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

<style scoped></style>
