<template>
  <div class="background-body">
    <TopBar></TopBar>
    <main class="background-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import TopBar from "./TopBar.vue"
export default {
    components: { TopBar }
}
</script>

<style>
.background-body {
  height: 100%;
  /* background-color: #efefef; */
  background-color: #071426;
  /* background-image: url('../assets/bg.jpg'); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: flex-start;
  gap: 5px;
}
.background-main {
  height: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  border-top: 1px solid #767779;
  
}

</style>