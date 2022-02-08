<template>
  <div>
    <!-- <h1>Page2</h1> -->
    <SvgComponent
      :ang="ang"
    ></SvgComponent>
    <div class="input-row">
    <InputText type='text' v-model="text" />
    <Button class="p-button-sm draw-button" @click="submit">绘&nbsp;&nbsp; 制</Button>
    </div>
  </div>
</template>

<script>
import SvgComponent from "../components/SvgComponent.vue"
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
export default {
components: {
  "SvgComponent": SvgComponent,
  "InputText": InputText,
  "Button": Button
},
setup() {
  const text = ref("0");
  const ang = ref(0);
  return {
    text, ang
  };
},
methods:{
  // this.ang = this.text*Math.PI/180;
  submit(){
    this.ang = this.text;
    console.log(this.ang);
  }
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