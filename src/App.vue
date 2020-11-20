<!--
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:03:59
 * @LastEditTime: 2020-11-20 10:04:52
 * @FillPath: Do not edit
-->
<template>
  <div id="app">
    <EditorPanel :key="'editoe1'" :id="'editoe1'" v-model="content"></EditorPanel>
    <EditorPanel :key="'editoe2'" :id="'editoe2'" v-model="content1"></EditorPanel>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        content: '',
        content1: ''
      }
    },
    watch: {
      content(newval, oldval) {
        // console.log('content----1 ', newval)
      },
      content1(newval, oldval) {
        // console.log('content----2 ', newval)
      }
    }
  }
</script>

<style>
  #app {
    width: 200px;
    height: 800px;
  }
</style>