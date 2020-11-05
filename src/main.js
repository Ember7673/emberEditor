/*
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:03:59
 * @LastEditTime: 2020-11-04 14:38:56
 * @FillPath: Do not edit
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import EditorPanel from './editorRegister'
Vue.use(EditorPanel);
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
