<template>
    <div style="width: 100%; height: 100%">
        <gmap-map   :center="{lat:10, lng:10}"
                    :zoom="7"
                    map-type-id="roadmap"
                    style="width: 100vw; height: 100%"
                    :options="options"></gmap-map>
        <f7-fab position="right-top">
            <f7-fab-button text-color="white" @click="addAnnounce">
                <f7-icon fa="plus"></f7-icon>
            </f7-fab-button>
        </f7-fab>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                options: {
                    disableDefaultUI: true,
                    zoomControl: true
                }
            }
        },

        methods: {
            addAnnounce() {
                this.$f7router.navigate('/announce/')
            }
        }
    }
</script>