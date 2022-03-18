<template>
<div class="viewer">
    <vc-config-provider class="provider" :cesium-path="vcConfig.cesiumPath">
        <vc-viewer></vc-viewer>
    </vc-config-provider>
</div>
</template>
<script>
import {VcConfigProvider, VcViewer} from 'vue-cesium';
export default{
    components: {
        'vc-config-provider': VcConfigProvider,
        'vc-viewer': VcViewer,
    },
    data() {
        return {
            vcConfig:{
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjI2NzA3My1jZGUyLTQ2ZjgtODUwOC02MTIxNzU5ZTUwMjYiLCJpZCI6ODMzMDcsImlhdCI6MTY0NTUxMzAyMX0.XJalw-g_IzotMNEsZfWG_qj9Mxg1YcrtRt3_pT6noRk',
                cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
                },
        }
    },
}
</script>
<style scoped>
/* .provider {
    width: 100%;
    height: 100%;
} */
.viewer {
    width: 50vh;
    height: 50vh;
}
</style>