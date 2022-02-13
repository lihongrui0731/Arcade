<template>
  <div class="top-bar">
      <TabMenu class="top-bar-content" :model="items" />
  </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu';
export default{
  components: {
    TabMenu
  },
 data() {
   return{
     items : [
  { label: "Page1", to: "/page1" },
  { label: "Page2", to: "/page2" },
  { label: "Page3", to: "/" },
]
   }
 }
 
}
</script>

<style scoped>
.top-bar {
  height: 50px;
  border-buttom: 1px solid #ccc;
}
.top-bar .top-bar-content {
  height: 50px;
  /* margin-bottom: 5px; */
  font-size: small;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>