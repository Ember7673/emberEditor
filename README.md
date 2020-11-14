<!--
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:04:07
 * @LastEditTime: 2020-11-14 15:41:13
 * @FillPath: Do not edit
-->

# zxb-editor

## 下载

```
下载富文本编辑器插件
npm install zxb-editor
下载依赖
npm install
```

### 注册全局组件

```
import Editor from 'zxb-editor'
import 'zxb-editor/lib/editorPanel.css'
import 'zxb-editor/lib/editorPanel.common.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(Editor);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
```

### 使用

```
<EditorPanel @getContent="getContent"></EditorPanel>
// 获取富文本编辑器内容
getContent(content) {
  console.log('content', content)
}
```
