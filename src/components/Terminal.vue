<template>
  <div class="d-none d-sm-block mt-md-5">
    <b-card
      style="height: 300px; background-color: #fefbf3"
      header="🗂️ personal-portfolio -zsh 80x24"
      body-text-variant="success"
      header-bg-variant="secondary"
      header-text-variant="light"
      header-tag="header"
    >
      <div>
        <vue-typed-js :showCursor="false" :strings="['Hey, I\'m Jason...']">
          <strong
            ><p class="text-monospace text-success h4">
              $ <span class="typing"></span></p
          ></strong>
        </vue-typed-js>
      </div>
      <div>
        <vue-typed-js
          :startDelay="2000"
          :showCursor="false"
          :strings="['$ a software engineering masters graduate']"
        >
          <strong><p class="text-monospace typing h4"></p></strong>
        </vue-typed-js>
      </div>
      <div>
        <vue-typed-js
          :startDelay="5000"
          :showCursor="false"
          :strings="[
            '$ currently searching for a junior/graduate developer position!'
          ]"
        >
          <strong><p class="text-monospace typing h4"></p></strong>
        </vue-typed-js>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'terminal'
};
</script>

<style></style>
