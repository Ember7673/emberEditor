<!--
 * @Author: wangtengteng
 * @Date: 2020-10-30 15:04:20
 * @LastEditTime: 2020-11-02 18:52:57
 * @FillPath: Do not edit
-->
<template>
  <div class="editor">
    <div class="editor-header">
      <ul>
        <li>
          <i class="iconfont">&#xe64a;</i>
          上传图片</li>
        <li>
          <i class="iconfont">&#xe6fd;</i>
          特殊符号</li>
        <li @click="onClear">
          <i class="iconfont">&#xe74c;</i>
          清空</li>
      </ul>
    </div>
    <EditorDiv v-model="content"></EditorDiv>
    <!-- <p class="editor-content" contenteditable="true" @input="changeContent($event)">{{content}}</p> -->
  </div>
</template>

<script>
import EditorDiv from '../components/editor';
import '../assets/css/iconfont/iconfont.css';
export default {
  name: 'EditorPanel',
  components: {
    EditorDiv
  },
  data() {
    return {
      content: '这是一个可编辑段落。'
    }
  },
  watch: {
    'content'(newVal, oldVal) {
      console.log('---', newVal)
    }
  },
  methods: {
    onClear() {
      this.content = '';
    }, 
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul, li, p {
  padding: 0;
  margin: 0;
  list-style: none;
}
.editor {
  border: 1px solid #ccc;
  max-width: 500px;
  background: #fff;
  .editor-header {
    border-bottom: 1px solid #ccc;
    li {
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      font-size: 12px;
      i {
        display: block;
        text-align: center;
      }
      &:hover {
        background: #ddd;
      }
    }
  }
}
</style>