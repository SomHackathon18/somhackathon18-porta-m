<template>
    <f7-page>
        <f7-navbar :title="messages[0].sender.name" back-link="Enrere"></f7-navbar>
        <f7-messages>
            <f7-message v-for="message in messages"
                        :key="message.token" 
                        :text="message.text" 
                        :type="message.type"></f7-message>
        </f7-messages>
        <messagebar send-link="Enviar" @submit="onSend"></messagebar>
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                messages: this.$root.messages.filter((message) => message.sender.id == this.id)
            }
        },

        props: [ 'id' ],

        methods: {
            onSend(text, clear) {
                this.$root.onSend(text, clear);
            }
        }
    }
</script>