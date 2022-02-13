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
        style="fill: none; stroke: #515151; stroke-width: 4"
      />
      <line
        v-for="p in points"
        :key="p.x"
        x1="122"
        y1="120"
        :x2="p.x"
        :y2="p.y"
        style="stroke: #f01818; stroke-width: 5"
      />
    </svg>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  // props: ["angs"],
  data() {
    return {
      points: [],
      angs: this.$store.state.angs,
      // angs: [],
    };
  },
  mounted() {
    // this.angs=sessionStorage.getItem("angs");
    this.draw();
  },
  methods: {
    draw() {
      this.clearPoints();
      console.log("length of angs: "+this.angs.length);
      if (this.angs.length === 0) {
        this.points = []; //initial svg
        console.log("no angle, initialed svg");
      } else {
      for (let i = 0; i < this.angs.length; i++) { //process angs
        console.log("processed angs: "+this.angs[i]);
        const rad = (this.angs[i] * Math.PI) / 180; //convert to radian
        const dx = 90 * Math.cos(rad); //calculate x
        const dy = 90 * Math.sin(rad); //calculate y
        const x = 122 + dx; //x1+dx
        const y = 120 - dy; //y1-dy
        // this.clearPoints();
        this.points.push({ x, y });
      }
      }
        console.log("length of points: "+this.points.length);
    },
    clearPoints() {
      this.points = [];
    },
  },
  watch: {
    angs: {
      handler() {
        this.angs.length === 0
          ? console.log("angs in svg is empty")
          : console.log("angs in svg: " + this.angs),
          // this.clearPoints();
          this.draw();
      },
      deep: true,
    },
  },
};
</script>

<style>
.svg-component {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
}
.svg-component svg {
  background-color: #8fbdf1;
  border: 2px solid #515151;
}
</style>