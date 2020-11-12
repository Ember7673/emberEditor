<!--
 * @Author: wangtengteng
 * @Date: 2020-10-30 15:04:20
 * @LastEditTime: 2020-11-12 16:05:59
 * @FillPath: Do not edit
-->
<template>
  <div class="editor">
    <div class="editor-header">
      <ul>
        <li>
          <input ref="uploadImg" class="uploadImg" type="file" @change="onUploadImg" />
          <i class="iconfont">&#xe64a;</i>
          <!-- 上传图片 -->
        </li>
        <li @click="onChooseFormula">
          <i class="iconfont">&#xe6fd;</i>
          <!-- 特殊符号 -->
        </li>
        <li @click="onClear">
          <i class="iconfont">&#xe74c;</i>
          <!-- 清空 -->
        </li>
      </ul>
    </div>
    <EditorDiv v-model="content" @editorBlur="editorBlur"></EditorDiv>

    <el-dialog title="添加特殊符号" :visible.sync="formulaDialogVisible" width="400">
      <div id="fm-editor-body"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onChooseFormulaCancle">取 消</el-button>
        <el-button type="primary" @click="onConfirmFormula">确 定</el-button>
      </span>
    </el-dialog>

    <div class="editor-footer">
      <el-button>取 消</el-button>
      <el-button type="primary" @click="onConfirmGetContent">确 定</el-button>
    </div>

  </div>
</template>

<script>
  import EditorDiv from "../components/editor";
  import utils from '@/utils/utils';
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
        formulaObj: {}, //特殊符号对象
        formulaDialogVisible: false,
      };
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
              if (utils.isEmpty(this.range)) {
                this.content += `<img src="${this.imageUrl}" />`
              } else {
                this.range.insertNode(imageNode);
                this.content += `<img src="${this.imageUrl}" />`
              }
              this.$forceUpdate()
              // 处理上传同一个图片失效的问题
              this.$refs['uploadImg'].value = null;
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
      // 选择特殊符号，添加到页面上
      onChooseFormula() {
        this.formulaDialogVisible = true;
        if (utils.isEmpty(this.formulaObj)) {
          window.parameters = {};
          this.formulaObj = new Editor(window.actions, window.panels, window.parameters);
        } else {
          // 删除特殊符号中输入文本区域内容
          document.getElementsByClassName('fm-editor-content')[0].value = "";
          // 删除特殊符号结果区域中内容
          let resultNode = document.getElementsByClassName('fm-editor-result-area-inner')[0];
          let child = resultNode.lastElementChild;
          while (child) {
            resultNode.removeChild(child);
            child = resultNode.lastElementChild;
          }
        }
      },
      // 取消选择特殊符号
      onChooseFormulaCancle() {
        this.formulaDialogVisible = false;
      },
      // 确认选中的特殊符号
      onConfirmFormula() {
        let _this = this;
        this.formulaObj.getEquationPng(function (src, mlang, equation) {
          let formulaHtml = '<img class="fm-editor-equation" src="' + src + '" data-mlang="' + mlang +
            '" data-equation="' + encodeURIComponent(equation) + '"/>'
          if (utils.isEmpty(_this.range)) {
            _this.content += formulaHtml;
          } else {
            let imageNode = document.createElement('img');
            imageNode.src = src;
            imageNode.className = 'fm-editor-equation';
            imageNode.setAttribute('data-mlang', mlang);
            imageNode.setAttribute('data-equation', encodeURIComponent(equation));
            _this.range.insertNode(imageNode);
            _this.content += formulaHtml;
          }
        })
        this.formulaDialogVisible = false;
      },
      // 编辑器确定添加内容
      onConfirmGetContent() {
        let content = '<div>' + this.content + '</div>'
        this.$emit('getContent', content);
      }
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
    min-width: 300px;
    background: #fff;

    .editor-header {
      border-bottom: 1px solid #ccc;
      min-width: 300px;

      .uploadImg {
        opacity: 0;
        width: 50px;
        height: 35px;
        position: absolute;
      }

      li {
        display: inline-block;
        padding: 10px;
        cursor: pointer;
        font-size: 12px;
        width: 50px;
        height: 35px;
        line-height: 35px;

        i {
          display: block;
          text-align: center;

        }

        &:hover {
          background: #ddd;
        }
      }
    }

    .editor-footer {
      border-top: 1px solid #ccc;
      padding: 10px;
      height: 40px;

      button {
        float: right;
        margin-right: 20px;
      }
    }
  }
</style>