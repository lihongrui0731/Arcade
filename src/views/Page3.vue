<template>
  <div class="page3-container">
    <!-- <h1>Page3</h1> -->
    <DeviceTable></DeviceTable>
     <SvgComponent></SvgComponent>
  </div>
</template>

<script>
// import { ref } from 'vue';
import DeviceTable from '../components/DeviceTable.vue';
import SvgComponent from '../components/SvgComponent.vue';
export default {
  components: {
    DeviceTable, SvgComponent
  },


}
</script>

<style scoped>
.page3-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
.SvgComponent {
  width: 300px;
  height: 300px;
}
</style>