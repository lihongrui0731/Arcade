<template>
  <div id="map-container" class="map-container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
export default {
  setup() {
    const map = shallowRef(null);
    const path = []

    return {
      map, path
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "4b73918ad172ed976306c4ab8ed28084",
        version: "2.0",
        plugins: ["AMap.ToolBar", "AMap.Scale"],
      })
        .then((AMap) => {
          this.map = new AMap.Map("map-container", {
            viewMode: "2D",
            zoom: 5,
            resizeEnable: true,
            center: [106.602725, 37.076636], //初始化地图中心点位置
            mapStyle: "amap://styles/whitesmoke",
          });
          var toolbar = new AMap.ToolBar();
          this.map.addControl(toolbar);
          var scale = new AMap.Scale();
          this.map.addControl(scale);
          var marker1 = new AMap.Marker({
            position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "北京",
          });
          var marker2 = new AMap.Marker({
            position: new AMap.LngLat(121.39, 31.14), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "上海",
          });
          var markerList = [marker1, marker2];
          this.map.add(markerList);
      for(var i = 0; i < markerList.length; i++) {
              this.path.push(markerList[i].getPosition());
            }
         
          var polyline = new AMap.Polyline({
            path: this.path,
            strokeColor: "#3366FF",
            strokeOpacity: 1,
            strokeWeight: 5,
          });
          this.map.add(polyline);
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