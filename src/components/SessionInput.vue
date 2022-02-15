<template>
  <div class="session-input-component text-sm font-medium p-2">
      <p class="sessionStation-label text-700 mt-1 mb-1">测试站点：</p>
      <Textarea
        class="sessionStation-input h-3rem"
        v-model="sessionStation"
      />
      <p class="sessionRange-label text-700 mt-1 mb-1">测试范围：</p>
      <Textarea
        class="sessionRange-input h-3rem"
        v-model="sessionRange"
      />
      <p class="sessionNote-label text-700 mt-1 mb-1">备注：</p>
      <Textarea class="sessionNote-input h-3rem" v-model="sessionNote" />
      <Button
        class="p-button-sm h-2rem col"
        label="提交"
        @click="submitSession()"
      />
  </div>
</template>

<script>
import Textarea from 'primevue/textarea';
// import InputText from "primevue/inputtext";
import Button from "primevue/button";
// import axios from 'axios';
export default {
  components: {
    Textarea,
    Button,
  },
  data() {
    return {
      sessionStation: "",
      sessionRange: "",
      sessionNote: "",
    };
  },
  mounted() {
    
  },
  methods: {
    submitSession() {
      console.log("submitSession clicked");
    },
  },
};
</script>

<style scoped>
p {
  font-family: Roboto;
}
.session-input-component {
    width: 410px;
    border: 2px solid #005e61;
    box-shadow: inset 4px 4px 1px rgba(0, 94, 97, 0.6), 
                inset -4px -4px 1px rgba(0, 94, 97, 0.6);
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 5px 5px;
    font-weight: 700;
}
.station-row {
  grid-column: 1 / 5;
  grid-row: 1;
}
.sessionStation-label {
  grid-column: 1;
  grid-row: 1;
  justify-self: end;
}
.sessionStation-input {
  grid-column: 2 / 5;
  grid-row: 1;
}
.range-row {
  grid-column: 1 / 5;
  grid-row: 2;
}
.sessionRange-label {
  grid-column: 1;
  grid-row: 2;
  justify-self: end;
}
.sessionRange-input {
  grid-column: 2 / 5;
  grid-row: 2;
}
.note-row {
  grid-column: 1 / 5;
  grid-row: 3;
}
.sessionNote-label {
  grid-column: 1;
  grid-row: 3;
  justify-self: end;
}
.sessionNote-input {
  grid-column: 2 / 4;
  grid-row: 3;
}
.p-button-sm {
  grid-column: 4;
  grid-row: 3;
  justify-self: center;
  align-self: center;
}
</style>