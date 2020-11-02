/*
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:03:59
 * @LastEditTime: 2020-10-30 17:52:31
 * @FillPath: Do not edit
 */
import Vue from 'vue'
import App from './App.vue'

import EditorPanel from './editorRegister'
Vue.use(EditorPanel);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
