<template>
  <div id="app">
    <app-header  ></app-header>
    <router-view ></router-view>
    <app-footer id="bottom"></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: { AppHeader, AppFooter }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#bottom {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}
</style>
