<template>
  <div class="page-container">
<!--    <canvas id="canvas3D" width="600" height="600"></canvas>-->
    <canvas2d ref="canvas2dRef"></canvas2d>
  </div>
</template>

<script setup>
import Canvas2d from "../components/canvas2d";
import {onMounted, ref} from "vue";
const canvas2dRef = ref(null)
onMounted(() => {
  canvas2dRef.value.draw()
})

// function draw3d() {
//   const canvas = document.getElementById('canvas3D');
//   const ctx = canvas.getContext('webgl');
//   ctx.clearColor(ctx, 0, 0, 0, 1);
//   ctx.clear(ctx.COLOR_BUFFER_BIT);
//
//   const fieldOfView = 45 * Math.PI / 180;   // in radians
//   const aspect = ctx.canvas.clientWidth / ctx.canvas.clientHeight;
//   const zNear = 0.1;
//   const zFar = 100.0;
//   const projectionMatrix = mat4.create();
//
//   // note: glmatrix.js always has the first argument
//   // as the destination to receive the result.
//   mat4.perspective(projectionMatrix,
//       fieldOfView,
//       aspect,
//       zNear,
//       zFar);
//
//   // Set the drawing position to the "identity" point, which is
//   // the center of the scene.
//   const modelViewMatrix = mat4.create();
//
//   // Now move the drawing position a bit to where we want to
//   // start drawing the square.
//
//   mat4.translate(modelViewMatrix,     // destination matrix
//       modelViewMatrix,     // matrix to translate
//       [-0.0, 0.0, -6.0]);  // amount to translate
//
//   // Tell WebGL how to pull out the positions from the position
//   // buffer into the vertexPosition attribute.
//   {
//     const numComponents = 3;  // pull out 3 values per iteration
//     const type = ctx.FLOAT;    // the data in the buffer is 32bit floats
//     const normalize = false;  // don't normalize
//     const stride = 0;         // how many bytes to get from one set of values to the next
//                               // 0 = use type and numComponents above
//     const offset = 0;         // how many bytes inside the buffer to start from
//     ctx.bindBuffer(ctx.ARRAY_BUFFER, buffers.position);
//     ctx.vertexAttribPointer(
//         programInfo.attribLocations.vertexPosition,
//         numComponents,
//         type,
//         normalize,
//         stride,
//         offset);
//     ctx.enableVertexAttribArray(
//         programInfo.attribLocations.vertexPosition);
//   }
//
//   // Tell WebGL to use our program when drawing
//
//   ctx.useProgram(programInfo.program);
//
//   // Set the shader uniforms
//
//   ctx.uniformMatrix4fv(
//       programInfo.uniformLocations.projectionMatrix,
//       false,
//       projectionMatrix);
//   ctx.uniformMatrix4fv(
//       programInfo.uniformLocations.modelViewMatrix,
//       false,
//       modelViewMatrix);
//
//   {
//     const offset = 0;
//     const vertexCount = 4;
//     ctx.drawArrays(ctx.TRIANGLE_STRIP, offset, vertexCount);
//   }
// }
//   function initShaderProgram(ctx, vsSource, fsSource) {
//     const vertexShader = loadShader(ctx, ctx.VERTEX_SHADER, vsSource);
//     const fragmentShader = loadShader(ctx, ctx.FRAGMENT_SHADER, fsSource);
//
//     const shaderProgram = ctx.createProgram();
//     ctx.attachShader(shaderProgram, vertexShader);
//     ctx.attachShader(shaderProgram, fragmentShader);
//     ctx.linkProgram(shaderProgram);
//
//     if (!ctx.getProgramParameter(shaderProgram, ctx.LINK_STATUS)) {
//       alert('Unable to initialize the shader program: ' + ctx.getProgramInfoLog(shaderProgram));
//       return null;
//     }
//
//     return shaderProgram;
//   }
//
//   function loadShader(ctx, type, source) {
//     const shader = ctx.createShader(type);
//     ctx.shaderSource(shader, source);
//     ctx.compileShader(shader);
//
//     if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
//       alert('An error occurred compiling the shaders: ' + ctx.getShaderInfoLog(shader));
//       ctx.deleteShader(shader);
//       return null;
//     }
//
//     return shader;
//   }
//
//   const shaderProgram = initShaderProgram(ctx, vsSource, fsSource);
//   const programInfo = {
//     program: shaderProgram,
//     attribLocations: {
//       vertexPosition: ctx.getAttribLocation(shaderProgram, 'aVertexPosition'),
//     },
//     uniformLocations: {
//       projectionMatrix: ctx.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
//       modelViewMatrix: ctx.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
//     },
//   };



</script>

<style scoped>
.page-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* .cesium {
    width: 600px;
    height: 600px;
} */
</style>