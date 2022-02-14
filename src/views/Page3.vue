<template>
  <div class="page3-container">
    <div class="flex flex-column mt-3">
    <SessionInput></SessionInput>
    <DeviceTable></DeviceTable>
    </div>
    <div class="map-buttons-and-svg">
    <MapComponent></MapComponent>
    <div class="button-and-svg">
     <SvgComponent></SvgComponent>
    <span class="ctl-buttons flex flex-row">
      <Button class="start-button p-1 h-3rem w-6rem"
      label="开始"
      icon="mdi mdi-record mdi-24px mr-0 ml-1"
      @click="start()"
      enabled
      ></Button>
      <Button class="stop-button p-1 h-3rem w-6rem"
      label="停止"
      icon="mdi mdi-stop mdi-24px mr-0 ml-1" @click="stop()"></Button>
    </span>
     </div>
     </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import DeviceTable from '../components/DeviceTable.vue';
import SvgComponent from '../components/SvgComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import SessionInput from '../components/SessionInput.vue';

import axios from 'axios';
import Button from 'primevue/button';

// const axios = require('axios');
export default {
  components: {
    DeviceTable, SvgComponent, Button, MapComponent, SessionInput,
  },
  data(){
    return{
      isStarted: true,
    }
  },
  methods: {
    start() {
      console.log('start clicked');
      axios.post('http://127.0.0.1:4523/mock/629501/session/start')
      .then(res => {
        console.log(res);
      this.isStarted = true
      },
      );
    },
    stop() {
      console.log('stop clicked');
      axios.post('http://127.0.0.1:4523/mock/629501/session/stop')
      .then(res => {
        console.log(res);
      });
    }
  }
}
</script>

<style scoped>
.page3-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}

.button-and-svg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  gap: 8px;
  /* width: 600px; */
}
.ctl-buttons{
  gap: 8px;
}
Button {
  height: 45px;
}
.map-buttons-and-svg {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 6px;
  margin-top: 15px;
}
</style>