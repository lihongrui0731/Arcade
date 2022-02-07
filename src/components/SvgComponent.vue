<template>
  <div>
    <svg width="200" height="200">
        <path d="M 10 190 L 190 190 A 90 90 180 1 0 10 190" 
        style="fill: none; stroke: #515151; stroke-width: 3;" />
        <line x1="100" y1="190" 
        :x2="x2" :y2="y2"
        style="stroke: #f01818; stroke-width: 5;" />
        <!-- x2="190" y2="190" -->
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['ang'],
    setup() {
        // const ang = ref(0);
        const rad = ref ( );
        const x2 = ref("190");
        const y2 = ref("190");
        return {
            rad, x2, y2
        }
    },
    mounted() {
        // this.draw();
    },
    methods: {
        draw(){
            // if(this.ang !==0){
            this.rad = this.ang*Math.PI/180;
            const dx = 90*Math.cos(this.rad);
            const dy = 90*Math.sin(this.rad);
            this.x2 = dx + 90;
            this.y2 = 190 - dy;
            console.log(this.x2, this.y2, this.ang);
            // }
        }
    },
    computed: {
        line : function(){
            return `x2="${this.x2}" y2="${this.y2}"`;
        }
    }
}
</script>

<style>
</style>