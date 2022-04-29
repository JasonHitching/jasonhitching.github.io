<template>
  <div
    class="card text-white"
    style="background-color: #232734; max-width: 100%"
  >
    <img src="../assets/project.svg" class="card-img-top" alt="#" />
    <div class="card-body pt-3 pb-0">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text pr-3">{{ cardText }}</p>
      <ul class="pl-0">
        <span
          v-for="tech in techUsed"
          v-bind:key="tech"
          class="
            outlined-badge
            badge
            text-success
            p-1
            mr-2
            font-weight-light
            text-monospace
          "
        >
          {{ tech }}
        </span>
      </ul>
    </div>
    <div class="container d-flex justify-content-end">
      <a
        class="git-icon mb-3 mr-3"
        href="https://github.com/JasonHitching?tab=repositories"
      >
        <i class="devicon-github-original-wordmark"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    cardText: String,
    techUsed: Array
  }
};
</script>

<style>
.outlined-badge {
  border: 1px solid #03cc90;
  border-radius: 5px;
}

.git-icon {
  font-size: 38px;
  color: inherit;
}

.container :hover {
  color: #03cc90;
  text-decoration: none;
}
</style>
