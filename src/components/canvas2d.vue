<template>
  <canvas id="canvas2D" width="640" height="450"></canvas>
</template>

<script setup>
import {defineExpose} from "vue";

// onMounted(() => {
//   console.log('canvas2D mounted');
// })

// function generateDB(width, height) {
//   let db = [];
//   for (let i = 0; i < width; i++) {
//     for (let j = 0; j < height; j++) {
//       db[i][j].push(5);
//     }
//   }
//   return db;
// }
function draw() {
  const ctx = document.getElementById('canvas2D').getContext('2d');
  let img = new Image();
    img.src = "assets/images/i.png";
  console.log(img)
  img.onload = () => {
    // console.log('img loaded')
    ctx.drawImage(img, -80, -20, 700, 500);

    // ctx.fillStyle=ctx.createPattern(img, "no-repeat");
    // ctx.fillRect(0,0,600,450)

    // let dataBase = generateDB(256, 256);

    for (let x = 0; x < 256; x++) {
      for (let y = 0; y < 256; y++) {
        const color = calcColor(/*dataBase[x][y]*/(Math.random() + 0.1)*50, 0, 90);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`;
        ctx.fillRect(x * 2, (256 - y) * 2, 2, 2);
      }
    }
  }

}

function calcColor(value, min, max) {
  if (value < min)
    value = min;
  else if (value > max)
    value = max;
  const dv = max - min;
  const c = {r: 0, g: 0, b: 0};
  const v = (value - min) / dv;
  const _8th = 0.125;

  if (v < _8th) {
    c.b = 128 * (1 + v / _8th);
  } else if (v < 3 * _8th) {
    c.b = 255;
    c.g = 128 * (v - _8th) / _8th;
  } else if (v < 5 * _8th) {
    c.r = 128 * (v - 3 * _8th) / _8th;
    c.g = 255;
    c.b = 128 * (5 * _8th - v) / _8th;
  } else if (v < 7 * _8th) {
    c.r = 255;
    c.g = 128 * (7 * _8th - v) / _8th;
  } else {
    c.r = 128 * (9 * _8th - v) / _8th;
  }
  return c;
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
  width: 640px;
  height: 450px;
}
</style>