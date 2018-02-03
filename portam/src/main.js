// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Import Pubnub
import PubNub from 'pubnub';

// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCUf_eqreLMrF-6CsZhEIY1d7jGe9Mra9Q',
    libraries: 'places'
  }
});

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Fix Messagebar
import F7MessageBar from './components/messagebar.vue';
Vue.component('messagebar', F7MessageBar);

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  },

  data() {
    return {
      user: {       
        id: 1,
        name: 'Usuari1',
        image: require('./images/profile.jpg'),
        age: 20
      },
      messages: [
        {
          sender: {
            id: 2,
            name: "Xavi",
          },
          text: "Hola",
          type: "received",
          token: 1111111
        },

        {
          sender: {
            id: 2,
            name: "Xavi",
          },
          text: "Que tal",
          type: "received",
          token: 22222222
        },

        {
          sender: {
            id: 2,
            name: "Xavi",
          },
          text: "Em pots portar?",
          type: "received",
          token: 33333333
        },
      ],
      pubnub: {}
    }
  },

  created() {
    const self = this;

    this.pubnub = new PubNub({
      publishKey: 'demo',
      subscribeKey: 'demo'
    });
    
    this.pubnub.addListener({
      message(data) {
        let type = data.message.user.id == self.user.id ? 'sent' : 'received';
        self.messages.push({
          text: data.message.text,
          type,
          token: data.message.token
        })
      }
    });
    
    this.pubnub.subscribe({
      channels: ['portam']
    });
    
    this.pubnub.history({
      channel: 'portam',
      count: 20
    }, (status, response) => {
      const self = this;
      console.log(response);
      response.messages.forEach((message) => {
        let type = message.entry.user.id == self.user.id ? 'sent' : 'received';
        self.messages.push({
          text: message.entry.text,
          token: message.timetoken,
          type
        })
      })
    
    });
  },

  methods: {
    onSend(text, clear) {
      if(text.trim().length === 0) return;
      this.pubnub.publish({
        channel: 'portam',
        message: {
          text,
          user: this.user
        }
      });
      clear();
    }
  }
});
