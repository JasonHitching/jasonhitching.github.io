<template>
  <div>
    <b-navbar toggleable="lg" variant="light" type="light">
      <b-navbar-brand to="/"> Jason Hitching </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">home</b-nav-item>
          <b-nav-item to="/about">about</b-nav-item>
          <b-nav-item to="/blog/">blog</b-nav-item>
          <b-nav-item>contact me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
