<template>
    <f7-list links-list no-link-class style="margin-top:0">
        <f7-list-button     v-for="chat in chats" 
                            :key="chat.sender.id"
                            :title="chat.sender.name"
                            :text="chat.sender.lastMessage"
                            :href="`/chat/${chat.sender.id}/`"></f7-list-button>
    </f7-list>
</template>

<script>
export default {
    data() {
        return {
            chats: [
                {
                    sender: {
                        id: 2,
                        name: "Xavi",
                        lastMessage: "Hola"
                    }
                },
                {
                    sender: {
                        id: 3,
                        name: "Jordi",
                        lastMessage: "Ok"
                    }
                },
                {
                    sender: {
                        id: 4,
                        name: "Albert",
                        lastMessage: "Perfecte"
                    }
                }
            ]
        }
    }
}
</script>