<template>
  <div class="top-bar">
      <TabMenu class="top-bar-content" :model="items">
        <template #item="{item}">
          <a :href="item.to">{{item.label}}</a>
        </template>
      </TabMenu>
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
  { label: "实时采集", to: "/" },
  { label: "Page1", to: "/page1" },
  { label: "Page2", to: "/page2" },
]
   }
 }
 
}
</script>

<style scoped>
.top-bar {
  height: 50px;
  /* border-buttom: 1px solid #ccc; */
}
a {
  padding: 1rem;
  font-weight: 700;
  color: #ccc;
}
.top-bar .top-bar-content {
  /* height: 60px; */
  font-size: small;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>