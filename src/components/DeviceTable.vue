<template>
<div class="datatable-component">
  <DataTable
    class="DeviceTable p-datatable-sm text-base"
    :value="deviceList"
    v-model:selection="selectedDevice"
    :row-hover="false"
  >
    <template #header>
      <h5 class="mt-0 mb-0 text-sm">设备列表</h5>
    </template>
    <Column selectionMode="multiple" @row-click="onClickCheckbox()"></Column>
    <Column field="id" header="编号" />
    <Column field="name" header="设备名" />
    <Column header="查看结果">
      <template #body="slotProps">
        <Button
          type="button"
          icon="pi pi-cloud-download"
          class="p-button-sm preview-button"
          @click="onRowClick(slotProps.data)"
        ></Button>
      </template>
    </Column>
  </DataTable>
</div>
</template>
<script>
// import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

export default {
  components: {
    DataTable, Column, Button,
  },
data() {
  return {
     deviceList: this.$store.state.deviceList,
     selectedDevice : [],
    //  angs : this.$store.state.angs,
     angs : [],
  };
},
  methods: {
    onRowClick(device) {
      this.angs=[];
      // this.$store.commit("clearAngs");
      console.log("click row: "+device.id+" "
      +"angle: "+device.angle
      +" length of device.angle: "+device.angle.length);
      // this.angs.push(device.angle);
      device.angle.forEach((ang)=>{
          this.angs.push(ang);
        }
      );
      console.log("length of pushed angs: "+this.angs.length);
      // sessionStorage.setItem("angs", device.angle);
      this.$store.commit("setAngs", this.angs);
    },
  },
};
</script>
<style scoped>
/* .datatable-component {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
} */
.DeviceTable {
  width: 410px;
  /* height: 700px; */
  border: 2px;
  border-style: solid;
  border-color: #921313;
  font-size: 15px;
  font-weight: 400;
}
.preview-button {
  width: 23px;
  height: 25px;
}
</style>