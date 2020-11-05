<!--
 * @Author: wangtengteng
 * @Date: 2020-10-30 15:04:20
 * @LastEditTime: 2020-11-04 18:47:12
 * @FillPath: Do not edit
-->
<template>
  <div class="editor">
    <div class="editor-header">
      <ul>
        <li>
          <input type="file" @change="onUploadImg" />
          <i class="iconfont">&#xe64a;</i>
          上传图片
        </li>
        <li>
          <i class="iconfont">&#xe6fd;</i>
          特殊符号
        </li>
        <li @click="onClear">
          <i class="iconfont">&#xe74c;</i>
          清空
        </li>
      </ul>
    </div>
    <EditorDiv v-model="content" @editorBlur="editorBlur"></EditorDiv>
  </div>
</template>

<script>
  import EditorDiv from "../components/editor";
  import "../assets/css/iconfont/iconfont.css";
  export default {
    name: "EditorPanel",
    components: {
      EditorDiv
    },
    data() {
      return {
        content: "这是一个可编辑段落。",
        imageUrl: '',
        range: {}, // 页面光标停止range
      };
    },
    watch: {
      content(newVal, oldVal) {
        console.log("---", newVal);
      }
    },
    methods: {
      onClear() {
        this.content = "";
      },
      editorBlur() {
        let sel = window.getSelection();
        this.range = sel.getRangeAt(0);
      },
      onUploadImg(e) {
        this.imageUrl = '';
        let file = e.target.files[0];
        this.uploadImg(file, res => {
          if (res.success) {
            if (res.result.sArray[0]) {
              this.imageUrl = res.result.sArray[0].url;
              let imageNode = document.createElement('img');
              imageNode.src = this.imageUrl;
              console.log('this.range', this.range)
              if (Object.keys(this.range).length) {
                this.content += `<img src="${this.imageUrl}" />`
              } else {
                this.range.insertNode(imageNode);
              }
              // success(res.result.sArray[0].url);
            } else {
              console.log('文件地址错误');
              // failure("文件地址错误");
            }
          } else {
            console.log('文件地址错误');
            // failure(res.errorMsg);
          }
        });
      },
      async uploadImg(file, callback) {
        let timeStr = this.toDateTimeStr2();
        let fd = new FormData();
        let origin = "g12e";
        let url = "http://upload.g12e.com/mfileUpload";
        fd.append("files", file);
        fd.append("origin", origin);
        fd.append("time", timeStr);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        if (this.checkFile(file)) {
          this.$axios.post(url, fd, config).then(res => {
            callback(res.data);
          });
        }
      },
      toDateTimeStr2(intTime) {
        let date;
        if (intTime == null) {
          date = new Date();
        } else {
          date = new Date(intTime);
        }
        let month = date.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        let day = date.getDate();
        if (day < 10) {
          day = "0" + day;
        }
        let hours = date.getHours();
        if (hours < 10) {
          hours = "0" + hours;
        }
        let m = date.getMinutes();
        if (m < 10) {
          m = "0" + m;
        }
        let s = date.getSeconds();
        if (s < 10) {
          s = "0" + s;
        }
        return (
          date.getFullYear() +
          "-" +
          month +
          "-" +
          day +
          " " +
          hours +
          ":" +
          m +
          ":" +
          s
        );
      },
      checkFile(file) {
        //文件为空判断
        if (file === null || file === undefined) {
          alert("请选择您要上传的文件！");
          return false;
        }
        //检测文件类型
        if (file.type.indexOf("image") === -1) {
          alert("请选择图片文件！");
          return false;
        }
        //计算文件大小
        let size = Math.floor(file.size / 1024);
        if (size > 5000) {
          alert("上传文件不得超过5M!");
          return false;
        }
        return true;
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul,
  li,
  p {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .editor {
    border: 1px solid #ccc;
    // min-width: 500px;
    background: #fff;

    .editor-header {
      border-bottom: 1px solid #ccc;
      min-width: 500px;

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