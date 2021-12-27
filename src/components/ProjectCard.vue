<template>
  <div class="card text-white" style="background-color: #232734">
    <img src="../assets/project.svg" class="card-img-top" alt="#" />
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text">{{ cardText }}</p>
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
</style>
