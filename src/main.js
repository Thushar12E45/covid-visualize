import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCube, faFile, faPaperPlane, faBars, faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import mitt from 'mitt';
import App from './App.vue';
import './index.css';

const emitter = mitt();
library.add(faCube, faFile, faPaperPlane, faBars, faFilter, faChevronDown);
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.component('fa', FontAwesomeIcon);
app.mount('#app');
