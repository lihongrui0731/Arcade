<template>
  <canvas id="canvas2D" width="512" height="512"></canvas>
</template>

<script setup>
import {/*onMounted,*/ defineExpose} from "vue";

// onMounted(() => {
//   draw()
// })
function draw() {
  const ctx = document.getElementById('canvas2D').getContext('2d');
  let img= new Image();
  console.log(img)
  img.onload = () => {
    console.log('img loaded')
    ctx.drawImage(img, 0, 0, 512, 512);
  }
  img.src = "/assests/i.png";

  // let pattern = ctx.createPattern(img,"no-repeat")
  // ctx.fillStyle=pattern;
  // ctx.fillRect(0,0,512,512)


}
defineExpose({draw})
</script>
<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "canvas2D",
});
</script>
<style scoped>
#canvas2D {
  width: 512px;
  height: 512px;
}
</style>