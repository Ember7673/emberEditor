<!--
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:04:07
 * @LastEditTime: 2020-11-12 16:19:47
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
import EditorPanel from './editorRegister'
Vue.use(EditorPanel);
```

### 使用

```
<EditorPanel @getContent="getContent"></EditorPanel>
// 获取富文本编辑器内容
getContent(content) {
  console.log('content', content)
}
```
