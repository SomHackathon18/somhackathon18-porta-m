<template>
    <div class="wrapper">
        <div class="cropper">
            <img alt="profile-img" :src="profile.image">
        </div>
        <f7-list style="top: 200px">
            <f7-list-item><b>Nom</b> {{ profile.name }}</f7-list-item>
            <f7-list-item><b>Edat</b> {{ profile.age }}</f7-list-item>
        </f7-list>
        <f7-fab position="center-bottom" v-if="$root.user.id != profile.id">
            <f7-fab-button text-color="white" @click="message">
                <f7-icon fa="comment-o"></f7-icon>
            </f7-fab-button>
        </f7-fab>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                profile: this.$root.user,
            }
        },

        methods: {
            message() {
                this.$f7router.navigate(`/chat/${this.user}`)
            }
        }
    }
</script>

<style>
img { 
    max-width: 100%;
    position: relative;
    margin-top: -50px;
}

.cropper {
    position: absolute;
    left: 50%;
    margin-top: 20px;
    margin-left: -75px;
    max-width: 150px;
    max-height: 150px;
    overflow: hidden;
    border-radius: 50%; 
    text-align: center;   
}

.wrapper {
    height: 100%;
    width: 100%;
}
</style>