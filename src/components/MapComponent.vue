<template>
  <div id="map-component" class="map-component"></div>
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
          this.map = new AMap.Map("map-component", {
            viewMode: "2D",
            zoom: 10,
            resizeEnable: true,
            center: [121.114446,31.350609], //初始化地图中心点位置
            mapStyle: "amap://styles/blue",
          });
          var toolbar = new AMap.ToolBar();
          this.map.addControl(toolbar);
          var scale = new AMap.Scale();
          this.map.addControl(scale);
          var marker1 = new AMap.Marker({
            position: new AMap.LngLat(121.114446,31.350609), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "1",
          });
          var marker2 = new AMap.Marker({
            position: new AMap.LngLat(121.114430,31.350500), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "2",
          });
          // var marker3 = marker2.position.offset(0, -100);
          var markerList = [marker1, marker2];
          this.map.add(markerList);
      for(var i = 0; i < markerList.length; i++) {
              this.path.push(markerList[i].getPosition());
            }
          var polyline = new AMap.Polyline({
            path: this.path,
            strokeColor: "#3366FF",
            strokeOpacity: 0.5,
            strokeWeight: 2,
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
.map-component {
  height: 300px;
  width: 650px;
  border: 2px solid red;
  margin: 5px;
}
</style>