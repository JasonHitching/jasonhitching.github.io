<template>
  <div>
    <b-row>
      <b-col class="d-flex justify-content-center"><project-card /> </b-col>
      <b-col class="d-flex justify-content-center"><project-card /> </b-col>
      <b-col class="d-flex justify-content-center"><project-card /> </b-col
    ></b-row>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "ProjectSection",
  components: {
    ProjectCard
  }
};
</script>

<style></style>
