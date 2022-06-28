<template>
  <div id="map_component" class="map-component"></div>
</template>
<script setup>
import {onMounted, /*ref*/} from 'vue';
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from '@vue/reactivity';

const map = shallowRef(null);

onMounted(() => {
  initMap()
})
function initMap(){
  AMapLoader.load({
    key: "4b73918ad172ed976306c4ab8ed28084",
    version: "2.0",
    plugins: ["AMap.ToolBar", "AMap.Scale", "AMap.Geolocation"],
    AMapUI: {
      version: "1.1",
      // plugins: ['control/BasicControl'],
    },
  }).then((AMap)=>{
    map.value = new AMap.Map("map_component",{  //设置地图容器id
      viewMode:"3D",    //是否为3D地图模式
      zoom:15,           //初始化地图级别
      center:[105.602725,37.076636], //初始化地图中心点位置
    });
    AMap.plugin(["AMap.PlaceSearch"], function() {
      //构造地点查询类
      let placeSearch = new AMap.PlaceSearch({
        pageSize: 5, // 单页显示结果条数
        pageIndex: 1, // 页码
        city: "上海", // 兴趣点城市
        citylimit: true,  //是否强制限制在设置的城市内搜索
        map: map.value, // 展现结果的地图实例
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      });
      //关键字查询
      placeSearch.search('上海大学', (status, result)=>{
        console.log(result);
      });
      console.log('AMap.PlaceSearch')
    });
  }).catch(e=>{
    console.log(e);
  })
}
</script>
<style scoped>
#map_component {
  height: 80%;
  width: 100%;
}
</style>