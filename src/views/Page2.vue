<template>
  <div>
    <!-- <h1>Page2</h1> -->
    <SvgComponent
      :angs="angs"
    ></SvgComponent>
    <div class="input-row">
    <InputText type='text' v-model="text" />
    <Button class="p-button-sm draw-button" @click="submit()">绘&nbsp;&nbsp; 制</Button>
    <Button class="p-button-sm clear-button" @click="clearAngs()">清&nbsp;&nbsp; 空</Button>
    </div>{{angs.toString()}}
  </div>
</template>

<script>
import SvgComponent from "../components/SvgComponent.vue"
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
// import { ref } from 'vue';
export default {
components: {
  "SvgComponent": SvgComponent,
  "InputText": InputText,
  "Button": Button
},
data() {
  return {
    angs: [],
    text: '',
  };
},
methods:{
  // this.ang = this.text*Math.PI/180;
  submit(){
    this.angs.push(this.text);
    this.text = '';
    console.log("angs: "+this.angs);
  },
  clearAngs(){
    this.angs = [];
    this.text = '';
    console.log("angs: "+this.angs);
  },
}
}
</script>

<style>
.input-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>