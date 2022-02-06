<template>
<div class="map-container">
  <div id="map-container"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
export default {
  setup() {
    const map = shallowRef(null);
    const center = [116.397428, 39.90923];

    return {
      map, center,
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: '4b73918ad172ed976306c4ab8ed28084', 
        version: "2.0", 
        plugins: [""], 
      })
        .then((AMap) => {
          this.map = new AMap.Map("map-container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            // center: [105.602725, 37.076636], //初始化地图中心点位置
            center: this.center,
          });
          console.log(this.map.center);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.initMap();
  },
};
</script>

<style scoped>
.map-container {
  height: 400px;
  width: 100%;
}
</style>