<template>
  <b-container class="intro-section" fluid>
    <b-row align-v="center" align-h="center">
      <b-col class="pt-3 d-block d-sm-none">
        <p
          class="
            pt-4
            pl-3
            pr-3
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
    <b-row style="background-color: #232734" class="intro p-4 p-lg-5 p-sm-4">
      <b-col lg="6" class="mr-lg-5">
        <h4 class="text-white">MATURE GRADUATE 👴, PROGRAMMER, BORN 1994</h4>
        <p class="text-white lead mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button class="btn-primary basic">Check out my CV!</button>
      </b-col>
      <b-col lg="5" class="mt-sm-5 mt-lg-0 mt-5">
        <h4 class="text-white">MY HANDY SKILLSET</h4>
        <div class="p-2 mt-4 my-techs d-flex flex-row flex-wrap">
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
          />
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          />
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
          />
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          />
          <img
            class="stack-tech"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          />
        </div>
      </b-col> </b-row
    >ƒa
    <project-section />
  </b-container>
</template>

<script>
import Terminal from "../components/Terminal";
import ProjectSection from "../components/ProjectSection.vue";

export default {
  name: "Home",
  components: {
    Terminal,
    ProjectSection
  }
};
</script>

<style scoped>
.coloured-bullet {
  list-style-position: inside;
}

.coloured-bullet ::marker {
  color: #03cc90;
}

.my-techs {
  row-gap: 2rem;
  gap: 20px;
  grid-row-gap: 2rem;
}

.stack-tech {
  filter: grayscale(100%);
  height: 70px;
  width: 70px;
}

.stack-tech:hover {
  filter: none;
  transform: scale(1.1);
}

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
