<template>
  <div class="pt-5" style="background-color: #353849">
    <h1 class="text-white text-center text-lg-left text-monospace ml-lg-4">
      Projects
    </h1>
    <b-row class="justify-content-center p-md-4 ml-0 mr-0">
      <b-col lg="4" class="justify-content-center"
        ><project-card
          class="mt-3"
          cardTitle="My Portfolio"
          cardText="Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Consectetur adipiscing elit."
          :techUsed="['Vue.js', 'Bootstrap']"
          url="https://github.com/JasonHitching/jasonhitching.github.io"
          imgName="portfolio-card.jpeg"
        />
      </b-col>
      <b-col lg="4"
        ><project-card
          class="mt-3"
          cardTitle="Reactivities"
          cardText="'Social platform' handles back-end data and presents it on the front-end."
          :techUsed="['React', 'NET', 'C#', 'Axios']"
          url="https://github.com/JasonHitching/Reactivities"
          imgName="project.svg"
        />
      </b-col>
      <b-col lg="4"
        ><project-card
          class="mt-3"
          cardTitle="SWIM (Game)"
          cardText="Space Wars In Megalactica (Command Line Game), collaborative university project"
          :techUsed="['Java', 'Netbeans']"
          url="https://github.com/Aston13/SWIM"
          imgName="project.svg"
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
