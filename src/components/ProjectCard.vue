<template>
  <div class="card text-white" style="width: 20rem; background-color: #232734">
    <img
      src="https://picsum.photos/600/300/?image=25"
      class="card-img-top"
      alt="#"
    />
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text">{{ cardText }}</p>
      <span class="badge rounded-pill bg-white text-success">Java</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    cardText: String
  }
};
</script>

<style>
.proj-card {
  border-radius: 100px;
}
</style>
