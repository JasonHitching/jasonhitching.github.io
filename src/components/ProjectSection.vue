<template>
  <div>
    <b-row class="d-flex justify-content-center space-between pt-4 pb-3">
      <b-col lg="3"><project-card /> </b-col>
      <b-col lg="3"><project-card /> </b-col>
      <b-col lg="3"><project-card /> </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center space-between pb-3">
      <b-col lg="3"><project-card /> </b-col>
      <b-col lg="3"><project-card /> </b-col>
    </b-row>
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

<style>
.space-between {
  gap: 80px;
}
</style>
