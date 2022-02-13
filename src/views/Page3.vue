<template>
  <div class="page3-container">
    <DeviceTable></DeviceTable>
    <div class="button-and-svg">
    <span class="p-buttonset ctl-buttons">
      <Button class="start-button"
      icon="mdi mdi-record mdi-36px"
      @click="start()"
      enabled
      ></Button>
      <Button class="stop-button"
      icon="mdi mdi-stop mdi-36px" @click="stop()"></Button>
    </span>
     <SvgComponent></SvgComponent>
     </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import DeviceTable from '../components/DeviceTable.vue';
import SvgComponent from '../components/SvgComponent.vue';

import axios from 'axios';
import Button from 'primevue/button';

// const axios = require('axios');
export default {
  components: {
    DeviceTable, SvgComponent, Button
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
  justify-content: space-around;
  align-items: center;
  gap: 60px;
  margin-top: 15px;
}
/* .ctl-buttons{
  height: 50px;
  width: 50px;
} */
Button {
  height: 45px;
}
</style>