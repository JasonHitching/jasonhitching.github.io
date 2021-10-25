<template>
  <b-container>
    <b-card
      style="height: 200px; background-color: #183042"
      header="🗂️ personal-portfolio -zsh 80x24"
      body-text-variant="success"
      header-bg-variant="secondary"
      header-text-variant="light"
      header-tag="header"
    >
      <div>
        <vue-typed-js :showCursor="false" :strings="['Hey, I\'m Jason']">
          <strong
            ><p class="text-monospace">$ <span class="typing"></span></p
          ></strong>
        </vue-typed-js>
      </div>
      <div>
        <vue-typed-js
          :startDelay="2000"
          :showCursor="false"
          :strings="['$ a budding software engineer']"
        >
          <strong><p class="text-monospace typing"></p></strong>
        </vue-typed-js>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "terminal"
};
</script>

<style></style>
