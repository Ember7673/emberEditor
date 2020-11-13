/*
 * @Author: wangtengteng
 * @Date: 2020-10-30 17:26:15
 * @LastEditTime: 2020-11-13 10:41:22
 * @FillPath: Do not edit
 */
import EditorPanel from './plugin/editor.vue';

const Editor = {
  install: function (Vue) {
    Vue.component(EditorPanel.name, EditorPanel)
  },
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Editor);
}
export default Editor;