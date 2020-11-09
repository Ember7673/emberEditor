/*
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:03:59
 * @LastEditTime: 2020-11-09 17:26:26
 * @FillPath: Do not edit
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import EditorPanel from './editorRegister'
Vue.use(EditorPanel);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
