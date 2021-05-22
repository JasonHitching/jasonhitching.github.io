<template>
  <div>
    <b-navbar toggleable="lg" variant="dark" type="dark">
      <b-container>
        <b-navbar-brand class="text-monospace" to="/">
          Jason Hitching
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mt-2 mb-2 ml-auto text-monospace">
            <b-nav-item to="/">home</b-nav-item>
            <b-nav-item to="/about">about</b-nav-item>
            <b-nav-item to="/blog/">blog</b-nav-item>
            <b-nav-item>contact me</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view class="content" />
    <b-row align-h="end" class="mr-3 mb-3">
      <button v-on:click="scrollToTop" id="backToTop">☝️</button>
    </b-row>

    <footer style="background-color: #343a40" class="border-top">
      <b-container class="text-center">
        <b-navbar class="p-0">
          <b-navbar-nav class="mx-auto">
            <b-nav-item
              style="font-size: 2rem"
              href="https://github.com/JasonHitching"
              ><i class="bi bi-github text-white"></i
            ></b-nav-item>
            <b-nav-item
              style="font-size: 2rem"
              href="https://www.linkedin.com/in/jason-hitching-2678b514a/"
              ><i class="bi bi-linkedin text-white"></i
            ></b-nav-item>
          </b-navbar-nav>
        </b-navbar>

        <div class="mx-auto" style="width: 250px">
          <a href="https://buttercms.com"
            ><b-img fluid src="./assets/butter.png"></b-img
          ></a>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      var rootElement = document.documentElement;
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#backToTop {
  background-color: black;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 20px;
  line-height: 48px;
  width: 48px;
}

.button-contain {
  display: flex;
  justify-content: flex-end;
}

.content {
  min-height: calc(100vh - 170px);
}
</style>
