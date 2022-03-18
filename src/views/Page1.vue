<template>
    <div class="page-container">
        <cesium class="cesium"></cesium>
    </div>
</template>

<script>
import cesium from '../components/vue-cesium.vue';
export default {
    components: {
        cesium
    },
}
</script>

<style scoped>
/* .page-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
} */
.cesium {
    width: 600px;
    height: 600px;
}
</style>