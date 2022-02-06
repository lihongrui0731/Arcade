<template>
  <div id="nav-bar">
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import { ref } from "vue";

const items = ref([
  { label: "Page1", to: "/" },
  { label: "Page2", to: "/page2" },
  { label: "Page3", to: "/page3" },
]);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
