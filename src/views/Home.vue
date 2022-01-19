<template>
  <b-container fluid class="p-0">
    <b-row class="intro-section" align-v="center" align-h="center">
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
        <b-img class="pl-lg-5" fluid src="../assets/jason.png"></b-img>
      </b-col>
    </b-row>
    <b-row
      id="about"
      style="background-color: #232734"
      class="p-lg-5 p-4 justify-content-center"
    >
      <b-col lg="6" class="p-3 border border-success rounded">
        <h4 class="text-white text-monospace">
          Mature Master's Graduate 👴, Born in '94
        </h4>
        <p class="text-white text-monospace lead mt-4 p-0">
          Working as an Electronics Test Technician, a Python shell script
          arrived in my works inbox resolving a long standing bug we'd been
          experiencing. I became intrigued and subsequently hooked into the
          world of software development. I've sinced completed two relevant
          degrees (BSc and MSc) and remain ever driven to work as a graduate
          developer.
        </p>
        <button
          class="btn-primary basic border-success"
          style="background-color: #353849"
        >
          <a download class="text-white" href="./assets/Jason-Hitching-CV.docx"
            >Check out my CV!</a
          >
        </button>
      </b-col>
      <b-col
        lg="5"
        class="
          p-3
          mt-5
          mb-4
          mt-lg-0
          mb-lg-0
          ml-lg-5
          rounded
          border border-success
        "
      >
        <h4 class="ml-lg-2 text-center text-lg-left text-white text-monospace">
          Experience Using
        </h4>
        <div
          class="
            p-2
            mt-4
            my-techs
            d-flex
            flex-row flex-wrap
            justify-content-center
          "
        >
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
      </b-col>
    </b-row>
    <project-section id="projects" />
    <contact-section id="contact" />
  </b-container>
</template>

<script>
import Terminal from '../components/Terminal';
import ProjectSection from './ProjectSection.vue';
import ContactSection from './ContactSection.vue';

export default {
  name: 'Home',
  components: {
    Terminal,
    ProjectSection,
    ContactSection
  }
};
</script>

<style scoped>
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
