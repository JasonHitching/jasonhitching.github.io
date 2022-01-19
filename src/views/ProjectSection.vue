<template>
  <div class="pt-5" style="background-color: #353849">
    <h1 class="text-white text-monospace ml-lg-4">Projects</h1>
    <b-row class="d-flex justify-content-center p-4">
      <b-col lg="4"
        ><project-card
          cardTitle="My Portfolio"
          cardText="Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Consectetur adipiscing elit."
          :techUsed="['Vue.js', 'Bootstrap']"
        />
      </b-col>
      <b-col lg="4"
        ><project-card
          cardTitle="My Portfolio"
          cardText="Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Consectetur adipiscing elit."
          :techUsed="['Vue.js', 'Bootstrap']"
        />
      </b-col>
      <b-col lg="4"
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
import ProjectCard from '../components/ProjectCard.vue';
export default {
  name: 'ProjectSection',
  components: {
    ProjectCard
  }
};
</script>

<style>
.space-between {
  gap: 10px;
}
</style>
