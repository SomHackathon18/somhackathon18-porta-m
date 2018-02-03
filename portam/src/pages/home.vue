<template>
  <f7-page>
    <f7-navbar :title="title"></f7-navbar>
    <f7-tabs swipeable>
      <f7-tab id="home" tab-active v-on:tab:show="onChangeTab('Home')">
        <map-page></map-page>
      </f7-tab>
      <f7-tab id="chats" v-on:tab:show="onChangeTab('Xats')">
        <chats-page></chats-page>
      </f7-tab>
      <f7-tab id="notifications" v-on:tab:show="onChangeTab('Notificacions')">
        <notifications-page></notifications-page>
      </f7-tab>
      <f7-tab id="profile" v-on:tab:show="onChangeTab('Perfil')">
        <profile-page></profile-page>
      </f7-tab>
    </f7-tabs>
    <f7-toolbar labels tabbar>
      <f7-link tab-link="#home" icon-fa="home" icon-only tab-link-active icon-size="25"></f7-link>
      <f7-link tab-link="#chats" icon-fa="comments-o" icon-only icon-size="25"></f7-link>
      <f7-link tab-link="#notifications" icon-fa="bell-o" icon-only icon-size="25"></f7-link>
      <f7-link tab-link="#profile" icon-fa="user-o" icon-only icon-size="25"></f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
import MapPage from './map.vue';
import ChatsPage from './chats.vue';
import NotificationsPage from './notifications.vue';
import ProfilePage from './profile.vue';

export default {
  components: { MapPage, ChatsPage, NotificationsPage, ProfilePage },

  data() {
    return {
      title: 'Mapa'
    }
  },

  methods: {
    onChangeTab(title) {
      this.title = title;
    }
  }
}
</script>
