<template>
<!--  <div class="map-btns flex flex-row justify-content-start">-->
<!--    <Button  class="online-count p-button-sm p-button-primary p-button-outlined"-->
<!--      @click="getOnlineDevice"-->
<!--      aria:haspopup-->
<!--      aria-controls="overlay_panel_1"-->
<!--    >-->
<!--      定位设备：&nbsp;{{this.markerList.length}}-->
<!--    </Button>-->
<!--    <OverlayPanel-->
<!--      ref="opp"-->
<!--      appendTo="body"-->
<!--      :showCloseIcon="true"-->
<!--      id="overlay_panel_1"-->
<!--      style="width: 300px"-->
<!--      :breakpoints="{ '960px': '75vw' }"-->
<!--    >-->
<!--&lt;!&ndash;      <DeviceWithCoords />&ndash;&gt;-->
<!--    </OverlayPanel>-->
<!--    <Button-->
<!--      class="maximize-map-btn p-button-sm"-->
<!--      label="展开地图"-->
<!--      icon="pi pi-external-link"-->
<!--      @click="openMaximizable()"-->
<!--    />-->
<!--    <Button-->
<!--      class="refresh-markers-btn p-button-sm"-->
<!--      label="刷新节点"-->
<!--      icon="pi pi-refresh"-->
<!--      @click="refreshMarkers()"-->
<!--    />-->
<!--    <Button-->
<!--      class="p-button-sm p-button-danger p-button-outlined"-->
<!--      :label="`${pickedPoint}`"-->
<!--      @click="toggle"-->
<!--      aria:haspopup="true"-->
<!--      aria-controls="overlay_panel"-->
<!--      style="height: 15px; font-family: 'Roboto'"-->
<!--    />-->
<!--    <Button-->
<!--    class="init-map-btn p-button-sm"-->
<!--    label="恢复地图"-->
<!--    @click="initMap()"-->
<!--    ></Button>-->
<!--    <OverlayPanel-->
<!--      ref="op"-->
<!--      appendTo="body"-->
<!--      :showCloseIcon="true"-->
<!--      id="overlay_panel"-->
<!--      style="width: 300px"-->
<!--      :breakpoints="{ '960px': '75vw' }"-->
<!--    >-->
<!--      <TableMini />-->
<!--    </OverlayPanel>-->
<!--    <Dialog-->
<!--      v-model:visible="displayMaximizable"-->
<!--      :maximizable="true"-->
<!--      :modal="true"-->
<!--      @show="onShow"-->
<!--      @hide="initMap(this.mapCenter)"-->
<!--    >-->
<!--      <div class="flex flex-column align-items-center">-->
<!--        <Button-->
<!--          class="refresh-markers-btn p-button-sm"-->
<!--          label="刷新地图节点"-->
<!--          icon="pi pi-refresh"-->
<!--          @click="refreshMarkers()"-->
<!--        />-->
<!--        <div id="expanded-map" class="expanded-map"></div>-->
<!--      </div>-->
<!--    </Dialog>-->
<!--  </div>-->
  <div id="map-component" class="map-component"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
// import DeviceWithCoords from "./DeviceWithCoords.vue";
// import TableMini from "./Table.mini.vue";
// import { shallowRef } from "@vue/reactivity";
// import Dialog from "primevue/dialog";
import gcoord from "gcoord";
// import OverlayPanel from "primevue/overlaypanel";
// import axios from 'axios';

export default {
  components: {
    // Dialog,
    // OverlayPanel,
    // TableMini,
    // DeviceWithCoords,
  },
  data() {
    return {
      map: null, // new AMap.Map("map-component")
      amap: null, // new AMap
      mapCenter: null,
      path: [],
      markerList: [],
      coordsArray: [],
      displayMaximizable: false,
      clickedMarker: '',
      infoWindowClosed: true,
      mapScaleChanged: false,
      mapMoved: false,
      sessionIdChanged: false,
      clickedMarkerOnMap: false,
      infoWindow:null,
      placeSearch: null,
    };
  },
  computed: {
    sessionId() {
      return this.$store.state.sessionId;
    },
    deviceList() {
      return this.$store.state.deviceList;
    },
    clickedMarkerId() {
      return this.$store.state.clickedDevice;
    },
    // pickedPoint() {
    //   // return this.$store.state.pickedPoint;
    //   return this.$store.state.pickedPoint.length===0 || this.$store.state.pickedPoint ===null
    //     ? '未拾取节点坐标'
    //     : this.$store.state.pickedPoint;
    // },
    clickTime() {
      return this.$store.state.clickTime;
    },
    updateDeviceTimeStr() {
      return this.$store.state.updateDeviceTimeStr;
    },
  },
  watch: {
    sessionId() {
      console.log('sessionId changed');
      this.sessionIdChanged = true;
      this.mapMoved = false;
      this.initMap();
    },
    clickedMarkerId(){
      if( this.infoWindow ) this.infoWindow.close();
      this.infoWindowClosed = true;
    },
    updateDeviceTimeStr() {
        // this.operateMarkers();
        this.refreshMarkers();
        if (!this.infoWindowClosed) {
        this.focusOnMarker();
        }
    },
    clickTime() {
      this.focusOnMarker();
    },
    pickedPoint() {
      console.log("pickedPoint changed: " + this.pickedPoint);
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap(center) {
      // 初始化地图
      AMapLoader.load({
        key: "4b73918ad172ed976306c4ab8ed28084",
        version: "2.0",
        plugins: ["AMap.ToolBar", "AMap.Scale", "AMap.Geolocation"],
        AMapUI: {
          version: "1.1",
          // plugins: ['control/BasicControl'],
        },
      })
        .then((AMap) => {
          this.map = new AMap.Map("map-component", {
            viewMode: "2D",
            zoom: 17,
            resizeEnable: true,
            center: !center ? [120.627103, 31.575923] : center, //初始化地图中心点位置
            mapStyle: "amap://styles/whitesmoke",
            // layers: [
            //   new AMap.TileLayer.Satellite(),
            //   // imageLayer,
            // ],
          });
          this.amap = AMap;
          if( this.amap == null ){
           this.initMap();
           return;
          }
          var placeSearch = new AMap.PlaceSearch({
            // city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
            city: '021',
            autoFitView: true,
          });
          placeSearch.search('上海美术馆', (status, result) => {
            if (status === "complete" && result.info === "OK") {
              this.map.setCenter(result.poiList.pois[0].location);
            }
          });
          //add tools
          var toolbar = new AMap.ToolBar();
          this.map.addControl(toolbar);
          var scale = new AMap.Scale({
            visible: true,
            position: "LT",
          });
          this.map.addControl(scale);
          // image layer bounds
          var imageBounds = new AMap.Bounds(
            [120.63001, 31.581682],
            [120.622681, 31.57321]
          );
          var imageLayer = new AMap.ImageLayer({
            bounds: imageBounds,
            url: "/assets/img/map.png",
            map: this.map,
            visible: true,
            zooms: [3, 20],
          });
          this.map.add(imageLayer);
          // pick point
          this.map.on("rightclick", (e) => {
            var pickedPoint = [];
            pickedPoint.splice(0);
            e.lnglat
              .toString()
              .split(",")
              .forEach((n) => {
                pickedPoint.push(parseFloat(n));
              });
            this.$store.commit("setPickedPoint", pickedPoint);
          });
          this.map.on("moveend", () => {
            this.mapCenter = this.map.getCenter();
          });
          this.map.on("click", () => {
          this.clickedMarker = '';
          });
          this.operateMarkers(); //build CircleMarkers
          // this.drawPolyline(); //draw polyline
        })
        .catch((e) => {
          console.log(e);
        });
    },
    convertLnglat() {
      this.deviceList.forEach((device) => {
        if (
          !device.coords ||
          device.length === 0 ||
          device.coords[0] == null ||
          device.coords[1] == null
        )
          return;
        // console.log(device.coords.split(","));

        let gps = device.coords;
        // var gps =[parseFloat(device.coords[0]), parseFloat(device.coords[1])];
        var lnglat = gcoord.transform(gps, gcoord.WGS84, gcoord.GCJ02);
        device.coords = [lnglat[0], lnglat[1]];
      });
    },
    operateMarkers() {
      // this.convertLnglat();
      // infoWindow
      this.infoWindow = new this.amap.InfoWindow({
        anchor: "bottom-left",
        content: "info window",
      });
      this.map.on("click", () => {
        this.infoWindow.close();
      });
      this.infoWindow.on("close", () => {
        this.$store.commit("setClickedMarker", "");
      });
      //build CircleMarkers
      this.deviceList.forEach((device) => {
        if (
          !device.coords ||
          device.length === 0 ||
          device.coords[0] == null ||
          device.coords[1] == null
        )
          return;
        var marker = new this.amap.CircleMarker({
          center: [device.coords[0], device.coords[1]],
          title: `<span style="color:red; font-family: Roboto">#&nbsp;${device.nodeID}&nbsp;</span>`,
          radius: 5, //半径
          id: device.nodeID,
        });
        this.markerList.push(marker);
        marker.on("click", (e) => {
          this.$store.commit("setClickedMarker", e.target.getOptions().id);
          this.$store.commit("setClickedDevice", e.target.getOptions().id);
          this.clickedMarker = e.target.getOptions().id;
          this.clickedMarkerOnMap = true;
          this.infoWindow.setContent(e.target.getOptions().title);
          this.infoWindow.open(this.map, e.target.getCenter());
          this.infoWindowClosed = false;
        });
      });
      this.map.add(this.markerList);
      if(this.infoWindowClosed) return;
      // else if(this.clickedMarkerId){ this.focusOnMarker(); }
      // if(this.markerList.length ===0) return;
      // else { this.map.setCenter(this.markerList[0].getCenter()); }
      
      // console.log(this.markerList);
    },
    focusOnMarker() {
      this.clickedMarker = this.clickedMarkerId;
      // console.log("focusOnMarker");
      // infoWindow
      if( this.amap == null ){
        return false;
      }
      // var infoWindow = new this.amap.InfoWindow({
      //   anchor: "bottom-left",
      //   content: "info window",
      // });
      this.map.on("click", () => {
        this.infoWindow.close();
      });
      // this.map.on("zoomchange", () => {
      //   this.mapScaleChanged = true;
      // });
      this.map.on("moveend", () => {
        this.mapMoved = true;
      });
      this.infoWindow.on("close", () => {
        this.$store.commit("setClickedMarker", "");
        this.clickedMarker = '';
        this.infoWindowClosed = true;
      });
      this.deviceList.forEach((device) => {
        if (
          !device.coords ||
          device.length === 0 ||
          device.coords[0] == null ||
          device.coords[1] == null
        ) return;
        if (device.nodeID === this.clickedMarker) {
          this.infoWindow.setContent(
            `<span style="color:red; font-family: Roboto">#&nbsp;${device.nodeID}&nbsp;</span>`
          );
          // if(this.clickedMarkerId){
          this.infoWindow.open(this.map, [device.coords[0], device.coords[1]]);
          this.infoWindowClosed = false;
          // }
          if(!this.mapMoved) {
          this.map.setCenter([device.coords[0], device.coords[1]]);
          this.map.setZoom(20);
          }
        }
        // console.log("focused");
      });
    },
    clearInfoWindow(infoWindow) {
      this.infoWindowClosed = true;
      infoWindow.close();
    },
    drawPolyline() {
      this.path.splice(0);
      for (var i = 0; i < this.markerList.length; i++) {
        this.path.push(this.markerList[i].getCenter());
      }
      var polyline = this.amap.Polyline({
        path: this.path,
        strokeColor: "#3366FF",
        strokeOpacity: 0.5,
        strokeWeight: 2,
      });
      this.map.add(polyline);
    },
    openMaximizable() {
      // 展开地图
      this.displayMaximizable = true;
    },
    onShow() {
      // 展开地图后，重新渲染地图
      this.expandMap(this.mapCenter);
    },
    expandMap(center) {
      //渲染展开后的地图
      AMapLoader.load({
        key: "4b73918ad172ed976306c4ab8ed28084",
        version: "2.0",
        plugins: ["AMap.ToolBar", "AMap.Scale"],
      })
        .then((AMap) => {
          this.map = new AMap.Map("expanded-map", {
            viewMode: "2D",
            zoom: 18,
            resizeEnable: true,
            center: !center ? [120.627103, 31.575923] : center, //初始化地图中心点位置
            mapStyle: "amap://styles/whitesmoke",
          });
          var toolbar = new AMap.ToolBar();
          this.map.addControl(toolbar);
          var scale = new AMap.Scale({
            visible: true,
            position: "LT",
          });
          this.map.addControl(scale);
          // var layer = new AMap.TileLayer.Satellite();
          // this.map.add(layer);

         var imageBounds = new AMap.Bounds(
            [120.62981, 31.580482],
            [120.623481, 31.57321]
          );
          var imageLayer = new AMap.ImageLayer({
            bounds: imageBounds,
            url: "/assets/img/map.png",
            map: this.map,
            visible: true,
            zooms: [3, 20],
          });
          this.map.add(imageLayer);
          // pick point
          this.map.on("rightclick", (e) => {
            var pickedPoint = [];
             pickedPoint.splice(0);
            e.lnglat
              .toString()
              .split(",")
              .forEach((n) => {
                pickedPoint.push(parseFloat(n));
              });
            this.$store.commit("setPickedPoint", pickedPoint);
            // this.toggle();
          });
          this.map.on("moveend", () => {
            this.mapCenter = this.map.getCenter();
          });
          //build CircleMarkers
          this.operateMarkers();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshMarkers() {
      if( this.map != null ){
        this.map.remove(this.markerList);
        this.markerList.splice(0);
        this.operateMarkers();
      }
    },
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    getOnlineDevice(event){
      this.$refs.opp.toggle(event);
    }
    
  }, // methods
  
};
</script>

<style scoped>
.map-btns {
  gap: 10px;
}
.maximize-map-btn {
  height: 12px;
  font-family: Roboto;
  font-weight: 700;
}
.refresh-markers-btn {
  height: 12px;
  font-family: Roboto;
  font-weight: 700;
}
.init-map-btn,
.expand-map-btn,
.popDevice-btn,
.online-count{
  height: 12px;
  font-family: Roboto;
}

.map-component {
  /* height: 400px; */
  height: 80%;
  /* width: 750px; */
  width: 80%;
  /* border: 2px solid red; */
  margin: 5px;
}
.expanded-map {
  height: 600px;
  width: 1300px;
  /* border: 2px solid red; */
  margin: 8px;
}
Dialog {
  background-color: antiquewhite;
}
</style>