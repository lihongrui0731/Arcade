<template>
  <div class="viewer">
    <vc-config-provider >
      <vc-viewer @ready="onReady">
        <vc-primitive-tileset
          ref="primitive"
          url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
          @click="onClicked"
          @all-tiles-loaded="allTilesLoaded"
        >
        </vc-primitive-tileset>
      </vc-viewer>
    </vc-config-provider>
  </div>
</template>
<script>
import { Cesium, VcConfigProvider, VcViewer, VcPrimitiveTileset } from "vue-cesium";
export default {
  components: {
    "vc-config-provider": VcConfigProvider,
    "vc-viewer": VcViewer,
    "vc-primitive-tileset": VcPrimitiveTileset
  },
  data() {
    return {
      vcConfig: {
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjI2NzA3My1jZGUyLTQ2ZjgtODUwOC02MTIxNzU5ZTUwMjYiLCJpZCI6ODMzMDcsImlhdCI6MTY0NTUxMzAyMX0.XJalw-g_IzotMNEsZfWG_qj9Mxg1YcrtRt3_pT6noRk",
        cesiumPath: "https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js",
      },
    };
  },
  methods: {
      onReadyPromise(tileset, viewer) {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
      },
      onReady(){
          console.log('onReady')
      },
      onClicked(e) {
        console.log(e)
      },
      allTilesLoaded() {
        console.log('allTilesLoaded')
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
      }
  }
};
</script>
<style scoped>
/* .provider {
    width: 100%;
    height: 100%;
} */
.viewer {
  width: 70vh;
  height: 70vh;
}
</style>