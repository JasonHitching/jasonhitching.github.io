<template>
  <div>
    <b-navbar class="navbar-top" toggleable="lg" type="dark">
      <b-container>
        <b-navbar-brand class="text-monospace" to="/">
          Jason<span class="dash-span">//</span>Hitching
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mt-2 mb-2 ml-auto text-monospace">
            <b-nav-item to="/">home</b-nav-item>
            <b-nav-item :to="{ hash: 'about' }">about</b-nav-item>
            <b-nav-item :to="{ hash: 'projects' }">projects</b-nav-item>
            <b-nav-item to="/blog/">blog</b-nav-item>
            <b-nav-item :to="{ hash: 'contact' }">contact me</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view class="content" />

    <footer class="coloured-footer">
      <b-container class="text-center">
        <b-navbar class="p-0">
          <b-navbar-nav class="mx-auto">
            <b-nav-item
              style="font-size: 2rem"
              href="https://github.com/JasonHitching"
              ><i class="bi bi-github footer-icon"></i
            ></b-nav-item>
            <b-nav-item
              style="font-size: 2rem"
              href="https://www.linkedin.com/in/jason-hitching-2678b514a/"
              ><i class="bi bi-linkedin footer-icon"></i
            ></b-nav-item>
          </b-navbar-nav>
        </b-navbar>

        <div class="mx-auto" style="width: 200px">
          <a href="https://buttercms.com"
            ><b-img fluid src="./assets/butter.png"></b-img
          ></a>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import './scss/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

.dash-span {
  color: #03cc90;
  font-size: 25px;
}

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

.navbar-top {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  background: #353849;
}

.coloured-footer {
  background: #353849;
}

.button-contain {
  display: flex;
  justify-content: flex-end;
}

.content {
  min-height: calc(100vh - 170px);
}

.footer-icon {
  color: white;
}

.footer-icon:hover {
  color: #03cc90;
}
</style>
