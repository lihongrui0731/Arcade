<template>
<div class="datatable-component">
  <DataTable
    class="DeviceTable p-datatable-sm"
    :value="deviceList"
    v-model:selection="selectedDevice"
    :row-hover="true"
  >
    <Column selectionMode="multiple" @click="onClickCheckbox"></Column>
    <Column field="id" header="编号" />
    <Column field="name" header="设备名" />
    <Column header="查看结果">
      <template #body>
        <Button
          type="button"
          icon="pi pi-cloud-download"
          class="p-button-sm"
          @click="onRowClick($event, rowData)"
        ></Button>
      </template>
    </Column>
  </DataTable>
</div>
</template>
<script>
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

export default {
  components: {
    DataTable,
    Column,
    Button,
  },
  setup() {
    const deviceList = ref([
      {id: 1, name: "Device 1", angle: 30,},
      {id: 2, name: "Device 2", angle: 60,},
      {id: 3, name: "Device 3", angle: 90,},
      {id: 4, name: "Device 4", angle: 120,},
      {id: 5, name: "Device 5", angle: 150,},
      {id: 6, name: "Device 6", angle: 170,},
    ]);
    const selectedDevice = ref(null);
    return {
      deviceList,
      selectedDevice,
    };
  },
  methods: {
    onRowClick(event) {
      console.log(event);

    },
    onClickCheckbox() {
      console.log(this.selectedDevice);
    },
  },
};
</script>
<style scoped>
.datatable-component {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.DeviceTable {
  width: 500px;
  height: 700px;
  border: 3px;
  border-style: solid;
  border-color: #515151;
  margin-top: 16px;
  margin-right: 15px;
  font-size: 16px;
  font-weight: 400;
}
</style>