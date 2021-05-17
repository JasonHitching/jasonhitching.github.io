<template>
  <div>
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand to="/"> Jason Hitching </b-navbar-brand>
      <b-nav>
        <b-nav-item to="/">home</b-nav-item>
        <b-nav-item to="/about">about</b-nav-item>
        <b-nav-item to="/blog/">blog</b-nav-item>
        <b-nav-item>contact me</b-nav-item>
      </b-nav>
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
