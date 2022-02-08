<template>
  <div class="svg-component">
    <svg width="240" height="150">
      <text x="219" y="120">0</text>
      <text x="115" y="20">90</text>
      <text x="1" y="120">180</text>
      <path
        d="M 35 120 
        L 215 120 
        A 90 90 180 1 0 35 120"
        style="fill: none; stroke: #515151; stroke-width: 3"
      />
      <line
        x1="121"
        y1="120"
        :x2="x2"
        :y2="y2"
        style="stroke: #f01818; stroke-width: 5"
      />
    </svg>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["ang"],
  setup() {
    // const ang = ref(30);
    const rad = ref();
    const x2 = ref("215");
    const y2 = ref("120");
    return {
      rad,
      x2,
      y2,
      // ang
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      if (this.ang === 0) {
        this.x2 = "215";
        this.y2 = "120";
      } else {
        this.rad = (this.ang * Math.PI) / 180;
        const dx = 90 * Math.cos(this.rad);
        const dy = 90 * Math.sin(this.rad);
        this.x2 = 122 + dx; //x1+dx
        this.y2 = 120 - dy; //y1-dy
        console.log(this.x2, this.y2, this.ang);
      }
    },
  },
  watch: {
    ang() {
      this.draw();
    },
  },
  computed: {
    line: function () {
      return `x2="${this.x2}" y2="${this.y2}"`;
    },
  },
};
</script>

<style>
</style>