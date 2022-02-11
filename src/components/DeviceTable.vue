<template>
<div class="datatable-component">
  <DataTable
    class="DeviceTable p-datatable-sm"
    :value="deviceList"
    v-model:selection="selectedDevice"
    :row-hover="true"
  >
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
      // for (const device of this.deviceList) {
      //   if (device.id === id) {
      //     this.$store.angs.push(device.angle);
      //     this.$store.commit("setAngs", this.angs);
      //     console.log("angs in table: "+this.angs);
      //   }
      // }
      this.angs=[];
      console.log("click row: "+device.id+" "+"angle: "+device.angle);
      this.angs.push(device.angle);
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
  width: 450px;
  height: 700px;
  border: 3px;
  border-style: solid;
  border-color: #515151;
  margin-top: 16px;
  margin-right: 15px;
  font-size: 15px;
  font-weight: 400;
}
.preview-button {
  width: 23px;
  height: 25px;
}
</style>