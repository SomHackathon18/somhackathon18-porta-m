<template>
    <f7-list simple-list style="margin-top:0">
        <f7-list-button     v-for="notification in notifications" 
                            :key="notification.id"
                            :text="notification.body"
                            :href="notification.link"
                            style="text-overflow: ellipsis"></f7-list-button>
    </f7-list>
</template>

<script>
export default {
    data() {
        return {
            notifications: [
                {
                    id: 2,
                    body: 'En Xavi necessita cotxe per anar a prop del teu destí',
                    link: '/profile/'
                },
                {
                    id: 2,
                    body: 'La Carla disposa de cotxe per anar a prop del teu destí sol·licitat',
                    link: '/profile/'
                }
            ]
        }
    }
}
</script>