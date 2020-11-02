/*
 * @Author: wangtengteng
 * @Date: 2020-10-30 17:26:15
 * @LastEditTime: 2020-10-30 17:52:49
 * @FillPath: Do not edit
 */
import EditorPanel from './plugin/editor.vue';

const Editor = {
  install: function(Vue) {
    Vue.component(EditorPanel.name, EditorPanel)
  }
}

export default Editor;