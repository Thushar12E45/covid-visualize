import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCube, faFile, faPaperPlane, faBars, faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './index.css';

library.add(faCube, faFile, faPaperPlane, faBars, faFilter, faChevronDown);
createApp(App).component('fa', FontAwesomeIcon).mount('#app');
