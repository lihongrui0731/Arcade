<template>
    <div>
        <!-- <h1>Page1</h1> -->
        <div class="map-container flex justify-content-center">
        <Map></Map>
        </div>
    </div>
</template>

<script>
import Map from '../components/MapComponent.vue'
export default {
components: {
    "Map": Map
},
setup() {
    return {
    }
},
}
</script>

<style>
.map-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>