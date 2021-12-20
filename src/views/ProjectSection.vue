<template>
  <div>
    <b-row class="d-flex justify-content-center space-between pt-4 pb-3">
      <b-col lg="3"
        ><project-card
          cardTitle="My Portfolio"
          cardText="Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Consectetur adipiscing elit."
          :techUsed="['Vue.js', 'Bootstrap']"
        />
      </b-col>
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
