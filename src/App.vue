<!--
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:03:59
 * @LastEditTime: 2020-11-16 17:19:09
 * @FillPath: Do not edit
-->
<template>
  <div id="app">
    <EditorPanel v-model="content"></EditorPanel>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        content: ''
      }
    },
    watch: {
      content(newval, oldval) {
        console.log('content---- ', newval)
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